import * as Type from "./Type";

export function colorToString(color: Type.Color): string {
  if (!color.a) return `rgb(${color.r}, ${color.g}, ${color.b})`;
  if (color.a || color.a === 0) return `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
  return "";
}

export const calcPosition = (
  position: Type.position,
  component: HTMLElement,
  parent?: HTMLElement
) => {
  let tempX: number = 0;
  let tempY: number = 0;

  if (position === "TOP_LEFT") {
    tempX = 0;
    tempY = 0;
  }
  if (position === "TOP_CENTER") {
    parent
      ? (tempX = parent.offsetWidth / 2 - component.offsetWidth / 2)
      : (tempX = window.innerWidth / 2 - component.offsetWidth / 2);
    tempY = 0;
  }
  if (position === "TOP_RIGHT") {
    parent
      ? (tempX = parent.offsetWidth - component.offsetWidth)
      : (tempX = window.innerWidth - component.offsetWidth);
    tempY = 0;
  }
  const x = `${tempX}px`;
  const y = `${tempY}px`;
  return { x, y };
};
