import * as Type from "../Type";
import IProp from "./IProp";
import { colorToString } from "../Util";

type borderDef = {
  style: Type.borderStyle;
  width?: Type.borderWidth;
  color?: Type.Color;
};

export default class BorderProp implements IProp {
  private props: Type.propType;

  constructor(border?: borderDef) {
    this.props = new Map();

    if (border) this.setBorder(border);
  }

  setBorder(border: borderDef): BorderProp {
    let borderStr = `${border.style}`;
    border.width ? (borderStr += ` ${border.width}`) : false;
    border.color ? (borderStr += ` ${colorToString(border.color)}`) : false;
    this.props.set("border", borderStr);

    return this;
  }

  setBorderLeft(border: borderDef): BorderProp {
    let borderStr = `${border.style}`;
    border.width ? (borderStr += ` ${border.width}`) : false;
    border.color ? (borderStr += ` ${colorToString(border.color)}`) : false;
    this.props.set("border-left", borderStr);
    return this;
  }

  setBorderRight(border: borderDef): BorderProp {
    let borderStr = `${border.style}`;
    border.width ? (borderStr += ` ${border.width}`) : false;
    border.color ? (borderStr += ` ${colorToString(border.color)}`) : false;
    this.props.set("border-right", borderStr);
    return this;
  }

  setBorderTop(border: borderDef): BorderProp {
    let borderStr = `${border.style}`;
    border.width ? (borderStr += ` ${border.width}`) : false;
    border.color ? (borderStr += ` ${colorToString(border.color)}`) : false;
    this.props.set("border-top", borderStr);
    return this;
  }

  setBorderBottom(border: borderDef): BorderProp {
    let borderStr = `${border.style}`;
    border.width ? (borderStr += ` ${border.width}`) : false;
    border.color ? (borderStr += ` ${colorToString(border.color)}`) : false;
    this.props.set("border-bottom", borderStr);
    return this;
  }

  getProps(): Type.propType {
    return this.props;
  }
}
