import * as Type from "../Type";
import IProp from "../interfaces/IProp";
import IUI from "../interfaces/IUI";

export default class UIProp implements IProp {
  private props: Type.propType = new Map();

  constructor(ui?: IUI) {
    this.build(ui);
  }

  private build(ui?: IUI) {
    if (!ui) return;
    this.setUI(ui);
  }

  setUI(ui: IUI) {
    ui.appearance ? this.setAppearance(ui.appearance) : false;
    ui.cursor ? this.setCursor(ui.cursor) : false;
    ui.resize ? this.setResize(ui.resize) : false;
  }

  setAppearance(appearance: Type.appearance): UIProp {
    this.props.set("appearance", appearance);
    return this;
  }

  setCursor(cursor: Type.cursor): UIProp {
    this.props.set("cursor", cursor);
    return this;
  }

  setResize(resize: Type.resize): UIProp {
    this.props.set("resize", resize);
    return this;
  }

  getProps(): Type.propType {
    return this.props;
  }
}
