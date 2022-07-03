// Pila
let pila = document.querySelector("#pila");
let form = document.querySelector("#form");
let start = Date.now(); // запомнить время начала

let timerPila = setInterval(function () {
  // сколько времени прошло с начала анимации?
  let timePassed = Date.now() - start;

  if (timePassed >= 2400) {
    clearInterval(timer); // закончить анимацию через 2 секунды
    return;
  }

  // отрисовать анимацию на момент timePassed, прошедший с начала анимации
  draw(timePassed);
}, 20);

function draw(timePassed) {
  pila.style.left = timePassed / 4 + "px";
}

///

let section = document.querySelector("section");
let threeDivs = document.querySelector(".content");

let divContent = document.querySelector("#content");
let divNumber = document.querySelector("#number");
let gamersTable = document.querySelector("#gamersTable");
let saveButton = document.querySelector("#saveButton");

let name = document.querySelector("#name");

let n = 0;
let value = 0;
let timerId;

document.querySelector("input").addEventListener("input", function () {
  let value = this.value;
  if (!value) return;
  value = value.replace();
  this.value = value;
  saveButton.onclick = function () {
    name.setAttribute("disabled", "disabled");
    threeDivs.style.display = "inherit";
    section.style.display = "inherit";
  };
  false;
});

for (let i = 1; i <= 100; i++) {
  let div = document.createElement("div");
  div.textContent = i;
  div.className = "game_div";
  div.id = "game_div";
  section.appendChild(div);
}

divContent.innerHTML = "Push the button from 1 to 100";
divNumber.innerHTML = `Number of attempts: 0`;
document.querySelector("#timer").textContent = "Timer: 0";

const randomValue = Math.floor(Math.random() * 101);
console.log(`заганное число ${randomValue}`);

let gameDivs = document.querySelectorAll(".game_div");

// фон задня панель таблиці
function refresh() {
  let option = document.createElement("div");
  let btnAgain = document.createElement("button");
  section.append(option);
  option.classList.add("option");
  btnAgain.classList.add("btnAgain");
  btnAgain.textContent = "Try again";
  if ((section.style.visibility = "hidden")) {
    option.style.visibility = "visible";
    option.append(btnAgain);
    btnRepet();
    /* saveButton.addEventListener("click", function () {
            console.log('form.mame.value');
            addRow(gamersForm.name.value,
                n,
                value);
        });*/
  }

  // Кнопка рестарт
  function btnRepet() {
    btnAgain.addEventListener("click", function () {
      window.location.reload();
    });
  }
}

// let myValue = Number(divContent.innerHTML);
for (let i = 0; i < gameDivs.length; i++) {
  gameDivs[i].addEventListener("click", function game() {
    divContent.innerHTML = gameDivs[i].textContent;
    // let myValue = Number(divContent.innerHTML);
    function back() {
      gameDivs[i].style.backgroundColor = "blue";
    }

    // timer
    if (!timerId) {
      timerId = setInterval(timer, 1000);
    }

    while (true) {
      let myValue = Number(divContent.innerHTML);

      n++;

      if (myValue == randomValue) {
        divContent.innerHTML = `You guess number ${randomValue} with ${n} tries!`;
        gameDivs[i].style.backgroundColor = "white";
        gameDivs[i].style.color = "black";
        gameDivs[i].style.fontSize = "24px";
        // section.style.visibility = "hidden";
        clearInterval(timerId);
        refresh();
        break;
      }
      if (myValue < randomValue) {
        divContent.innerHTML = `I guess biger than ${myValue}`;
        gameDivs[i].style.backgroundColor = "#3a92fe";
        break;
      }
      if (myValue > randomValue) {
        divContent.innerHTML = `I guess less than  ${myValue}`;
        gameDivs[i].style.backgroundColor = "#1f1fad";
        break;
      }
    }

    divNumber.innerHTML = `Number of attempts: ${n}`;
  });
}

//       timer
function timer() {
  value++;
  document.querySelector("#timer").textContent = "Timer: " + value + "c";
}
/*
// Таблиця save (Поки неми хранить де , злітати буде після рестарту сторінки (треба друга сторінка для храніння даних))
function addRow(name, n, value) {
    let tr = document.createElement("tr");
    tr.insertAdjacentHTML("beforeend", `<td> ${name}</td>`);
    tr.insertAdjacentHTML("beforeend", `<td> С ${n} попытки</td>`);
    tr.insertAdjacentHTML("beforeend", `<td> За ${value} секуд прошел игру</td>`);
    gamersTable.append(tr);
}*/
