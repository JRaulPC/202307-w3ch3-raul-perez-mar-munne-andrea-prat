import Component from "../Component/Component.js";

class HeaderComponent extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "header", ".main-header");
    this.render();
  }

  render() {
    this.element.innerHTML = `
    <header class="main-header">
      <h1 class="main-title">My Series</h1>
    </header>`;
  }
}

export default HeaderComponent;
