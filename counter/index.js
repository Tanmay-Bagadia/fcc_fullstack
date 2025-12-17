const count_el = document.getElementById("count-el");
const count_btn = document.getElementById("count-btn");

let count = 0;
count_btn.addEventListener("click", () => {
  count++;
  count_el.innerText = count;
  console.log(1);
});
