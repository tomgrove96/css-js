import "./style.css";
import { BasicContainer, TextBox, Button } from "./UI";

const container = BasicContainer("container", "450px", "600px").setPosition("TOP_CENTER");
const text = TextBox("text", "Text").setPosition("TOP_CENTER");
const button1 = Button("button1", "button", "96px", "48px").setPosition("TOP_RIGHT");
const button2 = Button("button2", "button1", "96px", "48px");

button1.addEventListener("click", () => {
  console.log("top right button");
});

button2.addEventListener("click", () => {
  console.log("top left button");
});

container.add(text);
container.add(button1);
container.add(button2);

container.build();

console.log(document.body.innerHTML);
