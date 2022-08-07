import { ComponentBuilder } from "./builder/ComponentBuilder";
import * as Type from "./Type";
import * as Color from "./Color";

export function basicContainer(id: string, width: Type.unit, height: Type.unit) {
    return new ComponentBuilder(id)
    .setWidth(width)
    .setHeight(height)
    .setBorder("solid", "10px", new Color.RGBA(0, 0, 0, 0.5))
    .setBackgroundColor(new Color.RGBA(0, 0, 0, 0.5))
    .setBorderRadius("1rem");
}

export function textBox(id: string, value: string) {
    return new ComponentBuilder(id)
    .setValue(value)
    .setFontSize("1rem")
    .setTextAlign("center")
    .setFontColor(Color.WHITE);
}