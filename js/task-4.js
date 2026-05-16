const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
  event.preventDefault();

  if (
    form.elements.email.value.trim() !== '' &&
    form.elements.password.value.trim() !== ''
  ) {
    const formData = {
      [form.elements.email.name]: form.elements.email.value.trim(),
      [form.elements.password.name]: form.elements.password.value.trim(),
    };
    console.log(formData);
    form.reset();
  } else {
    alert('All form fields must be filled in');
  }
});
