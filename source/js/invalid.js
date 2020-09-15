const formButton = document.querySelector(".form__button");
const inputs = document.querySelectorAll(".validate-input");

formButton.addEventListener("click", function (evt) {
  for (let i = 0; i < inputs.length; i++) {
    if (!inputs[i].value) {
      evt.preventDefault();
      inputs[i].classList.add("validate-input--invalid");
    }
  }
});

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('click', function() {
    this.classList.remove("validate-input--invalid")
  });
}
