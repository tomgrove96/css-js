import * as Type from "../Type";

export default interface IBoxModel {
  display?: Type.display;
  width?: Type.unit;
  minWidth?: Type.unit;
  maxWidth?: Type.unit;
  height?: Type.unit;
  minHeight?: Type.unit;
  maxHeight?: Type.unit;
  padding?: Type.unit;
  margin?: Type.unit;
  visibility?: Type.visibility;
}
