import "./style.css";
import * as Color from "./Color";
import BaseComponent from "./components/BaseComponent";
import BackgroundProp from "./props/BackgroundProp";
import BoxModelProp from "./props/BoxModelProp";
import BorderProp from "./props/BorderProp";
import BasicText from "./components/BasicText";

const backgroundProp = new BackgroundProp({ color: Color.BLACK });
const boxModelProp = new BoxModelProp({ display: "block", width: "4rem", height: "4rem" });
const borderProp = new BorderProp({ style: "solid", width: "medium", color: Color.RED });

const name = new BasicText("name", "Tom");

const nameBox = new BaseComponent("mainComponent", [backgroundProp, boxModelProp, borderProp]);

nameBox.add(name);

nameBox.pack();

console.log(document.body.innerHTML);
