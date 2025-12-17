let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
const msgEl = document.querySelector("#message-el");
const sumEl = document.querySelector("#sum-el");
const cardsEl = document.querySelector("#cards-el");
const playerEl = document.querySelector("#player-el");

let player = {
  name: "Tanmay",
  chips: 145,
};

playerEl.textContent = `${player.name} $${player.chips}`;

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function getRandomCard() {
  let value = Math.floor(Math.random() * 13) + 1;
  if (value === 1) {
    value = 11;
  } else if (value > 10) {
    value = 10;
  }
  return value;
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += `${cards[i]} `;
  }
  sumEl.textContent = `Sum: ${sum}`;

  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  msgEl.textContent = message;
}

function newCard() {
  let new_card = getRandomCard();
  sum += new_card;
  cards.push(new_card);
  if (!isAlive || hasBlackJack) {
    message = "The game is finished";
    msgEl.textContent = message;
    msgEl.style.color = "red";
  } else {
    renderGame();
  }
}
