import * as Type from "../Type";

export class Component {
  id: string;
  props: Map<string, Type.propType>;
  children: Component[];

  constructor(id: string) {
    this.id = id;
    this.props = new Map();
    this.children = [];
  }
}
