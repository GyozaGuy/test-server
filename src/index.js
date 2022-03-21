import 'nwc-library';
import 'regenerator-runtime/runtime';

import './components/BingMap/BingMap';
import './index.css';

document.addEventListener('DOMContentLoaded', () => {
  const openDialogButton = document.body.querySelector('#openDialogButton');
  const dialog = document.body.querySelector('#dialog');

  for (const closeDialogButton of [...dialog.querySelectorAll('.closeDialogButton')]) {
    closeDialogButton.addEventListener('click', () => {
      dialog.close();
    });
  }

  openDialogButton.addEventListener('click', () => {
    dialog.showModal();
  });

  dialog.addEventListener('close', ({ target }) => {
    target.removeAttribute('opened');
  });

  const dialogObserver = new MutationObserver(mutations => {
    for (const mutation of mutations) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'open') {
        mutation.target.setAttribute('opened', '');
      }
    }
  });

  dialogObserver.observe(dialog, { attributes: true });
});
