import "./style.css";
import { BasicContainer } from "./components/BasicContainer";

const container = new BasicContainer("container", "50vw", "50vh");

container.pack();

console.log(document.body.innerHTML);
