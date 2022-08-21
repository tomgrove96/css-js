import * as Type from "../Type";
import IProp from "./IProp";
import IBackground from "../interfaces/IBackground";
import IColor from "../interfaces/IColor";

export default class BackgroundProp implements IProp {
  private props: Type.propType;

  constructor(background?: IBackground) {
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

  setColor(color: IColor): BackgroundProp {
    let value = "";
    if (!color.a) value = `rgb(${color.r}, ${color.g}, ${color.b})`;
    if (color.a || color.a === 0) value = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
    this.props.set("background-color", value);
    return this;
  }

  setImage(image: string): BackgroundProp {
    this.props.set("background-image", image);
    return this;
  }

  setSize(size: Type.backgroundSize): BackgroundProp {
    this.props.set("background-size", size);
    return this;
  }

  setRepeat(repeat: Type.backgroundRepeat): BackgroundProp {
    this.props.set("background-repeat", repeat);
    return this;
  }

  setAttachment(attachment: Type.backgroundAttachment): BackgroundProp {
    this.props.set("background-attachment", attachment);
    return this;
  }

  setOrigin(origin: Type.backgroundOrigin): BackgroundProp {
    this.props.set("background-origin", origin);
    return this;
  }

  setClip(clip: Type.backgroundClip): BackgroundProp {
    this.props.set("background-clip", clip);
    return this;
  }

  getProps(): Type.propType {
    return this.props;
  }
}
