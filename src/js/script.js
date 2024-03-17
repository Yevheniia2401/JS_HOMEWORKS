(function () {
  const userInput = document.querySelector('[data-user-input]');
  const addBtn = document.querySelector('[data-add-btn]');
  const saveBtn = document.querySelector('[data-save-btn]');
  const allOptions = [];
  const createInput = () => {
    const newOption = document.createElement('input');
    newOption.className = 'input';
    addBtn.after(newOption);
    allOptions.push(newOption);
  };
  addBtn.addEventListener('click', (createInput));

  saveBtn.addEventListener('click', () => {
    const allFieldsFilled = allOptions.every((option) => option.value !== '');
    if (allOptions.length < 2) {
      alert('Недостатньо варіантів');
    }
    if (userInput.value === '' || !allFieldsFilled) {
      alert('Заповніть усі поля');
    } else {
      const result = allOptions.map((option) => option.value);
      saveBtn.after(`${userInput.value} ${result}`);
    }
  });
}());
