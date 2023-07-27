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
    this.element.innerHTML = 
    

  }

  changeStarButtonsStatus(isUnfilled: boolean) {
    this.isUnfilled = !this.isUnfilled;
  }

  listenEvents() {
    const actionOnClick = this.element.addEventListener("click", this.changeStarButtonsStatus(this.isUnfilled));
  }
}

export default StarButtonsComponent;
