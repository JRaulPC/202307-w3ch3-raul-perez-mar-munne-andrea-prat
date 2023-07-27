import Component from "../Component/Component.js";
import SeriesList from "../SeriesList/SeriesList.js";
class AppComponent extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "div", "container");
  }

  render() {
    this.element.innerHTML = `
   <header class="main-header">
      <h1 class="main-title">My Series</h1>
    </header>
    <main class="main-content">
      <h2 class="main-content__title">Series list</h2>
    </main>`;

    const mainContainer = document.querySelector(".main-content")!;
    new SeriesList(mainContainer).render();
  }
}

export default AppComponent;
