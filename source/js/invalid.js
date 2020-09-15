let formButton = document.querySelector (".form__button");
let input = document.querySelector (".cat-data__input");

formButton.addEventListener("submit", function (evt) {
  if (!input.value) {
        evt.preventDefault();
        feedbackForm.classList.add("invalid");
      }
})
