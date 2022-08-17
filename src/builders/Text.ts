import IBuilder from "./IBuilder";
import * as Type from "../Type";

type textDirection = "ltr" | "rtl" | "inherit";
type whitespace = "normal" | "pre" | "nowrap" | "pre-wrap" | "pre-line";
type textAlign = "start" | "end" | "left" | "right" | "center" | "justify";
type textDecoration = "none" | "underline" | "overline" | "line-thorugh" | "blink";
type wordBreak = "normal" | "keep-all" | "loose" | "break-strict" | "break-all";
type wordWrap = "normal" | "nowrap";

type textDef = {
  value: string;
  align?: textAlign;
  decoration?: textDecoration;
  direction?: textDirection;
};

export default class Text implements IBuilder {
  private props: Map<string, Type.propType>;

  constructor(text?: textDef) {
    this.props = new Map();

    if (text) this.setText(text);
  }

  setText(text: textDef): Text {
    this.setValue(text.value);
    text.align ? this.setAlign(text.align) : false;
    text.decoration ? this.setDecoration(text.decoration) : false;
    text.direction ? this.setDirection(text.direction) : false;
    return this;
  }

  setValue(value: string): Text {
    this.props.set("value", value);
    return this;
  }

  setDirection(direction: textDirection): Text {
    this.props.set("direction", direction);
    return this;
  }

  setLetterSpacing(spacing: Type.unit): Text {
    this.props.set("letter-spacing", spacing);
    return this;
  }

  setWhiteSpace(whitespace: whitespace): Text {
    this.props.set("white-space", whitespace);
    return this;
  }

  setAlign(align: textAlign): Text {
    if (!align) return this;
    this.props.set("text-align", align);
    return this;
  }

  setDecoration(decoration: textDecoration): Text {
    this.props.set("text-decoration", decoration);
    return this;
  }

  setWordBreak(wordBreak: wordBreak): Text {
    this.props.set("word-break", wordBreak);
    return this;
  }

  setWordWrap(wordWrap: wordWrap): Text {
    this.props.set("word-wrap", wordWrap);
    return this;
  }

  setWordSpacing(spacing: Type.unit): Text {
    this.props.set("word-spacing", spacing);
    return this;
  }

  build(): Map<string, Type.propType> {
    return this.props;
  }
}
