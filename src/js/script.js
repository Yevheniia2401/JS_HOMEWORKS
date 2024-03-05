(function () {
  const inputBtn = document.body.querySelector('[data-check-btn]');
  const userInput = document.body.querySelector('[data-input]');
  inputBtn.onclick = () => {
    const result = userInput.value;
    if (isNaN(result)) {
      alert('Введіть число');
      return;
    }
    if (result % 2 === 0) {
      alert('Парне');
    } else alert('Непарне');
  };
}());
