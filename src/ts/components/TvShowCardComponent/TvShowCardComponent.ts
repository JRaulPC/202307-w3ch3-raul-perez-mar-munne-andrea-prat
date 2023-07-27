import { type ShowStructure } from "../../types/types";
import Component from "../Component/Component.js";

class TvShowCardComponent extends Component {
  selectedStarIndex = -1;

  constructor(
    parentElement: Element,
    private readonly showData: ShowStructure
  ) {
    super(parentElement, "article", "serie");
  }

  public render() {
    this.element.innerHTML = `
      <img class="serie__poster"
        src="${this.showData.poster}"
        alt="${this.showData.name}" />

      <h4 class="serie__title">${this.showData.name}</h4>

      <span class="serie__info">${this.showData.creator} ${this.showData.year}</span>
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

    this.listenToDeleteButton();
    this.listenToStarButtons();
  }

  private listenToDeleteButton() {
    const closeIcon = this.element.querySelector("i.icon.icon--delete")!;
    const button = closeIcon.parentElement!;

    button.addEventListener("click", () => {
      this.element.parentElement!.remove();
    });
  }

  private listenToStarButtons() {
    const starButtons = Array.from(
      this.element.querySelectorAll("i.icon.icon--score")
    );

    starButtons.forEach((button, clickedButtonIndex) => {
      button.addEventListener("click", () => {
        this.selectedStarIndex = clickedButtonIndex;
        this.updateStarClasses(starButtons);
      });
    });
  }

  private updateStarClasses(starButtons: Element[]) {
    starButtons.forEach((button, currentButtonIndex) => {
      if (currentButtonIndex <= this.selectedStarIndex) {
        button.classList.add("star-active");
      } else {
        button.classList.remove("star-active");
      }
    });
  }
}

export default TvShowCardComponent;
