import IBuilder from "./IBuilder";
import * as Type from "../Type";
import { colorToString } from "../Util";

type fontFamily = "serif" | "sans-serif" | string;

type fontWeight =
  | "normal"
  | "bold"
  | "bolder"
  | "lighter"
  | "inherit"
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900;

type fontSize =
  | "xx-small"
  | "x-small"
  | "small"
  | "medium"
  | "large"
  | "x-large"
  | "xxlarge"
  | "smaller"
  | "larger"
  | "inherit"
  | Type.unit;

type fontStyle = "normal" | "italic" | "oblique" | "inherit";

type fontDef = {
  family: fontFamily;
  size?: fontSize;
  weight?: fontWeight;
  color?: Type.Color;
  style?: fontStyle;
};

export default class FontDef implements IBuilder {
  private props: Map<string, Type.propType>;

  constructor(font?: fontDef) {
    this.props = new Map();

    if (font) this.setFont(font);
  }

  setFont(font: fontDef) {
    this.setFamily(font.family);
    font.size ? this.setSize(font.size) : false;
    font.weight ? this.setWeight(font.weight) : false;
    font.color ? this.setColor(font.color) : false;
    font.style ? this.setStyle(font.style) : false;
  }

  setFamily(font: fontFamily): FontDef {
    this.props.set("font-family", font);
    return this;
  }

  setSize(size: fontSize): FontDef {
    this.props.set("font-size", size);
    return this;
  }

  setWeight(weight: fontWeight): FontDef {
    this.props.set("font-weight", weight);
    return this;
  }

  setStyle(style: fontStyle): FontDef {
    this.props.set("font-style", style);
    return this;
  }

  setColor(color: Type.Color): FontDef {
    this.props.set("color", colorToString(color));
    return this;
  }

  build(): Map<string, Type.propType> {
    return this.props;
  }
}
