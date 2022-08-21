import * as Type from "../Type";
import IColor from "../interfaces/IColor";

export default interface IFont {
  family: Type.fontFamily;
  size?: Type.fontSize;
  weight?: Type.fontWeight;
  color?: IColor;
  style?: Type.fontStyle;
}
