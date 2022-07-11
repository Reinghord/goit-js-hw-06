const { input } = {
  input: document.querySelector("#validation-input"),
};

function onInputBlur(add, remove) {
  input.classList.add(add);
  input.classList.remove(remove);
}

input.addEventListener("blur", () => {
  if (input.value.length === Number(input.getAttribute("data-length"))) {
    onInputBlur("valid", "invalid");
  } else {
    onInputBlur("invalid", "valid");
  }
});
