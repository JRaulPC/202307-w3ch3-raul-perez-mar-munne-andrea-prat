import shows from "../../shows.js";
import Component from "../Component/Component.js";
import TvShowCardComponent from "../TvShowCardComponent/TvShowCardComponent.js";
class AppComponent extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "div", "container");
  }

  render() {
    this.element.innerHTML = `
    <header class="main-header">
      <h1 class="main-title">My Series</h1>
      </header>
        <main class="main-content"></main>
      <h2 class="main-content__title">Series list</h2>
      <section class="list">
        <h3 class="list__title">Pending series</h3>
        <span class="list__info">You have 4 series pending to watch</span>
        <!--<span class="list__info">Congrats! You've watched all your series</span>-->
      <ul class="series">
    </ul>`;

    const seriesList = document.querySelector(".series")!;

    shows.slice(0, 4).forEach((tvShow) => {
      const serielist = document.createElement("li");
      new TvShowCardComponent(serielist, tvShow).render();
      seriesList.append(serielist);
    });
  }
}

export default AppComponent;
