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

  setPosition(position: string): ComponentBuilder {
    this.component.props.set("position", position);
    return this;
  }

  setTop(top: string): ComponentBuilder {
    this.component.props.set("top", top);
    return this;
  }

  setBottom(bottom: string): ComponentBuilder {
    this.component.props.set("bottom", bottom);
    return this;
  }

  setLeft(left: string): ComponentBuilder {
    this.component.props.set("left", left);
    return this;
  }

  setRight(right: string): ComponentBuilder {
    this.component.props.set("right", right);
    return this;
  }

  setZIndex(zIndex: string): ComponentBuilder {
    this.component.props.set("z-index", zIndex);
    return this;
  }

  setDisplay(display: string): ComponentBuilder {
    this.component.props.set("display", display);
    return this;
  }

  setOverflow(overflow: string): ComponentBuilder {
    this.component.props.set("overflow", overflow);
    return this;
  }

  setOverflowStyle(overflowStyle: string): ComponentBuilder {
    this.component.props.set("overflow-style", overflowStyle);
    return this;
  }

  setWidth(width: string): ComponentBuilder {
    this.component.props.set("width", width);
    return this;
  }

  setMinWidth(minWidth: string): ComponentBuilder {
    this.component.props.set("min-width", minWidth);
    return this;
  }

  setMaxWidth(maxWidth: string): ComponentBuilder {
    this.component.props.set("max-width", maxWidth);
    return this;
  }

  setHeight(height: string): ComponentBuilder {
    this.component.props.set("height", height);
    return this;
  }

  setMaxHeight(maxHeight: string): ComponentBuilder {
    this.component.props.set("max-height", maxHeight);
    return this;
  }

  setMinHeight(minHeight: string): ComponentBuilder {
    this.component.props.set("min-height", minHeight);
    return this;
  }

  setPadding(padding: string): ComponentBuilder {
    this.component.props.set("padding", padding);
    return this;
  }

  setPaddingTop(paddingTop: string): ComponentBuilder {
    this.component.props.set("padding-top", paddingTop);
    return this;
  }

  setPaddingBottom(paddingBottom: string): ComponentBuilder {
    this.component.props.set("padding-bottom", paddingBottom);
    return this;
  }

  setPaddingLeft(paddingLeft: string): ComponentBuilder {
    this.component.props.set("padding-left", paddingLeft);
    return this;
  }

  setPaddingRight(paddingRight: string): ComponentBuilder {
    this.component.props.set("padding-right", paddingRight);
    return this;
  }

  setMargin(margin: string): ComponentBuilder {
    this.component.props.set("margin", margin);
    return this;
  }

  setMarginTop(marginTop: string): ComponentBuilder {
    this.component.props.set("margin-top", marginTop);
    return this;
  }

  setMarginBottom(marginBottom: string): ComponentBuilder {
    this.component.props.set("margin-bottom", marginBottom);
    return this;
  }

  setMarginLeft(marginLeft: string): ComponentBuilder {
    this.component.props.set("margin-left", marginLeft);
    return this;
  }

  setMarginRight(marginRight: string): ComponentBuilder {
    this.component.props.set("margin-right", marginRight);
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

  setFontStyle(fontStyle: string): ComponentBuilder {
    this.component.props.set("font-style", fontStyle);
    return this;
  }

  setTextDirection(textDirection: string): ComponentBuilder {
    this.component.props.set("direction", textDirection);
    return this;
  }

  setTextAlign(align: string): ComponentBuilder {
    this.component.props.set("text-align", align);
    return this;
  }

  setTextOutline(textOutline: string): ComponentBuilder {
    this.component.props.set("text-outline", textOutline);
    return this;
  }

  setTextDecoration(textDecoration: string): ComponentBuilder {
    this.component.props.set("text-decoration", textDecoration);
    return this;
  }

  setTextShadow(textShadow: string): ComponentBuilder {
    this.component.props.set("text-shadow", textShadow);
    return this;
  }

  setBackgroundColor(color: string): ComponentBuilder {
    this.component.props.set("background-color", color);
    return this;
  }

  setBorder(border: string): ComponentBuilder {
    this.component.props.set("border", border);
    return this;
  }

  setBorderLeft(borderLeft: string): ComponentBuilder {
    this.component.props.set("border-left", borderLeft);
    return this;
  }

  setBorderRight(borderRight: string): ComponentBuilder {
    this.component.props.set("border-right", borderRight);
    return this;
  }

  setBorderTop(borderTop: string): ComponentBuilder {
    this.component.props.set("border-top", borderTop);
    return this;
  }

  setBorderBottom(borderBottom: string): ComponentBuilder {
    this.component.props.set("border-bottom", borderBottom);
    return this;
  }

  setBorderRadius(borderRadius: string): ComponentBuilder {
    this.component.props.set("border-radius", borderRadius);
    return this;
  }

  setBorderRadiusTopLeft(borderRadiusTopLeft: string): ComponentBuilder {
    this.component.props.set("border-top-left-radius", borderRadiusTopLeft);
    return this;
  }

  setBorderRadiusTopRight(borderRadiusTopRight: string): ComponentBuilder {
    this.component.props.set("border-top-right-radius", borderRadiusTopRight);
    return this;
  }

  setBorderRadiusBottomRight(
    borderRadiusBottomRight: string
  ): ComponentBuilder {
    this.component.props.set(
      "border-bottom-right-radius",
      borderRadiusBottomRight
    );
    return this;
  }

  setBorderRadiusBottomLeft(borderRadiusBottomLeft: string): ComponentBuilder {
    this.component.props.set(
      "border-bottom-left-radius",
      borderRadiusBottomLeft
    );
    return this;
  }

  private buildComponent(root: Component) {
    if (!root) return;

    const q: Component[] = [];
    q.push(root);

    while (q.length > 0) {
      const component = q.shift();
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

  build() {
    this.buildComponent(this.component);
  }

  add(component: Component) {
    this.component.children.push(component);
  }

  getComponent(): Component {
    return this.component;
  }
}
