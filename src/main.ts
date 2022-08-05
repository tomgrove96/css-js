import "./style.css";
import { BasicContainer } from "./components/BasicContainer";
import { TextBox } from "./components/TextBox";

const container = new BasicContainer("container", "50vw", "50vh");
const text = new TextBox("sometext", "Text");

container.add(text);

container.pack();

console.log(document.body.innerHTML);
