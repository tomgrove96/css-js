import { IComponent } from "./IComponent";

export class Component implements IComponent {
  id: string;
  props: Map<string, string>;
  children: Component[];

  constructor(id: string) {
    this.id = id;
    this.props = new Map();
    this.children = [];
  }

  private addProps(): string {
    if (!this.hasProps()) return "";
    let props = "";
    for (const [key, value] of this.props) {
      if (key === "value") continue;
      props += `${key}: ${value};`;
    }
    return props;
  }

  private hasProps(): boolean {
    if (this.props.has("value")) {
      if (this.props.size > 1) return true;
      return false;
    }
    if (this.props.size > 0) return true;
    return false;
  }

  public getHTML(): string {
    const html = `
		<div
			id="${this.id}"
			style="${this.addProps()}">
			${this.props.has("value") ? this.props.get("value") : ""}
		</div>`;
    return html;
  }
}
