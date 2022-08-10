import "./style.css";
import { BasicContainer, TextBox, Button } from "./UI";

const container = BasicContainer("container", "450px", "600px").setPosition("TOP_CENTER");
const text = TextBox("text", "Text").setPosition("TOP_CENTER");
const button = Button("button", "button", "96px", "48px").setPosition("TOP_RIGHT");

container.add(text);
container.add(button);

container.build();

console.log(document.body.innerHTML);
