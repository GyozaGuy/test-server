const events = {};
const state = {};

export default class StateManager {
  static subscribe(element, eventName) {
    if (!events[eventName]) {
      events[eventName] = [];
    }

    events[eventName].push(element);
  }

  static unsubscribe(element, eventName) {
    const subscribers = events[eventName];

    if (!subscribers) {
      throw new Error(`Invalid event name: ${eventName}`);
    }

    subscribers.splice(subscribers.indexOf(element), 1);
  }

  static update(path, value) {
    if (!events[path]) {
      console.warn(`No subscribers for path ${path}`);
      return;
    }

    const segments = path.split('.');
    let currentSegment = state;

    for (const [index, segment] of segments.entries()) {
      if (index === segments.length - 1) {
        currentSegment[segment] = value;
      } else {
        if (!currentSegment[segment]) {
          currentSegment[segment] = {};
        }

        currentSegment = currentSegment[segment];
      }
    }

    for (const subscriber of events[path]) {
      subscriber.stateChanged(path, value, state);
    }

    console.log(state);
  }

  get state() {
    return state;
  }
}
