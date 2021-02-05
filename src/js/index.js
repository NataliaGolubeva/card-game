import "../../icons/svgxuse";
import { Memory } from "./Memory.js";

//const card1 = new Card(document.querySelector("#grid"), "pencil");
//const card2 = new Card(document.querySelector("#grid"), "gear");
//const card3 = new Card(document.querySelector("#grid"), "pencil");
//const card4 = new Card(document.querySelector("#grid"), "gear");

window.addEventListener("flipped", function (e) {
  console.log(e.detail._icon);
});
const username = window.prompt("Enter your nickname");
new Memory(username);

//new Memory();

//
