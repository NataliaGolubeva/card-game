import Card from "./Card";

export class Memory {
  constructor(lvl = 1) {
    this._allIcons = [];
    this._lvl = lvl;
    this._username = username;
    this._first = null;
    this._second = null;
    this._grid = document.body.querySelector("#grid");
    this.setUpEvents();
    this.fetchIcons();
    this.startLevel();
    // if (localStorage.getItem("xyz")) {
    //  const persistedData = JSON.parse(localStorage.getItem("xyz"));
    //  this._lvl = persistedData.lvl;
    // this._allIcons = persistedData.icons;

    // this.startLevel();
    //...
    //  } else {
    //   this.fetchIcons();
    // }
  }
  // saveToPersist() {
  //   localStorage.setItem(
  //     "xyz",
  //     JSON.stringify({
  //       lvl: this._level,
  //       icons: this._allIcons,
  //     })
  //   );
  // }

  fetchIcons() {
    fetch("icons/selection.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this._allIcons = data.icons.map((el) => el.properties.name);
        this.init();
      })
      .catch((error) => console.log(error));
  }

  startLevel() {
    while (this.lvl < 10) {
      const totalDistinctCards = this._allIcons
        .sort(() => 0.5 - Math.random())
        .slice(0, this.lvl * 2);
      const allCards = this.shuffle([
        ...totalDistinctCards,
        ...totalDistinctCards,
      ]);
      allCards.forEach((element) => {
        new Card(this._grid, element);
      });
      this.lvl++;
    }
  }
  shuffle(cards) {
    var currentIndex = cards.length,
      temporaryValue,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = cards[currentIndex];
      array[currentIndex] = cards[randomIndex];
      cards[randomIndex] = temporaryValue;
    }

    return cards;
  }

  setUpEvents() {
    window.addEventListener("flipped", function (e) {
      console.log(e.detail._icon);
    });
  }
}
