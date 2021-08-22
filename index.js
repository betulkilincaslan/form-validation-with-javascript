const form1 = document.querySelector("#form1");

// Handling form submission
form1.addEventListener("submit", function (e) {
  e.preventDefault();
  [...this.elements].forEach((item) => {
    formELementValidation(item);
  });
});

// Checking validity and adding validation message
const formELementValidation = (item) => {
  if (!item.checkValidity()) {
    if (item.nextElementSibling?.className !== "error") {
      const error = document.createElement("small");
      error.classList.add("error");
      error.innerText = item.validationMessage;
      item.insertAdjacentElement("afterend", error);
    } else {
      item.nextElementSibling.innerText = item.validationMessage;
    }
  } else {
    if (item.nextElementSibling?.className === "error") {
      item.nextElementSibling.remove();
    }
  }
};

// Adding eventListener for form elements and calling formELementValidation() function with this events
[...form1.elements].forEach((item) => {
  ["change", "keyup"].forEach((method) => {
    item.addEventListener(method, () => {
      formELementValidation(item);
    });
  });
});
