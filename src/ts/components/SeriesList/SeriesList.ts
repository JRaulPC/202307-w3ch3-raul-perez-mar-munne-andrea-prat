import shows from "../../shows.js";
import Component from "../Component/Component.js";
import TvShowCardComponent from "../TvShowCardComponent/TvShowCardComponent.js";

class SeriesList extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "main", "main-content");
  }

  render() {
    const watchedShows = shows.filter((show) => show.isWatched);
    const pendingShows = shows.filter((show) => !show.isWatched);

    this.element.innerHTML = ` 
       <section class="list">
        <h3 class="list__title">Pending series</h3>
          <span class="list__info">You have ${pendingShows.length} series pending to watch</span>
          <!--<span class="list__info">Congrats! You've watched all your series</span>-->
        <ul class="series">
         </ul>
      </section>
      <section class="list">
        <h3 class="list__title">Watched series</h3>
        <span class="list__info">You have watched ${watchedShows.length} series</span>
        <ul class="series">
         </ul>
      </section>
      `;

    const pendingShowsList = this.element.querySelector(
      ".list:nth-of-type(1) .series"
    )!;

    pendingShows.forEach((pendingShow) => {
      const pendingShowPosition = document.createElement("li");
      new TvShowCardComponent(pendingShowPosition, pendingShow).render();
      pendingShowsList.append(pendingShowPosition);
    });

    const watchedShowsList = this.element.querySelector(
      ".list:nth-of-type(2) .series"
    )!;

    watchedShows.forEach((tvShow) => {
      const watchedShowPosition = document.createElement("li");
      new TvShowCardComponent(watchedShowPosition, tvShow).render();
      watchedShowsList.append(watchedShowPosition);
    });
  }
}

export default SeriesList;
