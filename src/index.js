import { Application, Controller } from '@hotwired/stimulus';
import { definitionsFromContext } from '@hotwired/stimulus-webpack-helpers';
import 'nwc-library';
import 'regenerator-runtime/runtime';

import './index.css';

class Hello extends Controller {
  greet() {
    console.log(`Hello, ${this.name}!`);
  }

  get name() {
    return this.nameTarget.value;
  }

  static get targets() {
    return ['name'];
  }
}

const application = Application.start();
const stuff = definitionsFromContext(require.context('./controllers', true, /\.js$/));

application.load([...stuff, { controllerConstructor: Hello, identifier: 'hello' }]);
