const range = document.querySelector(".example__input-range");
const before = document.querySelector(".example__cat--before");
const after = document.querySelector(".example__cat--after");

function setValue(value) {
  before.style.width = value + "%";
  after.style.width = 100 - value + "%";
}

range.addEventListener("input", (event) => {
  setValue(event.target.value);
});

setValue(range.value);
