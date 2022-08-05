import { ComponentBuilder } from "../builder/ComponentBuilder";

export interface IComponent {
  getBuilder(): ComponentBuilder;
}
