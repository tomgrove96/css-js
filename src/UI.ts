import { ComponentBuilder } from "./builder/ComponentBuilder";
import * as Type from "./Type";
import * as Color from "./Color";

export const BasicContainer = (id: string, width: Type.unit, height: Type.unit) => {
  return new ComponentBuilder(id)
    .setWidth(width)
    .setHeight(height)
    .setBorder("solid", "10px", new Color.RGBA(0, 0, 0, 0.5))
    .setBackgroundColor(Color.RGBA.fromRGB(Color.SLATE_GRAY, 0.5))
    .setBorderRadius("16px")
    .setFont("Arial")
    .setFontSize("16px")
    .setTextAlign("center")
    .setFontColor(Color.WHITE)
    .setUserSelect("none")
    .setPlacement("relative");
};

export const TextBox = (id: string, value: string) => {
  return new ComponentBuilder(id)
    .setValue(value)
    .setFont("Arial")
    .setFontSize("16px")
    .setTextAlign("center")
    .setFontColor(Color.WHITE)
    .setUserSelect("none")
    .setPlacement("absolute");
};

export const Button = (id: string, label: string, width: Type.unit, height: Type.unit) => {
  return new ComponentBuilder(id)
    .setFont("Arial")
    .setValue(label)
    .setWidth(width)
    .setHeight(height)
    .setBorder("solid", "5px", new Color.RGBA(0, 0, 0, 0.5))
    .setFont("Arial")
    .setFontSize("16px")
    .setTextAlign("center")
    .setFontColor(Color.WHITE)
    .setUserSelect("none")
    .setPlacement("absolute");
};
