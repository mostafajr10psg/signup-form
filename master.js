let fName = document.querySelector(`input[name="f-name"]`);
let lName = document.querySelector(`input[name="l-name"]`);
let mail = document.querySelector(`input[name="mail"]`);
let mailMsg = document.querySelector(`form div .mail-msg`);
let password = document.querySelector(`input[name="password"]`);
let passwordTerms = document.querySelector(`form div .password-terms`);
let allInputsFields = document.querySelectorAll(`input:not([type="submit"])`);

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

let fNameValid = false,
  lNameValid = false,
  mailValid = false,
  passwordValid = false;

document.forms[0].onsubmit = (e) => {
  allInputsFields.forEach((input) => {
    input.value === "" ? showError(input) : hiddenError(input);

    fName.value !== "" ? (fNameValid = true) : "";
    lName.value !== "" ? (lNameValid = true) : "";

    input.onblur = () => {
      input.value !== "" ? hiddenError(input) : "";
    };
  });

  if (/\w+@\w+\.\w+/.test(mail.value)) {
    mailValid = true;
  } else if (mail.value !== "" && /\w+@\w+\.\w+/.test(mail.value) === false) {
    showError(mail);
    mailMsg.textContent = "Looks like this is not an email";
  }

  if (password.value.length >= 6) {
    passwordTerms.classList.add("hidden");
    passwordValid = true;
  } else if (password.value !== "" && password.value.length < 6) {
    passwordTerms.classList.remove("hidden");
  }

  if (
    fNameValid === false ||
    lNameValid === false ||
    mailValid === false ||
    passwordValid === false
  ) {
    e.preventDefault();
  }
};
