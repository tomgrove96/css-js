import * as Type from "../Type";
import IBuilder from "./IBuilder";

type backgroundSize = "auto" | "cover" | "contain" | Type.unit;
type backgroundRepeat = "repeat" | "repeat-x" | "repeat-y" | "no-repeat";
type backgroundAttachment = "scroll" | "fixed" | "local";
type backgroundOrigin = "border-box" | "padding-box" | "content-box";
type backgroundClip = "border-box" | "padding-box" | "content-box" | "no-clip";

type backgroundDef = {
  color: Type.Color;
  image?: string;
  size?: backgroundSize;
  repeat?: backgroundRepeat;
  attachment?: backgroundAttachment;
  origin?: backgroundOrigin;
  clip?: backgroundClip;
};

export default class BackgroundDef implements IBuilder {
  props: Map<string, Type.propType>;

  constructor(background?: backgroundDef) {
    this.props = new Map();

    if (background) {
      this.setColor(background.color);
      background.image ? this.setImage(background.image) : false;
      background.size ? this.setSize(background.size) : false;
      background.repeat ? this.setRepeat(background.repeat) : false;
      background.attachment ? this.setAttachment(background.attachment) : false;
      background.origin ? this.setOrigin(background.origin) : false;
      background.clip ? this.setClip(background.clip) : false;
    }
  }

  setColor(color: Type.Color): BackgroundDef {
    let value = "";
    if (!color.a) value = `rgb(${color.r}, ${color.g}, ${color.b})`;
    if (color.a || color.a === 0) value = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
    this.props.set("background-color", value);
    return this;
  }

  setImage(image: string): BackgroundDef {
    this.props.set("background-image", image);
    return this;
  }

  setSize(size: backgroundSize): BackgroundDef {
    this.props.set("background-size", size);
    return this;
  }

  setRepeat(repeat: backgroundRepeat): BackgroundDef {
    this.props.set("background-repeat", repeat);
    return this;
  }

  setAttachment(attachment: backgroundAttachment): BackgroundDef {
    this.props.set("background-attachment", attachment);
    return this;
  }

  setOrigin(origin: backgroundOrigin): BackgroundDef {
    this.props.set("background-origin", origin);
    return this;
  }

  setClip(clip: backgroundClip): BackgroundDef {
    this.props.set("background-clip", clip);
    return this;
  }

  build(): Map<string, Type.propType> {
    return this.props;
  }
}
