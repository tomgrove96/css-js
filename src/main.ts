import "./style.css";
import { BasicContainer, TextBox, Button } from "./UI";

const container = BasicContainer("container", "450px", "600px").setPosition("TOP_CENTER");
const text = TextBox("text", "Text").setPosition("TOP_CENTER");
const button = Button("button", "button", "96px", "48px").setPosition("TOP_RIGHT");
const button1 = Button("button1", "button1", "96px", "48px");

container.add(text);
container.add(button);
container.add(button1);

button.addEventListener("click", () => {
  console.log("first button");
});

container.build();

console.log(document.body.innerHTML);
