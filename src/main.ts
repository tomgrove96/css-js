import "./style.css";
import { BasicContainer, TextBox } from "./UI";

const container = BasicContainer("container", "50vw", "50vh");
const text = TextBox("sometext", "Text");

const container1 = BasicContainer("container1", "10vw", "10vh");
container.setPosition("relative");
container1.setPosition("absolute");


container.add(container1);
container.add(text);

container.build();

console.log(document.body.innerHTML);
