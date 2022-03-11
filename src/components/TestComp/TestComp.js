import Component from '../../helpers/Component';
import './TestComp.css';

customElements.define(
  'test-comp',
  class extends Component {
    connected() {
      this.results1 = this.querySelector('#results1');
      this.results2 = this.querySelector('#results2');

      this.querySelector('#reset1').addEventListener('click', () => {
        this.clearState('root.data1');
      });

      this.querySelector('#reset2').addEventListener('click', () => {
        this.clearState('root.data2');
      });

      this.onStateChange('root.data1', value => {
        this.results1.textContent = value;
      });

      this.onStateChange('root.data2', value => {
        this.results2.textContent = value;
      });
    }
  }
);
