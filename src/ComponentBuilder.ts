import { Component } from "./components/Component";
import { alignment, unit, position, zIndex, display, overflow, fontStyle } from "./Types";

export class ComponentBuilder {
  private component: Component;

  constructor(id: string) {
    this.component = new Component(id);
  }

  setValue(value: string): ComponentBuilder {
    this.component.props.set("value", value);
    return this;
  }

  translate(x: unit, y: unit): ComponentBuilder {
    const transform = this.component.props.get("transform");
    if (!transform) {
      this.component.props.set("transform", `translate(${x}, ${y}) `);
      return this;
    }
    const temp = transform + ` translate(${x}, ${y})`;
    this.component.props.set("transform", temp);
    return this;
  }

  translateX(x: unit): ComponentBuilder {
    const transform = this.component.props.get("transform");
    if (!transform) {
      this.component.props.set("transform", `translateX(${x})`);
      return this;
    }
    const temp = transform + ` translateX(${x}) `;
    this.component.props.set("transform", temp);
    return this;
  }

  translateY(y: unit): ComponentBuilder {
    const transform = this.component.props.get("transform");
    if (!transform) {
      this.component.props.set("transform", `translateY(${y})`);
      return this;
    }
    const temp = transform + ` translateY(${y})`;
    this.component.props.set("transform", temp);
    return this;
  }

  setPosition(position: position): ComponentBuilder {
    this.component.props.set("position", position);
    return this;
  }

  setTop(top: unit): ComponentBuilder {
    this.component.props.set("top", top);
    return this;
  }

  setBottom(bottom: unit): ComponentBuilder {
    this.component.props.set("bottom", bottom);
    return this;
  }

  setLeft(left: unit): ComponentBuilder {
    this.component.props.set("left", left);
    return this;
  }

  setRight(right: unit): ComponentBuilder {
    this.component.props.set("right", right);
    return this;
  }

  setZIndex(zIndex: zIndex): ComponentBuilder {
    this.component.props.set("z-index", `${zIndex}`);
    return this;
  }

  setDisplay(display: display): ComponentBuilder {
    this.component.props.set("display", display);
    return this;
  }

  setOverflow(overflow: overflow): ComponentBuilder {
    this.component.props.set("overflow", overflow);
    return this;
  }

  setWidth(width: unit): ComponentBuilder {
    this.component.props.set("width", width);
    return this;
  }

  setMinWidth(minWidth: unit): ComponentBuilder {
    this.component.props.set("min-width", minWidth);
    return this;
  }

  setMaxWidth(maxWidth: unit): ComponentBuilder {
    this.component.props.set("max-width", maxWidth);
    return this;
  }

  setHeight(height: unit): ComponentBuilder {
    this.component.props.set("height", height);
    return this;
  }

  setMaxHeight(maxHeight: unit): ComponentBuilder {
    this.component.props.set("max-height", maxHeight);
    return this;
  }

  setMinHeight(minHeight: unit): ComponentBuilder {
    this.component.props.set("min-height", minHeight);
    return this;
  }

  setPadding(padding: unit): ComponentBuilder {
    this.component.props.set("padding", padding);
    return this;
  }

  setPaddingTop(paddingTop: unit): ComponentBuilder {
    this.component.props.set("padding-top", paddingTop);
    return this;
  }

  setPaddingBottom(paddingBottom: unit): ComponentBuilder {
    this.component.props.set("padding-bottom", paddingBottom);
    return this;
  }

  setPaddingLeft(paddingLeft: unit): ComponentBuilder {
    this.component.props.set("padding-left", paddingLeft);
    return this;
  }

  setPaddingRight(paddingRight: unit): ComponentBuilder {
    this.component.props.set("padding-right", paddingRight);
    return this;
  }

  setMargin(margin: unit): ComponentBuilder {
    this.component.props.set("margin", margin);
    return this;
  }

  setMarginTop(marginTop: unit): ComponentBuilder {
    this.component.props.set("margin-top", marginTop);
    return this;
  }

  setMarginBottom(marginBottom: unit): ComponentBuilder {
    this.component.props.set("margin-bottom", marginBottom);
    return this;
  }

  setMarginLeft(marginLeft: unit): ComponentBuilder {
    this.component.props.set("margin-left", marginLeft);
    return this;
  }

  setMarginRight(marginRight: unit): ComponentBuilder {
    this.component.props.set("margin-right", marginRight);
    return this;
  }

  setFont(font: string): ComponentBuilder {
    this.component.props.set("font-family", font);
    return this;
  }

  setFontSize(fontSize: unit): ComponentBuilder {
    this.component.props.set("font-size", fontSize);
    return this;
  }

  setFontWeight(fontWeight: unit): ComponentBuilder {
    this.component.props.set("font-weight", fontWeight);
    return this;
  }

  setFontColor(color: string): ComponentBuilder {
    this.component.props.set("color", color);
    return this;
  }

  setFontStyle(fontStyle: fontStyle): ComponentBuilder {
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

  setBorderRadiusBottomRight(borderRadiusBottomRight: string): ComponentBuilder {
    this.component.props.set("border-bottom-right-radius", borderRadiusBottomRight);
    return this;
  }

  setBorderRadiusBottomLeft(borderRadiusBottomLeft: string): ComponentBuilder {
    this.component.props.set("border-bottom-left-radius", borderRadiusBottomLeft);
    return this;
  }

  setGrid(columns: string, rows: string): ComponentBuilder {
    this.setDisplay("grid");
    this.component.props.set("grid-template-columns", `repeat(${columns}, 1fr)`);
    this.component.props.set("grid-template-rows", `repeat(${rows}, 1fr)`);
    return this;
  }

  setGridGap(gap: string): ComponentBuilder {
    this.component.props.set("grid-gap", gap);
    return this;
  }

  setGridRowGap(gap: string): ComponentBuilder {
    this.component.props.set("grid-row-gap", gap);
    return this;
  }

  setGridColumnGap(gap: string): ComponentBuilder {
    this.component.props.set("grid-column-gap", gap);
    return this;
  }

  setJustifyGridItems(justifyItems: string): ComponentBuilder {
    this.component.props.set("justify-items", justifyItems);
    return this;
  }

  setAlignGridItems(alignItems: string): ComponentBuilder {
    this.component.props.set("align-items", alignItems);
    return this;
  }

  setPlaceGridItems(placeItems: string): ComponentBuilder {
    this.component.props.set("align-items", placeItems);
    this.component.props.set("justify-items", placeItems);
    return this;
  }

  setJustifyGridContent(justifyContent: alignment): ComponentBuilder {
    this.component.props.set("justify-content", justifyContent);
    return this;
  }

  setAlignGridContent(alignContent: string): ComponentBuilder {
    this.component.props.set("align-content", alignContent);
    return this;
  }

  setPlaceGridContent(placeContent: string): ComponentBuilder {
    this.component.props.set("place-content", placeContent);
    return this;
  }

  private buildComponent(root: Component) {
    if (!root) return;

    const q: Component[] = [];
    q.push(root);

    while (q.length > 0) {
      const component = q.shift();
      if (!component) return;

      if (component === root) document.body.insertAdjacentHTML("beforeend", root.getHTML());

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
