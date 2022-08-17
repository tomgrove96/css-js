import { Component } from "./builder/Component";
import * as Type from "./Type";
import * as Color from "./Color";

export const BasicContainer = (id: string, width: Type.unit, height: Type.unit) => {
  return new Component(id)
    .setWidth(width)
    .setHeight(height)
    .setBackgroundColor(Color.RGBA.fromRGB(Color.SLATE_GRAY, 0.5))
    .setPlacement("relative")
    .setBorder("solid", "thin", Color.BLACK);
};

export const Text = (id: string, value: string) => {
    return new Component(id, value)
      .setBackgroundColor(Color.RGBA.fromRGB(Color.SLATE_GRAY, 0.5))
      .setPlacement("relative")
      .text!.setValue(value)
      .text!.setTextAlign("center");
  };

// export const TextBox = (id: string, value: string) => {
//   return new ComponentBuilder(id)
//     .setValue(value)
//     .setFont("Arial")
//     .setFontSize("16px")
//     .setTextAlign("center")
//     .setFontColor(Color.WHITE)
//     .setPlacement("absolute");
// };

// export const Button = (id: string, label: string, width: Type.unit, height: Type.unit) => {
//   return new ComponentBuilder(id)
//     .setFont("Arial")
//     .setValue(label)
//     .setWidth(width)
//     .setHeight(height)
//     .setBorder("solid", "5px", new Color.RGBA(0, 0, 0, 0.5))
//     .setFont("Arial")
//     .setFontSize("16px")
//     .setTextAlign("center")
//     .setFontColor(Color.WHITE)
//     .setPlacement("absolute");
// };
