import IBuilder from "./IBuilder";
import * as Type from "../Type";

export default class Component {
  id: string;
  builders: IBuilder[];
  children: Component[];

  constructor(id: string, def: IBuilder[]) {
    this.id = id;
    this.builders = def;
    this.children = [];
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

  private mergeBuilderProps(builders: IBuilder[]): Map<string, Type.propType> {
    let props = new Map();
    builders.forEach((builder) => {
      props = new Map([...props, ...builder.build()]);
    });
    return props;
  }

  private getProps(builders: IBuilder[]): string {
    const props = this.mergeBuilderProps(builders);
    let propStr = "";
    for (const [key, value] of props) {
      if (key === "value" || key === "location" || key === "events") continue;

      propStr += `${key}: ${value};`;
    }
    return propStr;
  }

  private getHTMLComponent(): string {
    const props = this.mergeBuilderProps(this.builders);
    const html = `
		<div
			id="${this.id}"
			style="${this.getProps(this.builders)}">
			${props.has("value") ? props.get("value") : ""}
		</div>`;
    return html;
  }
}
