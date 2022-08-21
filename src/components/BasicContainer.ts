import * as Type from "../Type";
import BackgroundProp from "../props/BackgroundProp";
import BoxModelProp from "../props/BoxModelProp";
import BaseComponent from "./BaseComponent";

export default class BasicContainer extends BaseComponent {
  constructor(id: string, width: Type.unit, height: Type.unit, display: Type.display) {
    const boxModel = new BoxModelProp({ display: display, minWidth: width, minHeight: height });
    const background = new BackgroundProp({ color: { r: 0, g: 0, b: 0 } });
    super(id, [boxModel, background]);
  }
}
