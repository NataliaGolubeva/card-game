export default class Card {
  constructor(holder, icon) {
    this._holder = holder;
    this._icon = icon;
    this._flippedEvent = new CustomEvent("flipped", { detail: this });
    this._ref = this.generateInitialHTML();
    this._isFlipped = false;
    this.setUpEvents();
  }
  generateInitialHTML() {
    this._holder.insertAdjacentHTML(
      "beforeEnd",
      ` <div class="card">
          <div class="front"></div>
          <div class="back">
            <svg class="icon icon-${this._icon}"><use xlink:href="./icons/symbol-defs.svg#icon-${this._icon}"></use></svg>             
          </div>
          </div>
              
      `
    );
    return this._holder.querySelector(".card:last-child");
  }
  setUpEvents() {
    this._ref.onclick = this.flip;
  }
  flip = () => {
    if (this._isFlipped) {
      this._ref.classList.remove("flipped");
      this_isFlipped = false;
    } else {
      //flip him
      this._ref.classList.add("flipped");
      // event uitsturen
      this._isFlipped = true;
      //send event that card has been flipped
      dispatchEvent(this._flippedEvent);
    }
  };
}
