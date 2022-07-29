import "./style.css";
import { ComponentBuilder } from "./ComponentBuilder";

const bg = new ComponentBuilder("bg")
  .setPadding("1rem")
  .setWidth("100vw")
  .setHeight("100vh")
  .setBorder("3px solid red")
  .setBackgroundColor("rgb(0, 0, 0)");

const title = new ComponentBuilder("title")
  .setValue("TITLE")
  .setFontColor("white")
  .setTextAlign("center")
  .getComponent();

const box = new ComponentBuilder("box")
  .setPosition("fixed")
  .setTop("1rem")
  .setLeft("1rem")
  .setWidth("100px")
  .setHeight("100px")
  .setBorderRadiusTopLeft("10px")
  .setBorderRadiusBottomRight("10px")
  .setBackgroundColor("red")
  .getComponent();

bg.add(title);
bg.add(box);

bg.build();
