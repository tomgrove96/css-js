import * as Type from "../Type";
import IBuilder from "./IBuilder";

type appearance =
  | "normal"
  | "inherit"
  | "icon"
  | "window"
  | "desktop"
  | "work-space"
  | "document"
  | "tooltip"
  | "dialog"
  | "button"
  | "push-button"
  | "hyperlink"
  | "radio-button"
  | "checkbox"
  | "menu-item"
  | "tab"
  | "menu"
  | "menubar"
  | "pull-down-menu"
  | "pop-up-menu"
  | "list-menu"
  | "radio-group"
  | "checkbox-group"
  | "outline-tree"
  | "range"
  | "field"
  | "combo-box"
  | "signature"
  | "password";

type cursor =
  | "auto"
  | "crosshair"
  | "default"
  | "pointer"
  | "move"
  | "e-resize"
  | "neresize"
  | "nw-resize"
  | "n-resize"
  | "se-resize"
  | "sw-resize"
  | "swresize"
  | "s-resize"
  | "w-resize"
  | "text"
  | "wait"
  | "help";

type resize = "none" | "both" | "horizontal" | "vertical" | "inherit";

type uiDef = { appearance: appearance; cursor?: cursor; resize?: resize };

export default class UIDef implements IBuilder {
  props: Map<string, Type.propType>;

  constructor(ui: uiDef) {
    this.props = new Map();

    if (ui) {
      this.setAppearance(ui.appearance);
      ui.cursor ? this.setCursor(ui.cursor) : false;
      ui.resize ? this.setResize(ui.resize) : false;
    }
  }

  setAppearance(appearance: appearance): UIDef {
    this.props.set("appearance", appearance);
    return this;
  }

  setCursor(cursor: cursor): UIDef {
    this.props.set("cursor", cursor);
    return this;
  }

  setResize(resize: resize): UIDef {
    this.props.set("resize", resize);
    return this;
  }

  build(): Map<string, Type.propType> {
    return this.props;
  }
}
