import * as Type from "./Type";

export default class UIEventManager {
  private events: Map<string, Type.eventDef[]>;
  private static instance: UIEventManager;

  constructor() {
    this.events = new Map();
  }

  addEvent(event: string, eventDef: Type.eventDef) {
    const eventList = this.events.get(event);

    if (!eventList) {
      this.events.set(event, [eventDef]);
      this.addEventListener(event);
      return;
    }

    this.events.set(event, [...eventList, eventDef]);
  }

  private addEventListener = (event: string) => {
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
