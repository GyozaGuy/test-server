import 'nwc-library';
import 'regenerator-runtime/runtime';

import dragonConfig from './configs/dragon';
import { html, select } from './helpers/dom';
import './index.css';

document.addEventListener('DOMContentLoaded', () => {
  applyConfig(dragonConfig);
});

function applyConfig(config) {
  const canvas = select('#canvas');
  canvas.style.backgroundImage = `url("${config.backgroundImage}")`;

  const fragment = document.createDocumentFragment();

  renderPerson(config.person, fragment);
  canvas.appendChild(fragment);
}

function renderPerson(person, fragment) {
  const [left, bottom] = person.location;

  fragment.appendChild(html`
    <div
      class="person"
      style="
        bottom: ${bottom}%;
        left: ${left}%;
      "
    >
      ${person.name}
    </div>
  `);

  for (const parent of person.parents) {
    renderPerson(parent, fragment);
  }
}
