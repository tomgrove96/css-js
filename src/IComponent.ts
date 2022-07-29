export interface IComponent {
  id: string;
  children: IComponent[];
  props: Map<string, string>;
}
