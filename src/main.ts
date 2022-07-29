import "./style.css";
import { ComponentBuilder } from "./ComponentBuilder";

const bg = new ComponentBuilder("bg")
  .setPadding("1rem")
  .setWidth("50vw")
  .setHeight("50vh")
  .setBackgroundColor("rgb(0, 0, 0)");

const title = new ComponentBuilder("title")
  .setValue("TITLE")
  .setFontColor("white")
  .setTextAlign("center");

bg.add(title.getComponent());
bg.build();
