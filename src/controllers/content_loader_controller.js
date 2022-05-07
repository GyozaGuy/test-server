import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  connect() {
    this.load({ params: {} });

    if (this.hasRefreshIntervalValue) {
      this.startRefreshing();
    }
  }

  disconnect() {
    this.stopRefreshing();
  }

  load({ params }) {
    fetch(params.url)
      .then(response => response.text())
      .then(html => this.element.innerHTML = html);
  }

  startRefreshing() {
    this.refreshTimer = setInterval(() => {
      this.load();
    }, this.refreshIntervalValue);
  }

  stopRefreshing() {
    if (this.refreshTimer) {
      clearInterval(this.refreshTimer);
    }
  }

  static get values() {
    return { refreshInterval: Number, url: String };
  }
}
