(function () {
  const userForm = document.querySelector('#form');
  const resultForm = document.querySelector('[data-result-form]');
  const dataKey = 'userData';
  userForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const userInputs = event.target.querySelectorAll('input, select, textarea');
    const userData = Array.from(userInputs).reduce((acc, item) => {
      acc[item.name] = item.value;
      return acc;
    }, {});
    localStorage.setItem(dataKey, JSON.stringify(userData));
  });
  document.addEventListener('DOMContentLoaded', () => {
    const getData = JSON.parse(localStorage.getItem(dataKey));
    if (!getData) return;
    const ul = document.createElement('ul');
    for (const key in getData) {
      const li = document.createElement('li');
      li.innerHTML = `<b>${key}:</b> <i>${getData[key]}</i>`;
      ul.append(li);
    }
    resultForm.append(ul);
  });
}());
