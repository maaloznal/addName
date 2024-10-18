let input = document.querySelector("#input");
let button = document.querySelector("#button");
let valueName = document.querySelector("#name");

button.addEventListener("click", addName);
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addName();
  }
});

let myName = [];

input.focus();
loadNameFromLocalStorage();

function addName() {
  const newName = input.value.trim();
  if (newName !== "") {
    valueName.innerHTML = "";
    const nameEl = createNameElement(newName);
    const nameObj = createNameObject(newName);
    myName = [nameObj];
    myName.push(nameObj);
    input.value = "";
    valueName.appendChild(nameEl);
    saveNameToLocalStorage();
  } else {
    alert("Внимание! Добавьте ваше имя");
  }
}

function createNameElement(newName) {
  const nameEl = document.createElement("div");
  nameEl.className = "item";
  const textNameEl = document.createElement("h2");
  textNameEl.textContent = newName;

  nameEl.appendChild(textNameEl);

  return nameEl;
}

function createNameObject(newName) {
  return newName;
}

function saveNameToLocalStorage() {
  localStorage.setItem("myName", JSON.stringify(myName));
}

function loadNameFromLocalStorage() {
  const storedName = JSON.parse(localStorage.getItem("myName")) || [];
  myName = storedName;
  valueName.innerHTML = "";
  if (storedName.length > 0) {
    const nameEl = createNameElement(storedName[0]);
    valueName.appendChild(nameEl);
  }
}
