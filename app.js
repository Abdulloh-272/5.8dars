// const btn1 = document.querySelector(".btn-1");

// btn1.addEventListener("dblclick", () => {
//   alert("Welcome");
// });

const body = document.querySelector(".body");

// btn1.addEventListener("click", () => {
//   body.classList.toggle("bg-black");
//   body.classList.add("transition-colors");
// });

const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const span = document.querySelector(".span");

let spanPlus = 0;

btn1.addEventListener("click", () => {

  if (spanPlus < 10) {
span.textContent = ++spanPlus

  }
  span.classList.add("text-green-600");
  span.classList.remove("text-red-500");
});

btn2.addEventListener("click", () => {
  if (spanPlus > 0) {
  span.textContent = --spanPlus;

  }

  span.classList.add("text-red-500");
  span.classList.remove("text-green-600");
});
