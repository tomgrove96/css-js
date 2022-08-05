import { IComponent } from "./IComponent";
import { ComponentBuilder } from "../builder/ComponentBuilder";
import * as Color from "../Color";
import * as Type from "../Type";

export class BasicContainer implements IComponent {
  private builder: ComponentBuilder;

  constructor(id: string, width: Type.unit, height: Type.unit) {
    this.builder = new ComponentBuilder(id)
      .setWidth(width)
      .setHeight(height)
      .setBorder("solid", "10px", new Color.RGBA(0, 0, 0, 0.5))
      .setBackgroundColor(new Color.RGBA(0, 0, 0, 0.5))
      .setBorderRadius("1rem");
  }

  add(component: IComponent) {
    this.builder.add(component.getBuilder());
  }

  pack() {
    this.builder.build();
  }

  getBuilder(): ComponentBuilder {
    return this.builder;
  }
}
