const contactForm = document.querySelector(".contact-us");
const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const inputSubject = document.getElementById("subject");
const inputMessage = document.getElementById("message");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const subjectError = document.getElementById("subjectError");
const messageError = document.getElementById("messageError");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const errorMessages = document.querySelectorAll(".form__error");
  errorMessages.forEach((el) => (el.style.display = "none"));
  const emailRegex = /(.+)@(.+){2,}.(.+){2,}/;

  if (inputName.value.length < 5) {
    nameError.style.display = "block";
    return;
  }
  if (!emailRegex.test(inputEmail.value)) {
    emailError.style.display = "block";
    return;
  }
  if (inputSubject.value.length < 15) {
    subjectError.style.display = "block";
    return;
  }
  if (inputMessage.value.length < 25) {
    messageError.style.display = "block";
    return;
  }

  contactForm.insertAdjacentHTML(
    "afterbegin",
    "<h3 class='success'>Message sent successfully.</h3>"
  );
});
