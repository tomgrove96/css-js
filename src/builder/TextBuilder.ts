import { IBuilder } from "./IBuilder";
import { Component } from "./Component";
import { colorToString } from "../Util";
import * as Type from "../Type";

export class TextBuilder implements IBuilder {
  id: string;
  component: Component;

  constructor(id: string) {
    this.id = id;
    this.component = new Component(id);
  }

  setValue(value: string): IBuilder {
    this.component.props.set("value", value);
    return this;
  }

  setFont(font: string): IBuilder {
    this.component.props.set("font-family", font);
    return this;
  }

  setFontSize(fontSize: Type.unit): IBuilder {
    this.component.props.set("font-size", fontSize);
    return this;
  }

  setFontWeight(fontWeight: Type.unit): IBuilder {
    this.component.props.set("font-weight", fontWeight);
    return this;
  }

  setFontColor(color: Type.Color): IBuilder {
    this.component.props.set("color", colorToString(color));
    return this;
  }

  setFontStyle(fontStyle: Type.fontStyle): IBuilder {
    this.component.props.set("font-style", fontStyle);
    return this;
  }

  setTextDirection(textDirection: string): IBuilder {
    this.component.props.set("direction", textDirection);
    return this;
  }

  setTextAlign(align: string): IBuilder {
    this.component.props.set("text-align", align);
    return this;
  }

  setTextOutline(textOutline: string): IBuilder {
    this.component.props.set("text-outline", textOutline);
    return this;
  }

  setTextDecoration(textDecoration: string): IBuilder {
    this.component.props.set("text-decoration", textDecoration);
    return this;
  }

  setTextShadow(textShadow: string): IBuilder {
    this.component.props.set("text-shadow", textShadow);
    return this;
  }
}
