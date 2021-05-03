const emailValue = document.querySelector("#email");
const btnSubmit = document.querySelector("#btnSubmit");
const errorLabel = document.querySelector(".error");
const errorMobile = document.querySelector(".error-mobile");
const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

btnSubmit.addEventListener("click", () => {
  if (emailValue.value.match(validRegex)) {
    errorLabel.innerText = "Valid Email Address";
    errorLabel.style.color = "green";
    emailValue.style.border = "1px solid hsla(97, 100%, 50%, 1)";
  } else {
    errorLabel.innerText = "Please provide a valid email address";
    errorLabel.style.color = "hsl(354, 100%, 66%)";
    emailValue.style.border = "1px solid hsl(354, 100%, 66%)";
  }
});
