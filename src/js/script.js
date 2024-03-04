const generateList = (arr) => {
  const ulList = document.createElement('ul');
  for (let i = 0; i < arr.length; i += 1) {
    if (!Array.isArray(arr[i])) {
      const liElem = document.createElement('li');
      liElem.textContent = arr[i];
      ulList.appendChild(liElem);
    } else {
      const newList = generateList(arr[i]);
      ulList.appendChild(newList);
    }
  }
  return ulList;
};
console.log(generateList([1, 2, 3]));
console.log(generateList([1, [1.1, 1.2, 1.3], 2, 3]));
