import shows from "../../shows.js";
import Component from "../Component/Component.js";
import TvShowCardComponent from "../TvShowCardComponent/TvShowCardComponent.js";

class SeriesList extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "main", "main-content");
  }

  render() {
    this.element.innerHTML = ` 
       <section class="list">
        <h3 class="list__title">Pending series</h3>
          <span class="list__info">You have 4 series pending to watch</span>
          <!--<span class="list__info">Congrats! You've watched all your series</span>-->
        <ul class="series">
         </ul>
      </section>
      <section class="list">
        <h3 class="list__title">Watched series</h3>
        <span class="list__info">You have watched 4 series</span>
        <ul class="series">
         </ul>
      </section>
      `;

    const pendingShowsList = this.element.querySelector(
      ".list:nth-of-type(1) .series"
    )!;

    const pendingShows = shows.filter((show) => !show.isWatched);

    pendingShows.forEach((pendingShow) => {
      const pendingShowPosition = document.createElement("li");
      new TvShowCardComponent(pendingShowPosition, pendingShow).render();
      pendingShowsList.append(pendingShowPosition);
    });

    const watchedShowsList = this.element.querySelector(
      ".list:nth-of-type(2) .series"
    )!;

    const watchedShows = shows.filter((show) => show.isWatched);

    watchedShows.forEach((tvShow) => {
      const serielist = document.createElement("li");
      new TvShowCardComponent(serielist, tvShow).render();
      watchedShowsList.append(serielist);
    });
  }
}

export default SeriesList;
