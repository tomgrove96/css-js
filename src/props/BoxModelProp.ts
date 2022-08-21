import * as Type from "../Type";
import IProp from "./IProp";
import IBoxModel from "../interfaces/IBoxModel";

export default class BoxModelProp implements IProp {
  private props: Type.propType;

  constructor(boxModel?: IBoxModel) {
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

  setWidth(width: Type.unit): BoxModelProp {
    this.props.set("width", width);
    return this;
  }

  setHeight(height: Type.unit): BoxModelProp {
    this.props.set("height", height);
    return this;
  }

  setMinWidth(width: Type.unit): BoxModelProp {
    this.props.set("min-width", width);
    return this;
  }

  setMinHeight(height: Type.unit): BoxModelProp {
    this.props.set("min-height", height);
    return this;
  }

  setMaxWidth(width: Type.unit): BoxModelProp {
    this.props.set("max-width", width);
    return this;
  }

  setMaxHeight(height: Type.unit): BoxModelProp {
    this.props.set("max-height", height);
    return this;
  }

  setMargin(margin: Type.unit): BoxModelProp {
    this.props.set("margin", margin);
    return this;
  }

  setMarginTop(margin: Type.unit): BoxModelProp {
    this.props.set("margin-top", margin);
    return this;
  }

  setMarginBottom(margin: Type.unit): BoxModelProp {
    this.props.set("margin-bottom", margin);
    return this;
  }

  setMarginLeft(margin: Type.unit): BoxModelProp {
    this.props.set("margin-left", margin);
    return this;
  }

  setMarginRight(margin: Type.unit): BoxModelProp {
    this.props.set("margin-right", margin);
    return this;
  }

  setPadding(padding: Type.unit): BoxModelProp {
    this.props.set("padding", padding);
    return this;
  }

  setPaddingTop(padding: Type.unit): BoxModelProp {
    this.props.set("padding-top", padding);
    return this;
  }

  setPaddingBottom(padding: Type.unit): BoxModelProp {
    this.props.set("padding-bottom", padding);
    return this;
  }

  setPaddingLeft(padding: Type.unit): BoxModelProp {
    this.props.set("padding-left", padding);
    return this;
  }

  setPaddingRight(padding: Type.unit): BoxModelProp {
    this.props.set("padding-right", padding);
    return this;
  }

  setDisplay(display: Type.display): BoxModelProp {
    this.props.set("display", display);
    return this;
  }

  setOverflow(overflow: Type.overflow): BoxModelProp {
    this.props.set("overflow", overflow);
    return this;
  }

  setOverflowStyle(overflow: Type.overflowStyle): BoxModelProp {
    this.props.set("overflow-style", overflow);
    return this;
  }

  setVisibility(visibility: Type.visibility): BoxModelProp {
    this.props.set("visibility", visibility);
    return this;
  }

  getProps(): Type.propType {
    return this.props;
  }
}
