const read = document.getElementById("read");
const pastille = document.querySelectorAll("span i");
const content = document.querySelectorAll(".active");
const number = document.getElementById("number");
const title = document.querySelectorAll("h2");

read.addEventListener("click", () => {
  pastille.forEach((dot) => (dot.style.opacity = 0));

  content.forEach((boxes) => boxes.classList.add("readnotif"));

  number.textContent = 0;
});
