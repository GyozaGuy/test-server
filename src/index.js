import 'nwc-library';
import 'regenerator-runtime/runtime';

import './components/BingMap/BingMap';
import './index.css';

document.addEventListener('DOMContentLoaded', () => {
  const openDialogButton = document.body.querySelector('#openDialogButton');
  const dialog = document.body.querySelector('ui-dialog');
  const closeDialogButton = document.body.querySelector('#closeDialogButton');

  openDialogButton.addEventListener('click', () => {
    dialog.showModal();
  });

  closeDialogButton.addEventListener('click', () => {
    dialog.close();
  });
});
