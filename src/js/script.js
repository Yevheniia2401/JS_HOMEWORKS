const createTable = () => {
  const fragment = document.createDocumentFragment();
  const tableTag = document.createElement('table');
  fragment.appendChild(tableTag);
  let num = 1;
  for (let i = 1; i <= 10; i += 1) {
    const trTag = document.createElement('tr');
    for (let j = 1; j <= 10; j += 1) {
      const tdTag = document.createElement('td');
      tdTag.textContent = num;
      num += 1;
      trTag.append(tdTag);
    } tableTag.appendChild(trTag);
  }
  document.body.appendChild(fragment);
};
createTable();
