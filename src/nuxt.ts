export const parseNuxtData = (html: string) => {
  const parsed = html
    .split('<script>window.__NUXT__=')[1]
    .split('</script>')[0]
  return eval(parsed)
}
