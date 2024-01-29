const parseUrl = function newFunc(url) {
  const newUrl = new URL(url);
  return {
    href: newUrl.href,
    protocol: newUrl.protocol,
    host: newUrl.host,
    hostname: newUrl.hostname,
    pathname: newUrl.pathname,
    search: newUrl.search,
    hash: newUrl.hash,
    origin: newUrl.origin,
  };
};
console.log(parseUrl('https://example.com:8080/path/name?query=123#hash'));
