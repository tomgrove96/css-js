import { IComponent } from "./IComponent";
import { ComponentBuilder } from "../builder/ComponentBuilder";
import * as Color from "../Color";

export class TextBox implements IComponent {
  private builder: ComponentBuilder;

  constructor(id: string, value: string) {
    this.builder = new ComponentBuilder(id)
      .setValue(value)
      .setFontSize("1rem")
      .setTextAlign("center")
      .setFontColor(Color.WHITE);
  }

  getBuilder() {
    return this.builder;
  }
}
