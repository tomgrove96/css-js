import * as Type from "../Type";

export default interface IText {
  value: string;
  align?: Type.textAlign;
  decoration?: Type.textDecoration;
  direction?: Type.textDirection;
}
