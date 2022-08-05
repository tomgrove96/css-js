import { IComponent } from "../IComponent";
import { ComponentBuilder } from "../builder/ComponentBuilder";

export class TextBox implements IComponent {
  builder: ComponentBuilder;

  constructor(id: string, value: string) {
    this.builder = new ComponentBuilder(id).setValue(value);
  }
}
