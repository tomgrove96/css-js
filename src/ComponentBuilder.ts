import { Component } from "./Component";

export class ComponentBuilder {
  private component: Component;

  constructor(id: string) {
    this.component = new Component(id);
  }

  setValue(value: string): ComponentBuilder {
    this.component.props.set("value", value);
    return this;
  }

  setWidth(width: string): ComponentBuilder {
    this.component.props.set("width", width);
    return this;
  }

  setHeight(height: string): ComponentBuilder {
    this.component.props.set("height", height);
    return this;
  }

  setPadding(padding: string): ComponentBuilder {
    this.component.props.set("padding", padding);
    return this;
  }

  setMargin(margin: string): ComponentBuilder {
    this.component.props.set("margin", margin);
    return this;
  }

  setFont(font: string): ComponentBuilder {
    this.component.props.set("font-family", font);
    return this;
  }

  setFontSize(fontSize: string): ComponentBuilder {
    this.component.props.set("font-size", fontSize);
    return this;
  }

  setFontWeight(fontWeight: string): ComponentBuilder {
    this.component.props.set("font-weight", fontWeight);
    return this;
  }

  setFontColor(color: string): ComponentBuilder {
    this.component.props.set("color", color);
    return this;
  }

  setTextAlign(align: string): ComponentBuilder {
    this.component.props.set("text-align", align);
    return this;
  }

  setBackgroundColor(color: string): ComponentBuilder {
    this.component.props.set("background-color", color);
    return this;
  }

  build() {
    this.buildComponent(this.component);
  }

  buildComponent(root: Component) {
    if (!root) return;

    let q: Component[] = [];
    q.push(root);

    while (q.length > 0) {
      let component = q.shift();
      if (!component) return;

      if (component === root)
        document.body.insertAdjacentHTML("beforeend", root.getHTML());

      const children = component.children.length;

      for (let i = 0; i < children; i++) {
        const parent = document.getElementById(component.id);
        const child = component.children[i];
        if (parent) parent.insertAdjacentHTML("beforeend", child.getHTML());
        q.push(child);
      }
    }
  }

  add(component: Component) {
    this.component.children.push(component);
  }

  getComponent(): Component {
    return this.component;
  }
}
