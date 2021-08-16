# parse-hydration-data
🌲 Parse data for hydration from an rendered [Next.js](https://github.com/vercel/next.js)/[Nuxt.js](https://github.com/nuxt/nuxt.js) app - ⚡️ for web scrapers

<div class="header">
  <a href="https://github.com/vercel/next.js">
    <img src="https://assets.vercel.com/image/upload/v1607554385/repositories/next-js/next-logo.png" align="left" width="4%" />
  </a>
  <h1>Next.js</h1>
</div>

```tsx
import { parseNextData } from 'parse-hydration-data/next'

;(async () => {
  const { data: html } = await axios.get('https://nextjs.org')
  const data = parseNextData(html)
  console.log(data)

  // { props: { pageProps: {} }, page: '/', query: {}, ... }
})()
```

<div class="header">
  <a href="https://github.com/nuxt/nuxt.js">
    <img src="https://nuxtjs.org/logos/nuxt-square.svg" align="left" width="4%" />
  </a>
  <h1>Nuxt.js</h1>
</div>

```tsx
import { parseNuxtData } from 'parse-hydration-data/nuxt'

;(async () => {
  const { data: html } = await axios.get('https://conf.vuejs.org')
  const data = parseNuxtData(html)
  console.log(data)

  // { layout: 'default', data: [ {} ], error: null, serverRendered: true }
})()
```

Sometimes Nuxt.js obfuscates data in `window.__NUXT__`, so `parseNuxtData` uses [vm2](https://github.com/patriksimek/vm2) to safely execute outputs.
