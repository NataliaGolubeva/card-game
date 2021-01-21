//import Module from "./Module";

//console.log("testje");
//console.log(Module());
var color = randomColor();
// maak gebruik van https://github.com/verhulstd/syntra-fe-scss-js
//  Maak een class Rectangle(w, h, x, y)
//     getters en setters voor width, height, x, y
//     geef deze een random-bgcolor (npmjs.org/random-color)
//     oppervlakte van die rectangle?
//     afstand van rect tot rect => A²=B²+C² (van midden tot midden)
//     als je klikt op 1 rechthoek dan krijgt die een nieuwe BGC
//      hitTest/collision detection

class Rectangle {
  constructor(width, height, x, y) {
    this._width = width;
    this._height = height;
    this._x = x;
    this._y = y;
    this._ref = this.generateInitialHTML();
    this.setStyling();
  }
  generateInitialHTML() {
    document.body.insertAdjacentHTML(
      "afterBegin",

      `<div class="rectangle"></div>`
    );
    return document.querySelector("div:first-child");
  }
  setStyling() {
    const styles = {
      left: this._x + "px",
      top: this._y + "px",
      width: this._width + "px",
      height: this._height + "px",
      backgroundColor: randomColor(),
    };
    Object.assign(this._ref.style, styles);
  }

  get width() {
    return this._width + "px";
  }
  set width(value) {
    this._width = value;
    this.setStyling;
  }
  get height() {
    return this._height + "px";
  }
  set height(value) {
    this._height = value;
    this.setStyling;
  }
  get x() {
    return this._x + "px";
  }
  set x(value) {
    this._x = value;
    this.setStyling;
  }
  get y() {
    return this._y + "px";
  }
  set y(value) {
    this._y = value;
    this.setStyling;
  }
  get position() {
    return `${this._x}, ${this._y}`;
  }
  set position(coordinates) {
    const arr = coordinates.replace(" ", "").split(",");
    this._x = arr[0];
    this._y = arr[1];
    this.setStyling;
  }
  get oppervlaakte() {
    return "Oppervlakte is " + this._width * this._height + "px";
  }
  getPositionAtCenterX() {
    return this._x + this._width / 2;
  }
  getPositionAtCenterY() {
    return this._y + this._height / 2;
  }
  static getDistance(a, b) {
    return Math.hypot(
      a.getPositionAtCenterX() - b.getPositionAtCenterX(),
      a.getPositionAtCenterY() - b.getPositionAtCenterY()
    );
  }
}

//rect.generateHTML();
const rect1 = new Rectangle(300, 200, 50, 50);
const rect2 = new Rectangle(200, 150, 300, 300);

document.querySelector("button").onclick = function () {
  console.log(rect1.width, rect1.height, rect1.x, rect1.y);
  console.log(rect1.position);
  //rect1.position = "100, 100";
  //rect2.position = "0, 500";
  rect1.width = 100;
  //console.log(rect1.width, rect1.height);
  //rect2.height = 50;
  console.log(rect2.oppervlaakte);

  //console.log(rect1.getPositionAtCenterX());
};

console.log("Distance is " + Rectangle.getDistance(rect1, rect2) + "px");

document.querySelectorAll(".rectangle").addEventListener("click", function () {
  document.querySelectorAll(".rectangle").style.backgroundColor.randomColor();
});
rect1.addEventListener("click", () => {
  rect1.setStyling().backgroundColor.randomColor();
});
