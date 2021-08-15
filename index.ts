export const parseNuxtData = (html: string) => {
  const parsed = html
    .split('<script>window.__NUXT__=')[1]
    .split('</script>')[0]
  return eval(parsed)
}

export const parseNextData = (html: string) => {
  const parsed = html
    .split('<script id="__NEXT_DATA__" type="application/json">')[1]
    .split('</script>')[0]
  return JSON.parse(parsed)
}
