const ulList = document.getElementById('ulId');
const attribute = ulList.getAttributeNames();
const attributeValue = [];
const attributeName = [];
for (const elem of attribute) {
  const value = ulList.getAttribute(elem);
  attributeValue.push(value);
  attributeName.push(elem);
}
console.log(attributeValue, attributeName);

ulList.lastElementChild.textContent = 'Hello, my name is Jane';
ulList.firstElementChild.setAttribute('data-my-name', 'Jane');
ulList.removeAttribute('data-dog-tail');
