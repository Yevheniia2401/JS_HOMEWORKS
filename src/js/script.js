const updateQueryString = function (url, key, value) {
  const newUrl = new URL(url);
  // newUrl.searchParams.append(key, value);//
  newUrl.searchParams.set(key, value);
  return newUrl;
};
const result = updateQueryString('https://example.com/search?q=query&sort=ascending&page=2', 'bob', '35');
console.log(result);
