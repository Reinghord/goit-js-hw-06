const { button, form } = {
  button: document.querySelector('[type="submit"]'),
  form: document.querySelector(".login-form"),
  //   email: document.querySelector('[type="email"]'),
  //   password: document.querySelector('[type="password"]'),
};
const values = {};
const email = form.elements.email;
const password = form.elements.password;

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  if (Number(email.value) === 0 || Number(password.value) === 0) {
    alert("Все поля должны быть заполнены!");
  }

  values.email = email.value;
  values.password = password.value;

  //   const formData = new FormData(event.currentTarget);
  //   formData.forEach((value, name) => {
  //     values[name] = value;
  //   });

  console.log(values);

  form.reset();
}
