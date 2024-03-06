(function () {
  const userInput = document.body.querySelector('[data-input]');
  const inputBtn = document.body.querySelector('[data-check-btn]');
  const emptyBlock = document.body.querySelector('[data-block]');
  inputBtn.addEventListener('click', () => {
    const newSpan = document.createElement('span');
    newSpan.textContent = userInput.value;
    emptyBlock.prepend(newSpan);
    userInput.value = '';
  });
}());
