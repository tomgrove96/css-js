export default interface IEvent {
  componentId: string;
  cb: (e: Event) => void;
}
