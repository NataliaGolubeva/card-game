import "../../icons/svgxuse";
import { Memory } from "./Memory";
import Card from "./Card";

const card1 = new Card(document.querySelector("#grid"), "pencil");
const card2 = new Card(document.querySelector("#grid"), "gear");

window.addEventListener("flipped", function (e) {
  console.log(e.detail._icon);
});
//const username = window.prompt("Enter your nickname");
//new Memory(username);

new Memory();
