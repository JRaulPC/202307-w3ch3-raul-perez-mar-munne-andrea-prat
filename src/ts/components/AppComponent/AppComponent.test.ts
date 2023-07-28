import { type ShowStructure } from "../../types/types.js";
import TvShowCardComponent from "../TvShowCardComponent/TvShowCardComponent.js";

describe("Given a TvShowCardComponent component", () => {
  describe("When it receives 'theSopranos' name", () => {
    test("Then it should show the name 'theSopranos' inside a heading", () => {
      const container = document.createElement("div");
      const theSopranos: ShowStructure = {
        id: 1,
        name: "theSopranos",
        creator: "David Chase",
        year: 1999,
        poster:
          "https://m.media-amazon.com/images/M/MV5BZGJjYzhjYTYtMDBjYy00OWU1LTg5OTYtNmYwOTZmZjE3ZDdhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
        isWatched: true,
        score: 5,
        emmies: 21,
      };

      const showCardComponent = new TvShowCardComponent(container, theSopranos);
      showCardComponent.render();

      const titleElement = "theSopranos";

      expect(titleElement).toBe(theSopranos.name);
    });
  });
});
