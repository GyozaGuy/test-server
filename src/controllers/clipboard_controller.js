import { Controller } from '@hotwired/stimulus';
import './clipboard.css';

export default class extends Controller {
  connect() {
    navigator.permissions.query({ name: 'clipboard-write' }).then(result => {
      if (result.state === 'granted') {
        this.element.classList.add(this.supportedClass);
      }
    });
  }

  copy(event) {
    event.preventDefault();
    this.sourceTarget.select();
    document.execCommand('copy');
  }

  static get classes() {
    return ['supported'];
  }

  static get targets() {
    return ['source'];
  }
}
