import * as Type from "../Type";
import IProp from "./IProp";
import IFont from "../interfaces/IFont";
import IColor from "../interfaces/IColor";
import { colorToString } from "../Color";

export default class FontProp implements IProp {
  private props: Type.propType;

  constructor(font?: IFont) {
    this.props = new Map();

    if (font) this.setFont(font);
  }

  setFont(font: IFont): FontProp {
    this.setFamily(font.family);
    font.size ? this.setSize(font.size) : false;
    font.weight ? this.setWeight(font.weight) : false;
    font.color ? this.setColor(font.color) : false;
    font.style ? this.setStyle(font.style) : false;
    return this;
  }

  setFamily(font: Type.fontFamily): FontProp {
    this.props.set("font-family", font);
    return this;
  }

  setSize(size: Type.fontSize): FontProp {
    this.props.set("font-size", size);
    return this;
  }

  setWeight(weight: Type.fontWeight): FontProp {
    this.props.set("font-weight", weight);
    return this;
  }

  setStyle(style: Type.fontStyle): FontProp {
    this.props.set("font-style", style);
    return this;
  }

  setColor(color: IColor): FontProp {
    this.props.set("color", colorToString(color));
    return this;
  }

  getProps(): Type.propType {
    return this.props;
  }
}
