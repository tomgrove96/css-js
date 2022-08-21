import * as Type from "../Type";
import IProp from "../interfaces/IProp";
import IBorder from "../interfaces/IBorder";
import { colorToString } from "../Color";

export default class BorderProp implements IProp {
  private props: Type.propType;

  constructor(border?: IBorder) {
    this.props = new Map();

    if (border) this.setBorder(border);
  }

  setBorder(border: IBorder): BorderProp {
    let borderStr = `${border.style}`;
    border.width ? (borderStr += ` ${border.width}`) : false;
    border.color ? (borderStr += ` ${colorToString(border.color)}`) : false;
    this.props.set("border", borderStr);

    return this;
  }

  setBorderLeft(border: IBorder): BorderProp {
    let borderStr = `${border.style}`;
    border.width ? (borderStr += ` ${border.width}`) : false;
    border.color ? (borderStr += ` ${colorToString(border.color)}`) : false;
    this.props.set("border-left", borderStr);
    return this;
  }

  setBorderRight(border: IBorder): BorderProp {
    let borderStr = `${border.style}`;
    border.width ? (borderStr += ` ${border.width}`) : false;
    border.color ? (borderStr += ` ${colorToString(border.color)}`) : false;
    this.props.set("border-right", borderStr);
    return this;
  }

  setBorderTop(border: IBorder): BorderProp {
    let borderStr = `${border.style}`;
    border.width ? (borderStr += ` ${border.width}`) : false;
    border.color ? (borderStr += ` ${colorToString(border.color)}`) : false;
    this.props.set("border-top", borderStr);
    return this;
  }

  setBorderBottom(border: IBorder): BorderProp {
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
