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

  add(component: Component) {
    this.component.children.push(component);
  }

  build(): Component {
    return this.component;
  }
}
