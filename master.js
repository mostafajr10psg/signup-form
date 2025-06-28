let fName = document.querySelector(`input[name="f-name"]`);
let lName = document.querySelector(`input[name="l-name"]`);
let mail = document.querySelector(`input[name="mail"]`);
let password = document.querySelector(`input[name="password"]`);
let passwordTerms = document.querySelector(`form div .password-terms`);
let submit = document.querySelector(`input[type="submit"]`);
let allInputsFields = document.querySelectorAll(`input:not([type="submit"])`);
let iconAndDescErrors = document.querySelectorAll(".error");

function showError(input) {
  input.classList.add("hidden-placeholder");
  input.classList.add("border-error");
  for (let child of input.parentElement.children) {
    child.classList.contains("error") ? child.classList.remove("hidden") : "";
  }
}

function hiddenError(input) {
  input.classList.remove("border-error");
  for (let child of input.parentElement.children) {
    child.classList.contains("error") ? child.classList.add("hidden") : "";
  }
}

document.forms[0].onsubmit = (e) => {
  e.preventDefault();

  allInputsFields.forEach((input) => {
    input.value === "" ? showError(input) : hiddenError(input);
  });

  if (mail.value !== "" && !/\w+@\w+\.\w+/.test(mail.value)) {
    showError(mail);
    mail.nextElementSibling.nextElementSibling.textContent =
      "Looks like this is not an email";
  }

  password.value !== "" && password.value.length < 6
    ? passwordTerms.classList.remove("hidden")
    : passwordTerms.classList.add("hidden");

  allInputsFields.forEach((input) => {
    input.onblur = () => {
      input.value.length > 0 ? hiddenError(input) : "";
    };
  });
};
