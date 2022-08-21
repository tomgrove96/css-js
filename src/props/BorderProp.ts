import * as Type from "../Type";
import IProp from "../interfaces/IProp";
import IBorder from "../interfaces/IBorder";
import { colorToString } from "../Color";

export default class BorderProp implements IProp {
  private props: Type.propType = new Map();

  constructor(border?: IBorder) {
    this.build(border);
  }

  private build(border?: IBorder) {
    if (!border) return;

    if (!border.sides) {
      this.setBorder(border);
      return;
    }

    border.sides.forEach((side) => {
      side === "top" ? this.setBorderTop(border) : false;
      side === "bottom" ? this.setBorderBottom(border) : false;
      side === "left" ? this.setBorderLeft(border) : false;
      side === "right" ? this.setBorderRight(border) : false;
    });
  }

  setBorder(border: IBorder): BorderProp {
    this.props.set("border", this.borderToString(border));
    return this;
  }

  setBorderLeft(border: IBorder): BorderProp {
    this.props.set("border-left", this.borderToString(border));
    return this;
  }

  setBorderRight(border: IBorder): BorderProp {
    this.props.set("border-right", this.borderToString(border));
    return this;
  }

  setBorderTop(border: IBorder): BorderProp {
    this.props.set("border-top", this.borderToString(border));
    return this;
  }

  setBorderBottom(border: IBorder): BorderProp {
    this.props.set("border-bottom", this.borderToString(border));
    return this;
  }

  private borderToString(border: IBorder): string {
    let borderStr = `${border.style ? border.style : "solid"}`;
    border.width ? (borderStr += ` ${border.width}`) : false;
    border.color ? (borderStr += ` ${colorToString(border.color)}`) : false;
    return borderStr;
  }

  getProps(): Type.propType {
    return this.props;
  }
}
