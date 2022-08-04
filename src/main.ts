import "./style.css";
import { ComponentBuilder } from "./ComponentBuilder";
import * as Color from "./Color";

const bg = new ComponentBuilder("bg")
  .setPadding("1rem")
  .setGrid("4", "4")
  .setGridGap("1rem")
  .setPlaceGridItems("center")
  .setPlaceGridContent("center")
  .translate("50px", "50px")
  .setMaxWidth("75vw")
  .setMinHeight("50vh")
  .setBorder("3px solid red")
  .setBackgroundColor(Color.DARK_GRAY);

const box1 = new ComponentBuilder("box")
  .setBorderRadiusTopLeft("10px")
  .setBorderRadiusBottomRight("10px")
  .setBackgroundColor(Color.ANTIQUE_WHITE)
  .setWidth("32px")
  .setHeight("32px")
  .getComponent();

const box2 = new ComponentBuilder("box")
  .setBorderRadiusTopLeft("10px")
  .setBorderRadiusBottomRight("10px")
  .setBackgroundColor(Color.DARK_CYAN)
  .setWidth("128px")
  .setHeight("128px")
  .getComponent();

const box3 = new ComponentBuilder("box")
  .setBorderRadiusTopLeft("10px")
  .setBorderRadiusBottomRight("10px")
  .setBackgroundColor(Color.BLUE_VIOLET)
  .setWidth("128px")
  .setHeight("128px")
  .getComponent();

const box4 = new ComponentBuilder("box")
  .setBorderRadiusTopLeft("10px")
  .setBorderRadiusBottomRight("10px")
  .setBackgroundColor(Color.BISQUE)
  .setWidth("128px")
  .setHeight("128px")
  .getComponent();

const box5 = new ComponentBuilder("box")
  .setBorderRadiusTopLeft("10px")
  .setBorderRadiusBottomRight("10px")
  .setBackgroundColor(Color.FIRE_BRICK)
  .setWidth("128px")
  .setHeight("128px")
  .getComponent();

const box6 = new ComponentBuilder("box")
  .setBorderRadiusTopLeft("10px")
  .setBorderRadiusBottomRight("10px")
  .setBackgroundColor(Color.BURLY_WOOD)
  .setWidth("128px")
  .setHeight("128px")
  .getComponent();

bg.add(box1);
bg.add(box2);
bg.add(box3);
bg.add(box4);
bg.add(box5);
bg.add(box6);

bg.build();

console.log(document.body.innerHTML);
