import "./style.css";
import * as Color from "./Color";
import { Component, Background, BoxModel, Border, Font, Text } from "./builders/UI";

const background = new Background({ color: Color.BLACK });
const boxModel = new BoxModel({ display: "block", maxWidth: "6rem", padding: "1rem" });
const border = new Border({ style: "solid", width: "medium", color: Color.RED });
const font = new Font({ family: "Arial", size: "2rem", color: Color.WHITE });
const text = new Text({ value: "Text", align: "center" });

const text1 = new Component("text", [new Text({ value: "text1" })]);

const component = new Component("mainComponent", [background, boxModel, border, text, font]);
component.add(text1);

component.pack();

console.log(document.body.innerHTML);
