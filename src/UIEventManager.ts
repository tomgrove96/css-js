import IEvent from "./interfaces/IEvent";

export default class UIEventManager {
  private events: Map<string, IEvent[]>;
  private static instance: UIEventManager;

  constructor() {
    this.events = new Map();
  }

  addEventListener(event: string, cb: IEvent) {
    const eventList = this.events.get(event);

    if (!eventList) {
      this.events.set(event, [cb]);
      this.addEvent(event);
      return;
    }

    this.events.set(event, [...eventList, cb]);
  }

  private addEvent = (event: string) => {
    document.body.addEventListener(event, (e) => {
      e.preventDefault();
      const events = this.events.get(event);

      events?.forEach((value) => {
        const target = e.target as HTMLInputElement;
        if (target && target.id === value.componentId) value.cb(e);
      });
    });
  };

  public static getInstance() {
    if (!UIEventManager.instance) {
      UIEventManager.instance = new UIEventManager();
    }
    return UIEventManager.instance;
  }
}
