function hasError(field) {
  const validity = field.validity;

  if (validity.valid) return;

  if (validity.valueMissing) return "Campo obrigatório.";

  if (validity.typeMismatch) return "formato de email incorreto.";

  if (validity.patternMismatch) return "formato incorreto.";

  if (validity.tooShort) {
    const min = field.getAttribute("minLength");
    const numbersOfCharactersEntered = field.value.length;

    return `O mínimo de caracteres são . acrescente mais ${
      min - numbersOfCharactersEntered
    } caracteres`;
  }

  if (validity.patternMismatch) return "Formato não correspondente.";
}

function showError(field, error) {
  field.classList.add("error");

  const id = field.id;

  if (!id) return;

  let message = field.form.querySelector(".error-message#error-for-" + id);

  if (!message) {
    message = document.createElement("div");
    message.className = "error-message";
    message.id = "error-for-" + id;
    field.parentNode.insertBefore(message, field.nextSibling);
  }

  message.innerHTML = error;

  message.style.display = "block";
}

function removeError(field) {
  field.classList.remove("error");

  const id = field.id;
  if (!id) return;

  var message = field.form.querySelector(".error-message#error-for-" + id + "");
  if (!message) return;

  message.innerHTML = "";
  message.style.display = "none";
}

function touchedField(event) {
  const error = hasError(event.target);

  if (error) {
    showError(event.target, error);
    return;
  }

  removeError(event.target);
}

function handleError(event, fields) {
  if (!event.target.classList.contains("btn")) return;

  let error;
  let hasErrors;

  for (let i = 0; i < fields.length; i++) {
    error = hasError(fields[i]);
    if (error) {
      showError(fields[i], error);
      if (!hasErrors) {
        hasErrors = fields[i];
      }
    }
  }

  event.preventDefault();
  if (hasErrors) {
    event.preventDefault();
    hasErrors.focus();

    return true;
  } else return false;
}
export { touchedField, handleError };
