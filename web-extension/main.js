let myLeads = [];

const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");

const ul = document.createElement("ul");
document.body.appendChild(ul);

const storedLeads = JSON.parse(localStorage.getItem("myLeads"));

if (storedLeads) {
  myLeads = storedLeads;
  render(myLeads);
}

tabBtn.addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    myLeads.push(tabs[0]["url"]);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});

function render(leads) {
  ul.innerHTML = ""; // clear before re-render

  for (let i = 0; i < leads.length; i++) {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.textContent = leads[i];
    a.href = leads[i];
    a.target = "_blank";
    a.rel = "noopener noreferrer";

    li.appendChild(a);
    ul.appendChild(li);
  }
}

deleteBtn.addEventListener("dblclick", () => {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

inputBtn.addEventListener("click", () => {
  const value = inputEl.value.trim();
  if (!value) return;

  const fixedUrl = normalizeURL(value);
  myLeads.push(fixedUrl);

  localStorage.setItem("myLeads", JSON.stringify(myLeads));

  render(myLeads);
  inputEl.value = "";
});

function normalizeURL(url) {
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    return "https://" + url;
  }
  return url;
}
