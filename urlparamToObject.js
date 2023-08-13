function urlToObject(url) {
    return Object.fromEntries(new URL(url).searchParams)
}

console.log(urlToObject("https://example.com?foo=1&bar=2&aaa"))