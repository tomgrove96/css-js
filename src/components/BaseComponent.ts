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

    while (q.length > 0) {
      const next = q.shift();

      if (!next) continue;

      if (next === this) {
        document.body.insertAdjacentHTML("beforeend", next.getHTMLComponent());
      }

      const children = next.children.length;
      for (let i = 0; i < children; i++) {
        const parent = document.getElementById(next.id);
        const child = next.children[i];

        if (parent) {
          parent.insertAdjacentHTML("beforeend", child.getHTMLComponent());
        }
        q.push(child);
      }
    }
  }

  private mergeProps(props: IProp[]): Map<string, Type.propType> {
    let tempProps = new Map();
    props.forEach((prop) => {
      tempProps = new Map([...tempProps, ...prop.getProps()]);
    });
    return tempProps;
  }

  private getProps(props: IProp[]): string {
    const tempProps = this.mergeProps(props);
    let propStr = "";
    for (const [key, value] of tempProps) {
      if (key === "value" || key === "location" || key === "events") continue;

      propStr += `${key}: ${value};`;
    }
    return propStr;
  }

  private getHTMLComponent(): string {
    const props = this.mergeProps(this.props);
    const html = `
		<div
			id="${this.id}"
			style="${this.getProps(this.props)}">
			${props.has("value") ? props.get("value") : ""}
		</div>`;
    return html;
  }
}
