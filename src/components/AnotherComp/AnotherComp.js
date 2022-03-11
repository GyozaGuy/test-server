import Component from '../../helpers/Component';
import './AnotherComp.css';

customElements.define(
  'another-comp',
  class extends Component {
    connected() {
      this.data = this.querySelector('#data');

      this.onStateChange('root.data1', value => {
        this.data.textContent = value;
      });
    }
  }
);
