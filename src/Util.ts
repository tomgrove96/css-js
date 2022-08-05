import * as Type from "./Type";

export function colorToString(color: Type.Color): string {
  if (!color.a) return `rgb(${color.r}, ${color.g}, ${color.b})`;
  if (color.a || color.a === 0) return `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
  return "";
}
