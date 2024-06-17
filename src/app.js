/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const suits = ["♠", "♣", "♥", "♦"]; // Moved outside the block
const ranks = [
  // Moved outside the block
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
const cardImages = [
  "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/clubs_ace.svg",
  "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/clubs_2.svg",
  "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/clubs_3.svg",
  "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/clubs_4.svg",
  "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/clubs_5.svg",
  "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/clubs_6.svg",
  "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/clubs_7.svg",
  "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/clubs_8.svg",
  "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/clubs_9.svg",
  "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/clubs_10.svg",
  "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/clubs_jack.svg",
  "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/clubs_queen.svg",
  "https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/clubs_king.svg"
];

let currentImageIndex = 0; // Moved outside the block for accessibility

document.getElementById("cardImage").src = cardImages[currentImageIndex]; // Set initial image

function changeCardImage() {
  currentImageIndex = (currentImageIndex + 1) % cardImages.length;
  const cardImageElement = document.getElementById("cardImage");
  cardImageElement.src = cardImages[currentImageIndex];
}

document.querySelector("#button").addEventListener("click", changeCardImage);
