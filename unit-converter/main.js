/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.querySelector(".input-el");
const convertBtn = document.querySelector(".convert-btn");
const saveBtn = document.querySelector(".save-btn");
const deleteBtn = document.querySelector(".delete-btn");
const wrapperEl = document.querySelector(".wrapper");

const storedConversions = JSON.parse(localStorage.getItem("conversions"));
let conversions = [];

if (storedConversions) {
  conversions = storedConversions;
}

conversions.forEach((conv) => {
  const loadP = document.createElement("p");
  loadP.textContent = conv;
  wrapperEl.appendChild(loadP);
});

const p = document.createElement("p");
let value = 0;
let currentConversion = "";

convertBtn.addEventListener("click", () => {
  value = Number(inputEl.value);
  currentConversion = `
          ${value} metres => ${(value * 3.281).toFixed(3)} feet
    
          ${value} litres => ${(value * 0.264).toFixed(3)} gallon
    
          ${value} kilograms => ${(value * 2.204).toFixed(3)} pound
          `;
  p.textContent = currentConversion;
  wrapperEl.appendChild(p);
  inputEl.value = "";
});

saveBtn.addEventListener("click", () => {
  if (!currentConversion) return;

  conversions.push(currentConversion);
  localStorage.setItem("conversions", JSON.stringify(conversions));

  const savedP = document.createElement("p");
  savedP.textContent = currentConversion;
  wrapperEl.appendChild(savedP);
  inputEl.value = "";
  p.textContent = "";
});

deleteBtn.addEventListener("dblclick", () => {
  localStorage.clear();
  conversions = [];
  const paragraphs = wrapperEl.querySelectorAll("p");
  paragraphs.forEach((p) => p.remove());

  p.textContent = "";
  currentConversion = "";
});
