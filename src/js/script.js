const isJsonString = (str) => {
  try {
    JSON.parse(str);
  } catch (error) {
    return 'Invalid JSON string';
  } return JSON.parse(str);
};
console.log(isJsonString('{"name": "John", "age": 30}'));
console.log(isJsonString('{"name": "John", "age":'));
