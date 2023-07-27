import { type ShowStructure } from "../../types/types";
import Component from "../Component/Component.js";

class TvShowCardComponent extends Component {
  constructor(parentElement: Element, private readonly shows: ShowStructure) {
    super(parentElement, "article", "serie");
  }

  render() {
    this.element.innerHTML = `
              <img class="serie__poster"
                src="${this.shows.poster}"
                alt="${this.shows.name}" />
              <h4 class="serie__title">${this.shows.name}</h4>
              <span class="serie__info">${this.shows.creator} ${this.shows.year} </span>
              <ul class="score">
              <li class="score__star">
                  <button><i class="icon icon--score far fa-star" title="1/5"></i></button>
                </li>
                <li class="score__star">
                  <button><i class="icon icon--score far fa-star" title="2/5"></i></button>
                </li>
                <li class="score__star">
                  <button><i class="icon icon--score far fa-star" title="3/5"></i></button>
                </li>
                <li class="score__star">
                  <button><i class="icon icon--score far fa-star" title="4/5"></i></button>
                </li>
                <li class="score__star">
                  <button><i class="icon icon--score far fa-star" title="5/5"></i></button>
                </li>
              </ul>
              <button><i class="icon icon--delete fas fa-times-circle"></i></button>

    `;
  }
}

export default TvShowCardComponent;
