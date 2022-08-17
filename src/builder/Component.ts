import * as Type from "../Type";
import { colorToString, calcPosition } from "../Util";

export class GridComponent {
    constructor() {
        
    }
}

export class Text {
    component: Component;
    value: string;

    constructor(component: Component) {
        this.component = component;
        this.value = "";
    }

    setValue(value: string): Component {
        this.component.props.set("value", value);
        return this.component;
    }

    setFont(font: string): Component {
        this.component.props.set("font-family", font);
        return this.component;
      }
    
      setFontSize(fontSize: Type.unit): Component {
        this.component.props.set("font-size", fontSize);
        return this.component;
      }
    
      setFontWeight(fontWeight: Type.unit): Component {
        this.component.props.set("font-weight", fontWeight);
        return this.component;
      }
    
      setFontColor(color: Type.Color): Component {
        this.component.props.set("color", colorToString(color));
        return this.component;
      }
    
      setFontStyle(fontStyle: Type.fontStyle): Component {
        this.component.props.set("font-style", fontStyle);
        return this.component;
      }
    
      setTextDirection(textDirection: string): Component {
        this.component.props.set("direction", textDirection);
        return this.component;
      }
    
      setTextAlign(align: string): Component {
        this.component.props.set("text-align", align);
        return this.component;
      }
    
      setTextOutline(textOutline: string): Component {
        this.component.props.set("text-outline", textOutline);
        return this.component;
      }
    
      setTextDecoration(textDecoration: string): Component {
        this.component.props.set("text-decoration", textDecoration);
        return this.component;
      }
    
      setTextShadow(textShadow: string): Component {
        this.component.props.set("text-shadow", textShadow);
        return this.component;
      }
}

export class Component {
  id: string;
  props: Map<string, string | string[]>;
  children: Component[];
  text: Text | undefined;

  constructor(id: string, text?: string) {
    this.id = id;
    this.props = new Map();
    this.children = [];
    text ? this.text = new Text(this) : text = undefined;
  }

  public setPosition(position: Type.position): Component {
    this.props.set("location", position);
    return this;
  }

  public setPlacement(placement: Type.placement): Component {
    this.props.set("position", placement);
    return this;
  }

  public setDisplay(display: Type.display): Component {
    this.props.set("display", display);
    return this;
  }

  public setHeight(height: Type.unit): Component {
    this.props.set("height", height);
    return this;
  }

  public setWidth(width: Type.unit): Component {
    this.props.set("width", width);
    return this;
  }

  public setBackgroundColor(color: Type.Color, opacity?: number): Component {
    let value = "";
    if(opacity) {
        value = `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity})`;
    } else {
        value = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
    }
    this.props.set("background-color", value);
    return this;
  }

  translate(x: Type.unit, y: Type.unit): Component {
    const transform = this.props.get("transform");
    if (!transform) {
      this.props.set("transform", `translate(${x}, ${y}) `);
      return this;
    }
    const temp = transform + ` translate(${x}, ${y})`;
    this.props.set("transform", temp);
    return this;
  }

  translateX(x: Type.unit): Component {
    const transform = this.props.get("transform");
    if (!transform) {
      this.props.set("transform", `translateX(${x})`);
      return this;
    }
    const temp = transform + ` translateX(${x}) `;
    this.props.set("transform", temp);
    return this;
  }

  translateY(y: Type.unit): Component {
    const transform = this.props.get("transform");
    if (!transform) {
      this.props.set("transform", `translateY(${y})`);
      return this;
    }
    const temp = transform + ` translateY(${y})`;
    this.props.set("transform", temp);
    return this;
  }

  setTop(top: Type.unit): Component {
    this.props.set("top", top);
    return this;
  }

  setBottom(bottom: Type.unit): Component {
    this.props.set("bottom", bottom);
    return this;
  }

  setLeft(left: Type.unit): Component {
    this.props.set("left", left);
    return this;
  }

  setRight(right: Type.unit): Component {
    this.props.set("right", right);
    return this;
  }

  setZIndex(zIndex: Type.zIndex): Component {
    this.props.set("z-index", `${zIndex}`);
    return this;
  }

  setOverflow(overflow: Type.overflow): Component {
    this.props.set("overflow", overflow);
    return this;
  }

  setMinWidth(minWidth: Type.unit): Component {
    this.props.set("min-width", minWidth);
    return this;
  }

  setMaxWidth(maxWidth: Type.unit): Component {
    this.props.set("max-width", maxWidth);
    return this;
  }

  setMaxHeight(maxHeight: Type.unit): Component {
    this.props.set("max-height", maxHeight);
    return this;
  }

  setMinHeight(minHeight: Type.unit): Component {
    this.props.set("min-height", minHeight);
    return this;
  }

  setPadding(padding: Type.unit): Component {
    this.props.set("padding", padding);
    return this;
  }

  setPaddingTop(paddingTop: Type.unit): Component {
    this.props.set("padding-top", paddingTop);
    return this;
  }

  setPaddingBottom(paddingBottom: Type.unit): Component {
    this.props.set("padding-bottom", paddingBottom);
    return this;
  }

  setPaddingLeft(paddingLeft: Type.unit): Component {
    this.props.set("padding-left", paddingLeft);
    return this;
  }

  setPaddingRight(paddingRight: Type.unit): Component {
    this.props.set("padding-right", paddingRight);
    return this;
  }

  setMargin(margin: Type.unit): Component {
    this.props.set("margin", margin);
    return this;
  }

  setMarginTop(marginTop: Type.unit): Component {
    this.props.set("margin-top", marginTop);
    return this;
  }

  setMarginBottom(marginBottom: Type.unit): Component {
    this.props.set("margin-bottom", marginBottom);
    return this;
  }

  setMarginLeft(marginLeft: Type.unit): Component {
    this.props.set("margin-left", marginLeft);
    return this;
  }

  setMarginRight(marginRight: Type.unit): Component {
    this.props.set("margin-right", marginRight);
    return this;
  }

  setBorder(
    borderStyle: Type.borderStyle,
    borderWidth?: Type.borderWidth,
    borderColor?: Type.Color
  ): Component {
    if (!borderWidth && !borderColor) this.props.set("border", borderStyle);

    if (borderWidth && !borderColor)
      this.props.set("border", `${borderStyle} ${borderWidth}`);

    if (borderWidth && borderColor)
      this.props.set(
        "border",
        `${borderStyle} ${borderWidth} ${colorToString(borderColor)}`
      );

    return this;
  }

  setBorderColor(borderColor: Type.Color): Component {
    this.props.set("border-color", colorToString(borderColor));
    return this;
  }

  setBorderStyle(borderStyle: Type.borderStyle): Component {
    this.props.set("border-style", borderStyle);
    return this;
  }

  setBorderWidth(borderWidth: Type.borderWidth): Component {
    this.props.set("border-width", borderWidth);
    return this;
  }

  setBorderBottomWidth(borderBottomWidth: Type.borderWidth): Component {
    this.props.set("border-bottom-width", borderBottomWidth);
    return this;
  }

  setBorderTopWidth(borderTopWidth: Type.borderWidth): Component {
    this.props.set("border-top-width", borderTopWidth);
    return this;
  }

  setBorderLeftWidth(borderLeftWidth: Type.borderWidth): Component {
    this.props.set("border-left-width", borderLeftWidth);
    return this;
  }

  setBorderRightWidth(borderRightWidth: Type.borderWidth): Component {
    this.props.set("border-right-width", borderRightWidth);
    return this;
  }

  setBorderLeft(borderLeft: string): Component {
    this.props.set("border-left", borderLeft);
    return this;
  }

  setBorderRight(borderRight: string): Component {
    this.props.set("border-right", borderRight);
    return this;
  }

  setBorderTop(borderTop: string): Component {
    this.props.set("border-top", borderTop);
    return this;
  }

  setBorderBottom(borderBottom: string): Component {
    this.props.set("border-bottom", borderBottom);
    return this;
  }

  setBorderRadius(borderRadius: string): Component {
    this.props.set("border-radius", borderRadius);
    return this;
  }

  setBorderRadiusTopLeft(borderRadiusTopLeft: string): Component {
    this.props.set("border-top-left-radius", borderRadiusTopLeft);
    return this;
  }

  setBorderRadiusTopRight(borderRadiusTopRight: string): Component {
    this.props.set("border-top-right-radius", borderRadiusTopRight);
    return this;
  }

  setBorderRadiusBottomRight(borderRadiusBottomRight: string): Component {
    this.props.set("border-bottom-right-radius", borderRadiusBottomRight);
    return this;
  }

  setBorderRadiusBottomLeft(borderRadiusBottomLeft: string): Component {
    this.props.set("border-bottom-left-radius", borderRadiusBottomLeft);
    return this;
  }

  private addProps(component: Component): string {
    if (!this.hasProps(component)) return "";
    let props = "";
    for (const [key, value] of component.props) {
      if (key === "value" || key === "location") continue;

      props += `${key}: ${value};`;
    }
    return props;
  }

  private hasProps(component: Component): boolean {
    if (component.props.size > 0)
        return true;
    return false;
  }

  private getHTML(component: Component): string {
    const html = `
		<div
			id="${component.id}"
			style="${this.addProps(component)}">
			${component.props.has("value") ? component.props.get("value") : ""}
		</div>`;
    return html;
  }


  private buildComponent(root: Component) {
    if (!root) return;

    const q: Component[] = [];
    q.push(root);

    while (q.length > 0) {
      const component = q.shift();
      if (!component) return;

      if (component === root) {
        document.body.insertAdjacentHTML("beforeend", this.getHTML(root));

        const element = document.getElementById(component.id);
        if (element) {
          const position = <Type.position>component.props.get("location");
          const { x, y } = calcPosition(position, element);
          element.style.left = x;
          element.style.top = y;
        }
      }

      const children = component.children.length;
      for (let i = 0; i < children; i++) {
        const parent = document.getElementById(component.id);
        const child = component.children[i];

        if (parent) {
          parent.insertAdjacentHTML("beforeend", this.getHTML(child));
          const element = document.getElementById(child.id);
          if (element) {
            const position = <Type.position>child.props.get("location");
            const { x, y } = calcPosition(position, element, parent);
            element.style.left = x;
            element.style.top = y;
          }
        }
        q.push(child);
      }
    }
  }

  public build() {
    this.buildComponent(this);
  }

  public add(builder: Component) {
    this.children.push(builder.getComponent());
  }

  public getComponent(): Component {
    return this;
  }
}
