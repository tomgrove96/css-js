import * as Type from "../Type";

export default interface IBorder {
  style: Type.borderStyle;
  width?: Type.borderWidth;
  color?: Type.IColor;
}
