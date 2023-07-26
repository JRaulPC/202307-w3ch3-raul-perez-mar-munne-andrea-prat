import { ShowStructure } from "../../types/types";
import Component from "../Component/Component.js";

class TvShowCardComponent extends Component {
  constructor(parentElement: Element, private shows: ShowStructure) {
    super(parentElement, "li", "");
  }

  render() {
    let punctuationStars;

    if (this.shows.isWatched) {
      punctuationStars = `
        <li class="score__star">
           <button><i class="icon icon--score far fa-star" title="${this.shows.score}/5"></i></button>
        </li>`;
    } else {
      punctuationStars = `
        <li class="score__star">
           <button><i class="icon icon--score far fa-star" title="0/5"></i></button>
        </li>`;
    }

    this.element.innerHTML = `
        <article class="serie">
              <img class="serie__poster"
                src="${this.shows.poster}"
                alt="The Sopranos poster" />
              <h4 class="serie__title">${this.shows.name}</h4>
              <span class="serie__info">${this.shows.creator} ${this.shows.year} </span>
              <ul class="score">
              ${punctuationStars}
              </ul>
              <button><i class="icon icon--delete fas fa-times-circle"></i></button>
            </article>
    `;
  }
}

export default TvShowCardComponent;
