import AppComponent from "./components/AppComponent/AppComponent.js";

const appContainer: Element = document.querySelector(".appContainer")!;

const containerTest = new AppComponent(appContainer);

containerTest.render();
