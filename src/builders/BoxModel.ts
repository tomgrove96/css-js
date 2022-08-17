import IBuilder from "./IBuilder";
import * as Type from "../Type";

type display =
  | "none"
  | "inline"
  | "block"
  | "inline-block"
  | "flex"
  | "inline-flex"
  | "grid"
  | "inline-grid"
  | "contents"
  | "list-item"
  | "run-in"
  | "compact"
  | "table"
  | "inline-table"
  | "table-row-group"
  | "table-header-group"
  | "table-footer-group"
  | "table-row"
  | "table-column-group"
  | "table-column"
  | "table-cell"
  | "table-caption"
  | "ruby"
  | "ruby-base"
  | "ruby-text"
  | "ruby-base-group"
  | "ruby-text-group";

type overflow =
  | "visible"
  | "hidden"
  | "scroll"
  | "auto"
  | "no-display"
  | "no-content"
  | "overflow-x"
  | "overflow-y";

type overflowStyle = "auto" | "marquee-line" | "marqueeblock";

type visibility = "visible" | "hidden" | "collapse";

type boxModelDef = {
  display: display;
  width?: Type.unit;
  minWidth?: Type.unit;
  maxWidth?: Type.unit;
  height?: Type.unit;
  minHeight?: Type.unit;
  maxHeight?: Type.unit;
  padding?: Type.unit;
  margin?: Type.unit;
  visibility?: visibility;
};

export default class BoxModel implements IBuilder {
  private props: Map<string, Type.propType>;

  constructor(boxModel?: boxModelDef) {
    this.props = new Map();

    if (boxModel) {
      this.setDisplay(boxModel.display);
      boxModel.width ? this.setWidth(boxModel.width) : false;
      boxModel.minWidth ? this.setMinWidth(boxModel.minWidth) : false;
      boxModel.maxWidth ? this.setMaxWidth(boxModel.maxWidth) : false;
      boxModel.height ? this.setHeight(boxModel.height) : false;
      boxModel.minHeight ? this.setMinHeight(boxModel.minHeight) : false;
      boxModel.maxHeight ? this.setMaxHeight(boxModel.maxHeight) : false;
      boxModel.padding ? this.setPadding(boxModel.padding) : false;
      boxModel.margin ? this.setMargin(boxModel.margin) : false;
      boxModel.visibility ? this.setVisibility(boxModel.visibility) : false;
    }
  }

  setWidth(width: Type.unit): BoxModel {
    this.props.set("width", width);
    return this;
  }

  setHeight(height: Type.unit): BoxModel {
    this.props.set("height", height);
    return this;
  }

  setMinWidth(width: Type.unit): BoxModel {
    this.props.set("min-width", width);
    return this;
  }

  setMinHeight(height: Type.unit): BoxModel {
    this.props.set("min-height", height);
    return this;
  }

  setMaxWidth(width: Type.unit): BoxModel {
    this.props.set("max-width", width);
    return this;
  }

  setMaxHeight(height: Type.unit): BoxModel {
    this.props.set("max-height", height);
    return this;
  }

  setMargin(margin: Type.unit): BoxModel {
    this.props.set("margin", margin);
    return this;
  }

  setMarginTop(margin: Type.unit): BoxModel {
    this.props.set("margin-top", margin);
    return this;
  }

  setMarginBottom(margin: Type.unit): BoxModel {
    this.props.set("margin-bottom", margin);
    return this;
  }

  setMarginLeft(margin: Type.unit): BoxModel {
    this.props.set("margin-left", margin);
    return this;
  }

  setMarginRight(margin: Type.unit): BoxModel {
    this.props.set("margin-right", margin);
    return this;
  }

  setPadding(padding: Type.unit): BoxModel {
    this.props.set("padding", padding);
    return this;
  }

  setPaddingTop(padding: Type.unit): BoxModel {
    this.props.set("padding-top", padding);
    return this;
  }

  setPaddingBottom(padding: Type.unit): BoxModel {
    this.props.set("padding-bottom", padding);
    return this;
  }

  setPaddingLeft(padding: Type.unit): BoxModel {
    this.props.set("padding-left", padding);
    return this;
  }

  setPaddingRight(padding: Type.unit): BoxModel {
    this.props.set("padding-right", padding);
    return this;
  }

  setDisplay(display: display): BoxModel {
    this.props.set("display", display);
    return this;
  }

  setOverflow(overflow: overflow): BoxModel {
    this.props.set("overflow", overflow);
    return this;
  }

  setOverflowStyle(overflow: overflowStyle): BoxModel {
    this.props.set("overflow-style", overflow);
    return this;
  }

  setVisibility(visibility: visibility): BoxModel {
    this.props.set("visibility", visibility);
    return this;
  }

  build(): Map<string, Type.propType> {
    return this.props;
  }
}
