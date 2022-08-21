import * as Type from "../Type";
import IColor from "../interfaces/IColor";

type side = "top" | "bottom" | "left" | "right";

export default interface IBorder {
  style?: Type.borderStyle;
  width?: Type.borderWidth;
  color?: IColor;
  sides?: side[];
}
