import 'nwc-library';
import Peer from 'peerjs';
import 'regenerator-runtime/runtime';

import './index.css';

const peer = new Peer();

peer.on('open', id => {
  const peerId = document.body.querySelector('#peerId');
  const destPeerId = document.body.querySelector('#destPeerId');
  const callButton = document.body.querySelector('#callButton');
  const contactVideo = document.body.querySelector('#contactVideo');

  peerId.textContent = id;

  callButton.addEventListener('click', async () => {
    const call = peer.call(
      destPeerId.value,
      await navigator.mediaDevices.getUserMedia({ audio: true, video: true })
    );

    call.on('stream', stream => {
      contactVideo.srcObject = stream;
    });
  });

  peer.on('call', async call => {
    call.answer(await navigator.mediaDevices.getUserMedia({ audio: true, video: true }));

    call.on('stream', stream => {
      contactVideo.srcObject = stream;
    });
  });
});
