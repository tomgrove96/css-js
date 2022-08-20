import BaseComponent from "./BaseComponent";
import TextProp from "../props/TextProp";
import FontProp from "../props/FontProp";

export default class BasicText extends BaseComponent {
  constructor(id: string, text: string) {
    const textProp = new TextProp({ value: text });
    const fontProp = new FontProp({
      family: "Verdana",
      color: { r: 255, g: 255, b: 255 }
    });
    super(id, [fontProp, textProp]);
  }
}
