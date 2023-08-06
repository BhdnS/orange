import Form from './Form';

const formData = new Form({
  name: document.querySelector('#name'),
  phone: document.querySelector('#phone'),
});

formData.nameValidation();
formData.phoneValidation();
