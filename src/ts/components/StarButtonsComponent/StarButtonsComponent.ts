import Component from "../Component/Component.js";

class StarButtonsComponent extends Component {
  text: string;
  isUnfilled: boolean;
  actionOnClick: () => void;

  constructor(
    parentElement: Element,
    text: string,
    isUnfilled: boolean,
    actionOnClick: () => void,
    className = "icon icon--score far fa-star"
  ) {
    super(parentElement, "score", `${className}`);

    this.text = text;
    this.actionOnClick = actionOnClick;
    this.isUnfilled = isUnfilled && true;

    this.changeStarButtonsStatus(isUnfilled);
    this.listenEvents();
  }

  render() {
    this.element.textContent = this.text;
    this.element.innerHTML = `
      <ul class="score">
        <li class="score__star">
          <button>
            <i class="icon icon--score far fa-star" title="1/5"></i>
          </button>
        </li>
        <li class="score__star">
          <button>
            <i class="icon icon--score far fa-star" title="2/5"></i>
          </button>
        </li>
        <li class="score__star">
          <button>
            <i class="icon icon--score far fa-star" title="3/5"></i>
          </button>
        </li>
        <li class="score__star">
          <button>
            <i class="icon icon--score far fa-star" title="4/5"></i>
          </button>
        </li>
        <li class="score__star">
          <button>
            <i class="icon icon--score far fa-star" title="5/5"></i>
          </button>
        </li>
      </ul>
    `;
  }

  changeStarButtonsStatus(isUnfilled: boolean) {
    this.isUnfilled = !this.isUnfilled;
  }

  listenEvents() {
    const actionOnClick = this.element.addEventListener(
      "click",
      this.changeStarButtonsStatus(this.isUnfilled)
    );
  }
}

export default StarButtonsComponent;
