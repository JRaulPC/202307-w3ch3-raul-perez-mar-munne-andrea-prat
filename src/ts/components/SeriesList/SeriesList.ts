import shows from "../../shows.js";
import Component from "../Component/Component.js";
import TvShowCardComponent from "../TvShowCardComponent/TvShowCardComponent.js";

class SeriesList extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "h2", "main-content__title");
  }

  render() {
    this.element.innerHTML = ` 
       <section class="list">
        <h3 class="list__title">Pending series</h3>
        <span class="list__info">You have 4 series pending to watch</span>
        <!--<span class="list__info">Congrats! You've watched all your series</span>-->
        <ul class="series">
        </section>
          `;

    const seriesList = document.querySelector(".series")!;

    shows.slice(0, 4).forEach((tvShow) => {
      const serielist = document.createElement("li");
      new TvShowCardComponent(serielist, tvShow).render();
      seriesList.append(serielist);
    });
  }
}

export default SeriesList;
