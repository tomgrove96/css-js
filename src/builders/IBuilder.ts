import { propType } from "../Type";

export default interface IBuilder {
  build(): Map<string, propType>;
}
