(function () {
  const form = document.querySelector('[data-form]');
  const button = document.querySelector('[data-btn]');
  const inputs = document.querySelectorAll('input');
  const result = document.createElement('span');
  button.addEventListener('click', () => {
    for (let i = 0; i < inputs.length; i += 1) {
      if (inputs[i].value === '') {
        result.textContent = 'Будь ласка, заповніть усі поля';
        form.append(result);
        return;
      }
    } result.textContent = 'Реєстрація успішна';
    form.append(result);
  });
}());
