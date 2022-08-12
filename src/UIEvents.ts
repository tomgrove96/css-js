import * as Type from "./Type";

export default class UIEvents {
  private events: Map<string, Type.eventDef[]>;

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
      const events = this.events.get(event);

      events?.forEach((value) => {
        const target = e.target as HTMLInputElement;
        if (target && target.id === value.componentId) value.cb();
      });
    });
  };
}
