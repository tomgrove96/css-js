import "./style.css";
import { textBox, basicContainer } from "./UI";

const container = basicContainer("container", "50vw", "50vh");
const text = textBox("sometext", "Text");

const container1 = basicContainer("container1", "10vw", "10vh");
container.setPosition("relative");
container1.setPosition("absolute");


container.add(container1);
container.add(text);

text.setPosition("absolute");

container.build();

console.log(document.body.innerHTML);
