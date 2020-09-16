const formButton = document.querySelector(".form__button");
const inputs = document.querySelectorAll(".validate-input");
const images = document.querySelectorAll(".validate-image");

formButton.addEventListener("click", function (evt) {
  for (let i = 0; i < inputs.length; i++) {
    if (!inputs[i].value) {
      evt.preventDefault();
      inputs[i].classList.add("validate-input--invalid");
    }
  }

  for (let j = 0; j < images.length; j++) {
    if (!images[j].value) {
      evt.preventDefault();
      images[j].classList.add("validate-image--invalid");
    }
  }
});

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('click', function() {
    this.classList.remove("validate-input--invalid")
  });
}

for (let j = 0; j < images.length; j++) {
  images[j].addEventListener('click', function() {
    this.classList.remove("validate-images--invalid")
  });
}
