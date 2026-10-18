const concernForm = document.querySelector("#concern-form");
const formMessage = document.querySelector("#form-message");

concernForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formMessage.hidden = true;
  formMessage.classList.remove("error");

  const requiredFields = [...concernForm.querySelectorAll("[required]")];
  const firstInvalidField = requiredFields.find((field) => {
    if (field.type === "text" || field.tagName === "TEXTAREA") {
      return field.value.trim() === "";
    }

    return !field.value;
  });

  if (firstInvalidField) {
    firstInvalidField.setCustomValidity("Please complete this required field.");
    firstInvalidField.reportValidity();
    firstInvalidField.addEventListener("input", () => firstInvalidField.setCustomValidity(""), { once: true });
    firstInvalidField.addEventListener("change", () => firstInvalidField.setCustomValidity(""), { once: true });
    return;
  }

  formMessage.textContent = "Thank you. This sample form is complete, but your concern has not been sent to or saved by a barangay office.";
  formMessage.hidden = false;
  formMessage.focus();
});