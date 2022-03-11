import StateManager from './StateManager';

export default class Component extends HTMLElement {
  constructor() {
    super();
    this.callbacks = {};
  }

  connectedCallback() {
    setTimeout(() => this.connected());
  }

  clearState(path) {
    StateManager.update(path, null);
  }

  connected() {}

  onStateChange(path, callback) {
    StateManager.subscribe(this, path);

    if (!this.callbacks[path]) {
      this.callbacks[path] = [];
    }

    this.callbacks[path].push(callback);
  }

  stateChanged(path, value, state) {
    if (!this.callbacks[path]) {
      console.warn(`No callbacks for path ${path}`);
      return;
    }

    for (const callback of this.callbacks[path]) {
      callback(value, state);
    }
  }

  updateState(path, value) {
    StateManager.update(path, value);
  }
}
