import * as Type from "../Type";

export default interface IBackground {
  color: Type.IColor;
  image?: string;
  size?: Type.backgroundSize;
  repeat?: Type.backgroundRepeat;
  attachment?: Type.backgroundAttachment;
  origin?: Type.backgroundOrigin;
  clip?: Type.backgroundClip;
}
