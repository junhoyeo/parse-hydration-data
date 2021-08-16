import { VM } from 'vm2';

export const parseNuxtData = (html: string) => {
  const parsed = html
    .split('<script>window.__NUXT__=')[1]
    .split('</script>')[0]
  return new VM().run(parsed)
}
