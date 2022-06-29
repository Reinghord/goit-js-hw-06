const { input } = {
  input: document.querySelector("#validation-input"),
};

input.addEventListener("blur", () => {
  if (input.value.length === Number(input.getAttribute("data-length"))) {
    input.classList.add("valid");
  }
  input.classList.add("invalid");
});
