import * as Type from "../Type";
import IColor from "../interfaces/IColor";

export default interface IBorder {
  style: Type.borderStyle;
  width?: Type.borderWidth;
  color?: IColor;
}
