import * as Type from "../Type";
import BaseComponent from "./BaseComponent";
import BoxModelProp from "../props/BoxModelProp";
import BackgroundProp from "../props/BackgroundProp";
import BorderProp from "../props/BorderProp";

export default class BasicContainer extends BaseComponent {
  constructor(id: string, width: Type.unit, height: Type.unit) {
    const boxModel = new BoxModelProp({ display: "block", maxWidth: width, minHeight: height });
    const background = new BackgroundProp({ color: { r: 0, g: 0, b: 0 } });
    const border = new BorderProp({
      width: "medium",
      color: { r: 255, g: 0, b: 0 },
      sides: ["top", "bottom"]
    });
    super(id, [boxModel, background, border]);
  }
}
