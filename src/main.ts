import "./style.css";
import * as Color from "./Color";
import Component from "./builders/Component";
import BackgroundDef from "./builders/BackgroundDef";
import BoxModelDef from "./builders/BoxModelDef";
import BorderDef from "./builders/BorderDef";
import FontDef from "./builders/FontDef";
import TextDef from "./builders/TextDef";

const background = new BackgroundDef({ color: Color.BLACK });
const boxModel = new BoxModelDef({ display: "block", maxWidth: "6rem", padding: "1rem" });
const border = new BorderDef({ style: "solid", width: "medium", color: Color.RED });
const font = new FontDef({ family: "Arial", size: "2rem", color: Color.WHITE });
const text = new TextDef({ value: "Text", align: "center" });

const text1 = new Component("text", [new TextDef({ value: "text1" })]);

const component = new Component("mainComponent", [background, boxModel, border, text, font]);
component.add(text1);

component.pack();

console.log(document.body.innerHTML);
