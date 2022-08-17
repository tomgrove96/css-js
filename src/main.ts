import "./style.css";
import { BasicContainer, Text } from "./UI";
import * as Color from "./Color"

const container = BasicContainer("container", "450px", "600px").setPosition("TOP_CENTER");
const text = Text("text", "Text").setPosition("TOP_CENTER");
// const button = Button("button", "button", "96px", "48px").setPosition("TOP_RIGHT");
const container2 = BasicContainer("container", "450px", "600px").setPosition("TOP_CENTER");

text.setBackgroundColor(Color.ALICE_BLUE);
container.add(text);
//container.add(button);

container.build();
container2.build();

console.log(document.body.innerHTML);
