const plusOne_btn1 = document.getElementsByClassName("add-one")[0];
const plusTwo_btn1 = document.getElementsByClassName("add-two")[0];
const plusThree_btn1 = document.getElementsByClassName("add-three")[0];
const score_box1 = document.getElementsByClassName("score")[0];

const plusOne_btn2 = document.getElementsByClassName("add-one")[1];
const plusTwo_btn2 = document.getElementsByClassName("add-two")[1];
const plusThree_btn2 = document.getElementsByClassName("add-three")[1];
const score_box2 = document.getElementsByClassName("score")[1];

const lead_el = document.getElementById("lead");

let score_home = 0;
let score_guest = 0;

function updateLeader() {
  let difference = Math.abs(score_home - score_guest);

  if (score_home > score_guest) {
    lead_el.innerText = `HOME by ${difference}`;
  } else if (score_home < score_guest) {
    lead_el.innerText = `GUEST by ${difference}`;
  } else {
    lead_el.innerText = `TIED`;
  }
}
plusOne_btn1.addEventListener("click", () => {
  score_home++;
  score_box1.innerHTML = score_home;
  updateLeader();
});

plusTwo_btn1.addEventListener("click", () => {
  score_home += 2;
  score_box1.innerHTML = score_home;
  updateLeader();
});

plusThree_btn1.addEventListener("click", () => {
  score_home += 3;
  score_box1.innerHTML = score_home;
  updateLeader();
});

plusOne_btn2.addEventListener("click", () => {
  score_guest++;
  score_box2.innerHTML = score_guest;
  updateLeader();
});

plusTwo_btn2.addEventListener("click", () => {
  score_guest += 2;
  score_box2.innerHTML = score_guest;
  updateLeader();
});

plusThree_btn2.addEventListener("click", () => {
  score_guest += 3;
  score_box2.innerHTML = score_guest;
  updateLeader();
});
