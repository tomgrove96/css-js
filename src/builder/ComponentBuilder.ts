import { Component } from "./Component";
import * as Type from "../Type";

export class ComponentBuilder {
  private component: Component;

  constructor(id: string) {
    this.component = new Component(id);
  }

  setGrid(columns: string, rows: string): ComponentBuilder {
    this.component.setDisplay("grid");
    this.component.props.set("grid-template-columns", `repeat(${columns}, 1fr)`);
    this.component.props.set("grid-template-rows", `repeat(${rows}, 1fr)`);
    return this;
  }

  setGridGap(gap: string): ComponentBuilder {
    this.component.props.set("grid-gap", gap);
    return this;
  }

  setGridRowGap(gap: string): ComponentBuilder {
    this.component.props.set("grid-row-gap", gap);
    return this;
  }

  setGridColumnGap(gap: string): ComponentBuilder {
    this.component.props.set("grid-column-gap", gap);
    return this;
  }

  setJustifyGridItems(justifyItems: string): ComponentBuilder {
    this.component.props.set("justify-items", justifyItems);
    return this;
  }

  setAlignGridItems(alignItems: string): ComponentBuilder {
    this.component.props.set("align-items", alignItems);
    return this;
  }

  setPlaceGridItems(placeItems: string): ComponentBuilder {
    this.component.props.set("align-items", placeItems);
    this.component.props.set("justify-items", placeItems);
    return this;
  }

  setJustifyGridContent(justifyContent: Type.alignment): ComponentBuilder {
    this.component.props.set("justify-content", justifyContent);
    return this;
  }

  setAlignGridContent(alignContent: string): ComponentBuilder {
    this.component.props.set("align-content", alignContent);
    return this;
  }

  setPlaceGridContent(placeContent: string): ComponentBuilder {
    this.component.props.set("place-content", placeContent);
    return this;
  }
}
