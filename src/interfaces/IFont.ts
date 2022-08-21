import * as Type from "../Type";

export default interface IFont {
  family: Type.fontFamily;
  size?: Type.fontSize;
  weight?: Type.fontWeight;
  color?: Type.IColor;
  style?: Type.fontStyle;
}
