import * as Type from "../Type";
import IProp from "../interfaces/IProp";
import IText from "../interfaces/IText";

export default class TextProp implements IProp {
  private props: Type.propType;

  constructor(text?: IText) {
    this.props = new Map();

    if (text) this.setText(text);
  }

  setText(text: IText): TextProp {
    this.setValue(text.value);
    text.align ? this.setAlign(text.align) : false;
    text.decoration ? this.setDecoration(text.decoration) : false;
    text.direction ? this.setDirection(text.direction) : false;
    return this;
  }

  setValue(value: string): TextProp {
    this.props.set("value", value);
    return this;
  }

  setDirection(direction: Type.textDirection): TextProp {
    this.props.set("direction", direction);
    return this;
  }

  setLetterSpacing(spacing: Type.unit): TextProp {
    this.props.set("letter-spacing", spacing);
    return this;
  }

  setWhiteSpace(whitespace: Type.whitespace): TextProp {
    this.props.set("white-space", whitespace);
    return this;
  }

  setAlign(align: Type.textAlign): TextProp {
    if (!align) return this;
    this.props.set("text-align", align);
    return this;
  }

  setDecoration(decoration: Type.textDecoration): TextProp {
    this.props.set("text-decoration", decoration);
    return this;
  }

  setWordBreak(wordBreak: Type.wordBreak): TextProp {
    this.props.set("word-break", wordBreak);
    return this;
  }

  setWordWrap(wordWrap: Type.wordWrap): TextProp {
    this.props.set("word-wrap", wordWrap);
    return this;
  }

  setWordSpacing(spacing: Type.unit): TextProp {
    this.props.set("word-spacing", spacing);
    return this;
  }

  getProps(): Type.propType {
    return this.props;
  }
}
