import 'nwc-library';
import 'regenerator-runtime/runtime';

import StateManager from './helpers/StateManager';
import './components/TestComp/TestComp';
import './components/AnotherComp/AnotherComp';
import './index.css';

document.addEventListener('DOMContentLoaded', () => {
  document.body.querySelector('#button1').addEventListener('click', () => {
    StateManager.update('root.data1', 'event 1 fired!');
  });

  document.body.querySelector('#button2').addEventListener('click', () => {
    StateManager.update('root.data2', 'event 2 fired!');
  });
});
