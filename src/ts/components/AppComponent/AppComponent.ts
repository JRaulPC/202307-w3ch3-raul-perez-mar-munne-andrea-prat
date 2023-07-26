import Component from "../Component/Component.js";

class AppComponent extends Component {
  constructor(private parentElement: Element) {
    super(parentElement, "div", "container");
    this.render();
  }

  render() {
    this.element.innerHTML = `
    <div class="container">
      <header class="main-header">
      <h1 class="main-title">My Series</h1>
    </header>
    </div>`;
  }
}

export default AppComponent;
