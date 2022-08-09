import "./style.css";
import { BasicContainer, TextBox } from "./UI";
import * as Color from "./Color";

const container = BasicContainer("container", "50vw", "50vh");
const text = TextBox("sometext", "Text");

text.setBackgroundColor(Color.ALICE_BLUE);
container.add(text);

container.build();

console.log(document.body.innerHTML);
