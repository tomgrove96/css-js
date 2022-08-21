import "./style.css";
import BasicContainer from "./components/BasicContainer";
import BasicText from "./components/BasicText";

const container = new BasicContainer("container", "64px", "64px");
const name = new BasicText("name", "Tom");

container.add(name);

container.pack();

console.log(document.body.innerHTML);
