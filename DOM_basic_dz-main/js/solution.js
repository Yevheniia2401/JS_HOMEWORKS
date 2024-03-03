const element = document.getElementsByTagName('li');
console.log(element.length);
const arr = [];
(function () {
  for (const node of element) {
    const listItem = node.textContent;
    arr.push(listItem);
  }
  console.log(arr);
}());
