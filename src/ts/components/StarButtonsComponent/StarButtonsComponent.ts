import Component from "../Component/Component.js";

class StarButtonsComponent extends Component {
  text: string;
  actionOnClick: () => void;

  constructor(
    parentElement: Element,
    text: string,
    actionOnClick: () => void,
    className = "icon icon--score far fa-star"
  ) {
    super(parentElement, "score", `${className}`);

    this.text = text;
    this.actionOnClick = actionOnClick;

    this.listenEvents();
  }

  render() {
    this.element.textContent = this.text;
    this.element.innerHTML = 

  }

  listenEvents() {
    this.element.addEventListener("click", this.actionOnClick);
  }
}

export default StarButtonsComponent;
