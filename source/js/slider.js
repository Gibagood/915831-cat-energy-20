const range = document.querySelector(".example__scale-input");
const before = document.querySelector(".example__image--before");
const after = document.querySelector(".example__image--after");
const beforeBtn = document.querySelector(".example__text-img--before");
const afterBtn = document.querySelector(".example__text-img--after");

const mq = window.matchMedia('(max-width: 767px)');

function isMobile() {
  const num = parseInt(range.value);
  if (mq.matches) {
    setValue(num > 50 ? 100 : 0);
  } else {
    setValue(num);
  }
}

function setValue(value) {
  before.style.width = 102.5 - value + "%";
  after.style.width = value + "%";
}

const setRangeValue = newValue =>
  function () {
    range.value = newValue;
    setValue(newValue);
  }

range.addEventListener("input", (event) => {
  setValue(event.target.value);
});

mq.addEventListener('change', isMobile);

beforeBtn.addEventListener('click', setRangeValue(0));

afterBtn.addEventListener('click', setRangeValue(100));

isMobile();
