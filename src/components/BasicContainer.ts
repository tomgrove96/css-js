import * as Type from "../Type";
import BackgroundProp from "../props/BackgroundProp";
import BoxModelProp from "../props/BoxModelProp";
import BaseComponent from "./BaseComponent";

export default class BasicContainer extends BaseComponent {
  constructor(id: string, width: Type.unit, height: Type.unit) {
    const boxModel = new BoxModelProp({ display: "block", maxWidth: width, minHeight: height });
    const background = new BackgroundProp({ color: { r: 0, g: 0, b: 0 } });
    super(id, [boxModel, background]);
  }
}
