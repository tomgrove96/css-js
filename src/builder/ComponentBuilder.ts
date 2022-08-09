import { Component } from "./Component";
import { colorToString } from "../Util";
import * as Type from "../Type";

export class ComponentBuilder {
  private component: Component;

  constructor(id: string) {
    this.component = new Component(id);
  }

  setValue(value: string): ComponentBuilder {
    this.component.props.set("value", value);
    return this;
  }

  translate(x: Type.unit, y: Type.unit): ComponentBuilder {
    const transform = this.component.props.get("transform");
    if (!transform) {
      this.component.props.set("transform", `translate(${x}, ${y}) `);
      return this;
    }
    const temp = transform + ` translate(${x}, ${y})`;
    this.component.props.set("transform", temp);
    return this;
  }

  translateX(x: Type.unit): ComponentBuilder {
    const transform = this.component.props.get("transform");
    if (!transform) {
      this.component.props.set("transform", `translateX(${x})`);
      return this;
    }
    const temp = transform + ` translateX(${x}) `;
    this.component.props.set("transform", temp);
    return this;
  }

  translateY(y: Type.unit): ComponentBuilder {
    const transform = this.component.props.get("transform");
    if (!transform) {
      this.component.props.set("transform", `translateY(${y})`);
      return this;
    }
    const temp = transform + ` translateY(${y})`;
    this.component.props.set("transform", temp);
    return this;
  }

  setPosition(position: Type.position): ComponentBuilder {
    this.component.props.set("position", position);
    return this;
  }

  setTop(top: Type.unit): ComponentBuilder {
    this.component.props.set("top", top);
    return this;
  }

  setBottom(bottom: Type.unit): ComponentBuilder {
    this.component.props.set("bottom", bottom);
    return this;
  }

  setLeft(left: Type.unit): ComponentBuilder {
    this.component.props.set("left", left);
    return this;
  }

  setRight(right: Type.unit): ComponentBuilder {
    this.component.props.set("right", right);
    return this;
  }

  setZIndex(zIndex: Type.zIndex): ComponentBuilder {
    this.component.props.set("z-index", `${zIndex}`);
    return this;
  }

  setDisplay(display: Type.display): ComponentBuilder {
    this.component.props.set("display", display);
    return this;
  }

  setOverflow(overflow: Type.overflow): ComponentBuilder {
    this.component.props.set("overflow", overflow);
    return this;
  }

  setWidth(width: Type.unit): ComponentBuilder {
    this.component.props.set("width", width);
    return this;
  }

  setMinWidth(minWidth: Type.unit): ComponentBuilder {
    this.component.props.set("min-width", minWidth);
    return this;
  }

  setMaxWidth(maxWidth: Type.unit): ComponentBuilder {
    this.component.props.set("max-width", maxWidth);
    return this;
  }

  setHeight(height: Type.unit): ComponentBuilder {
    this.component.props.set("height", height);
    return this;
  }

  setMaxHeight(maxHeight: Type.unit): ComponentBuilder {
    this.component.props.set("max-height", maxHeight);
    return this;
  }

  setMinHeight(minHeight: Type.unit): ComponentBuilder {
    this.component.props.set("min-height", minHeight);
    return this;
  }

  setPadding(padding: Type.unit): ComponentBuilder {
    this.component.props.set("padding", padding);
    return this;
  }

  setPaddingTop(paddingTop: Type.unit): ComponentBuilder {
    this.component.props.set("padding-top", paddingTop);
    return this;
  }

  setPaddingBottom(paddingBottom: Type.unit): ComponentBuilder {
    this.component.props.set("padding-bottom", paddingBottom);
    return this;
  }

  setPaddingLeft(paddingLeft: Type.unit): ComponentBuilder {
    this.component.props.set("padding-left", paddingLeft);
    return this;
  }

  setPaddingRight(paddingRight: Type.unit): ComponentBuilder {
    this.component.props.set("padding-right", paddingRight);
    return this;
  }

  setMargin(margin: Type.unit): ComponentBuilder {
    this.component.props.set("margin", margin);
    return this;
  }

  setMarginTop(marginTop: Type.unit): ComponentBuilder {
    this.component.props.set("margin-top", marginTop);
    return this;
  }

  setMarginBottom(marginBottom: Type.unit): ComponentBuilder {
    this.component.props.set("margin-bottom", marginBottom);
    return this;
  }

  setMarginLeft(marginLeft: Type.unit): ComponentBuilder {
    this.component.props.set("margin-left", marginLeft);
    return this;
  }

  setMarginRight(marginRight: Type.unit): ComponentBuilder {
    this.component.props.set("margin-right", marginRight);
    return this;
  }

  setFont(font: string): ComponentBuilder {
    this.component.props.set("font-family", font);
    return this;
  }

  setFontSize(fontSize: Type.unit): ComponentBuilder {
    this.component.props.set("font-size", fontSize);
    return this;
  }

  setFontWeight(fontWeight: Type.unit): ComponentBuilder {
    this.component.props.set("font-weight", fontWeight);
    return this;
  }

  setFontColor(color: Type.Color): ComponentBuilder {
    this.component.props.set("color", colorToString(color));
    return this;
  }

  setFontStyle(fontStyle: Type.fontStyle): ComponentBuilder {
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

  setBackgroundColor(color: Type.Color, opacity?: number): ComponentBuilder {
    let value = "";
    if(opacity) {
        value = `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity})`;
        console.log("Opacity was given");
    } else {
        value = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
        console.log("Opacity was NOT given");
    }
    this.component.props.set("background-color", value);
    return this;
  }

  setBorder(
    borderStyle: Type.borderStyle,
    borderWidth?: Type.borderWidth,
    borderColor?: Type.Color
  ): ComponentBuilder {
    if (!borderWidth && !borderColor) this.component.props.set("border", borderStyle);

    if (borderWidth && !borderColor)
      this.component.props.set("border", `${borderStyle} ${borderWidth}`);

    if (borderWidth && borderColor)
      this.component.props.set(
        "border",
        `${borderStyle} ${borderWidth} ${colorToString(borderColor)}`
      );

    return this;
  }

  setBorderColor(borderColor: Type.Color): ComponentBuilder {
    this.component.props.set("border-color", colorToString(borderColor));
    return this;
  }

  setBorderStyle(borderStyle: Type.borderStyle): ComponentBuilder {
    this.component.props.set("border-style", borderStyle);
    return this;
  }

  setBorderWidth(borderWidth: Type.borderWidth): ComponentBuilder {
    this.component.props.set("border-width", borderWidth);
    return this;
  }

  setBorderBottomWidth(borderBottomWidth: Type.borderWidth): ComponentBuilder {
    this.component.props.set("border-bottom-width", borderBottomWidth);
    return this;
  }

  setBorderTopWidth(borderTopWidth: Type.borderWidth): ComponentBuilder {
    this.component.props.set("border-top-width", borderTopWidth);
    return this;
  }

  setBorderLeftWidth(borderLeftWidth: Type.borderWidth): ComponentBuilder {
    this.component.props.set("border-left-width", borderLeftWidth);
    return this;
  }

  setBorderRightWidth(borderRightWidth: Type.borderWidth): ComponentBuilder {
    this.component.props.set("border-right-width", borderRightWidth);
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

  setJustifyGridContent(justifyContent: Type.alignment): ComponentBuilder {
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

  add(builder: ComponentBuilder) {
    this.component.children.push(builder.getComponent());
  }

  getComponent(): Component {
    return this.component;
  }
}
