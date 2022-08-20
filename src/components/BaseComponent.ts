import IProp from "../props/IProp";
import * as Type from "../Type";

export default class Component {
  id: string;
  props: IProp[];
  children: Component[];

  constructor(id: string, props: IProp[]) {
    this.id = id;
    this.props = props;
    this.children = [];
  }

  add(component: Component): Component {
    if (this.children.includes(component)) return this;
    this.children.push(component);
    return this;
  }

  pack() {
    const q: Component[] = [];
    q.push(this);
    let result = this.getComponentHTML(this.mergeProps(this.props));

    while (q.length > 0) {
      const next = q.shift();

      if (!next) continue;

      const children = next.children.length;
      for (let i = 0; i < children; i++) {
        const child = next.children[i];

        result = this.addChildHTML(
          next.getComponentHTML(this.mergeProps(next.props)),
          child.getComponentHTML(this.mergeProps(child.props))
        );
        q.push(child);
      }
    }
    document.body.insertAdjacentHTML("beforeend", result);
  }

  private mergeProps(props: IProp[]): Type.propType {
    let tempProps = new Map();
    props.forEach((prop) => {
      tempProps = new Map([...tempProps, ...prop.getProps()]);
    });
    return tempProps;
  }

  private propsToString(props: Type.propType): string {
    let propStr = "";
    for (const [key, value] of props) {
      if (key === "value") continue;

      propStr += `${key}: ${value};`;
    }
    return propStr;
  }

  private addChildHTML(parent: string, child: string): string {
    let index = parent.lastIndexOf("</div>");
    const p1 = parent.slice(0, index);
    const p2 = parent.slice(index);
    return p1.concat(child, p2);
  }

  private getComponentHTML(props: Type.propType): string {
    const html = `
		<div
			id="${this.id}"
			style="${this.propsToString(props)}">
			${props.has("value") ? props.get("value") : ""}
		</div>`;
    return html;
  }
}
