import * as Type from "../Type";
import IColor from "../interfaces/IColor";

export default interface IBackground {
  color?: IColor;
  image?: string;
  size?: Type.backgroundSize;
  repeat?: Type.backgroundRepeat;
  attachment?: Type.backgroundAttachment;
  origin?: Type.backgroundOrigin;
  clip?: Type.backgroundClip;
}
