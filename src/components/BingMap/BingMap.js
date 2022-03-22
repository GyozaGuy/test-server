import { Component, css, html } from 'nwc-library';

class BingMap extends Component {
  static styles = css`
    :host {
      display: block;
      height: 100%;
    }

    #map {
      height: 100%;
    }
  `;

  apiKey;
  #maps;
  #_map;

  connected() {
    if (!this.hasAttribute('apiKey')) {
      throw new Error('A valid API key must be provided');
    }

    this.apiKey = this.getAttribute('apiKey');
    this.getMapReference();
  }

  getMapReference() {
    setTimeout(() => {
      try {
        this.#maps = window.Microsoft.Maps;

        // Copy map styles from head into shadowRoot
        for (const styleEl of document.head.querySelectorAll('link[href*="bing.com"]')) {
          this.shadowRoot.appendChild(styleEl.cloneNode());
        }

        this.#map = window.Microsoft.Maps.Map(this.shadowRoot.querySelector('#map'), {
          credentials: this.apiKey
        });
      } catch (err) {
        this.getMapReference();
      }
    });
  }

  handleChildrenUpdated(target) {
    if (!this.#map) {
      return;
    }

    const pushpins = target
      .assignedNodes({ flatten: true })
      .filter(node => node.tagName === 'PUSH-PIN');

    if (!pushpins.length) {
      return;
    }

    this.#map.entities.clear();

    for (const pushpin of pushpins) {
      const mapPin = new this.#maps.Pushpin(
        {
          latitude: pushpin.latitude,
          longitude: pushpin.longitude
        },
        { color: pushpin.color, text: pushpin.text, title: pushpin.pinTitle }
      );
      this.#map.entities.push(mapPin);
    }
  }

  render() {
    return html`<div id="map"><slot></slot></div>`;
  }

  get #map() {
    return this.#_map;
  }

  set #map(map) {
    this.#_map = map;
    this.handleChildrenUpdated(this.shadowRoot.querySelector('slot'));
  }
}

customElements.define('bing-map', BingMap);

class Pushpin extends Component {
  color;
  latitude;
  longitude;
  pinTitle;
  text;

  connected() {
    if (!['latitude', 'longitude', 'pin-title', 'text'].every(attr => this.hasAttribute(attr))) {
      throw new Error('Missing required attributes');
    }

    this.color = this.getAttribute('color');
    this.latitude = Number(this.getAttribute('latitude'));
    this.longitude = Number(this.getAttribute('longitude'));
    this.pinTitle = this.getAttribute('pin-title');
    this.text = this.getAttribute('text');
  }
}

customElements.define('push-pin', Pushpin);
