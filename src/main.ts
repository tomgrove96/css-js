import "./style.css";
import { Component } from "./Component";
import { ComponentBuilder } from "./ComponentBuilder";

const c1 = new ComponentBuilder("c1")
  .setWidth("50vw")
  .setHeight("50vh")
  .setBackgroundColor("red");

buildDOM(c1.build());

function buildDOM(root: Component) {
  if (!root) return;

  let q: Component[] = [];
  q.push(root);

  while (q.length > 0) {
    let component = q.shift();
    if (component) {
      if (component === root) {
        document.body.insertAdjacentHTML("beforeend", root.getHTML());
      }
      const children = component.children.length;
      if (children > 0) {
        for (let i = 0; i < children; i++) {
          const parent = document.getElementById(component.id);
          const child = component.children[i];
          if (parent) parent.insertAdjacentHTML("beforeend", child.getHTML());
          q.push(child);
        }
      }
    }
  }

  console.log(c1.build());
  console.log(document.body.innerHTML);
}
