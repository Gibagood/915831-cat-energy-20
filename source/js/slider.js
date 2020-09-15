const range = document.querySelector(".example__scale-input");
const before = document.querySelector(".example__image--before");
const after = document.querySelector(".example__image--after");

function setValue(value) {
  before.style.width = value + "%";
  after.style.width = 102.5 - value + "%";
}

range.addEventListener("input", (event) => {
  setValue(event.target.value);
});

setValue(range.value);
