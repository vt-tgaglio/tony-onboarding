const btn = document.querySelector("#launch-btn");
const code = document.querySelector(".code");
const counter = document.querySelector(".count");

function init() {
  btn.addEventListener("click", launchDemo);
  console.log("launch.js connected");
}
function launchDemo() {
  codeFlash();
  document.querySelector("#layer-5").classList.remove("hide");
  btn.classList.add("alert-btn");
  btn.querySelector("span").innerText = "Preparing for launch!";
  let codeFlashInterval = setInterval(() => {
    codeFlash();
  }, 500);
  let count = 3;
  counter.innerText = count;
  let countdown = setInterval(() => {
    count--;
    counter.innerText = count;
    if (count === 0) {
      clearInterval(countdown);
      clearInterval(codeFlashInterval);
      window.location.href = "http://localhost:3000";
    }
  }, 1000);
}

function codeFlash() {
  code.innerHTML = `
  <span>${uuid()}</span>
  <span>${uuid()}</span>
  <span>${uuid()}</span>
  <span>${uuid()}</span>
  <span>${uuid()}</span>
  <span>${uuid()}</span>
  <span>${uuid()}</span>
  <span>${uuid()}</span>
  <span>${uuid()}</span>
  <span>${uuid()}</span>
  <span>${uuid()}</span>
  <span>${uuid()}</span>
  <span>${uuid()}</span>
  <span>${uuid()}</span>
  <span>${uuid()}</span>
  <span>${uuid()}</span>
  <span>${uuid()}</span>
  <span>${uuid()}</span>
  <span>${uuid()}</span>
  <span>${uuid()}</span>
  <span>${uuid()}</span>
  <span>${uuid()}</span>
  <span>${uuid()}</span>
  <span>${uuid()}</span>
  <span>${uuid()}</span>
  <span>${uuid()}</span>
  <span>${uuid()}</span>
  <span>${uuid()}</span>
  `;
}

function uuid() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}

init();
