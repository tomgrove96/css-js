import "./style.css";
import { BasicContainer, TextBox } from "./UI";

const container = BasicContainer("container", "50vw", "50vh");
const text = TextBox("sometext", "Text");

container.add(text);

container.build();

console.log(document.body.innerHTML);
