export default class Form {
  constructor(param) {
    this.name = param.name;
    this.phone = param.phone;
  }

  nameValidation() {
    this.name.addEventListener('input', (e) => {
      const inputValue = e.target.value;
      const newValue = inputValue.replace(/[^A-Za-zА-Яа-яЁё\s]/g, '');
      e.target.value = newValue;
    });
  }

  phoneValidation() {
    this.phone.addEventListener('input', (e) => {
      const inputValue = e.target.value;
      const newValue = inputValue.replace(/[^0-9]/g, '');
      e.target.value = newValue;
    });
  }
}
