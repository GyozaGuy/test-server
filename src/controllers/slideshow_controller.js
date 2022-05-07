import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  indexValueChanged() {
    this.showCurrentSlide();
  }

  next() {
    this.indexValue++;
    this.showCurrentSlide();
  }

  previous() {
    this.indexValue--;
    this.showCurrentSlide();
  }

  showCurrentSlide() {
    this.slideTargets.forEach((element, index) => {
      element.hidden = index !== this.indexValue;
    });
  }

  static get targets() {
    return ['slide'];
  }

  static get values() {
    return { index: { default: 2, type: Number } };
  }
}
