import Component from "../Component/Component.js";

class CounterComponent extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "h3", ".class__info");
    this.render();
  }

  render() {
    this.element.innerHTML = `
     <span class="list__info">You have 4 series pending to watch</span>
    `;
  }
}

export default CounterComponent;
