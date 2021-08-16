# parse-hydration-data
[![NPM version](https://badgen.net/npm/v/parse-hydration-data)](https://www.npmjs.com/package/parse-hydration-data)

🌲 Parse data for hydration from an rendered [Next.js](https://github.com/vercel/next.js)/[Nuxt.js](https://github.com/nuxt/nuxt.js) app - ⚡️ for web scrapers

```bash
npm install parse-hydration-data
# Or with Yarn
yarn add parse-hydration-data
```

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

```bash
npm install vm2
# Or with vm2
yarn add vm2
```

Sometimes Nuxt.js obfuscates data in `window.__NUXT__`, so `parseNuxtData` uses [vm2](https://github.com/patriksimek/vm2) to safely execute outputs. This is an optional peer dependency, which means you only have to install when using this module with Nuxt.js apps.

```tsx
import { parseNuxtData } from 'parse-hydration-data/nuxt'

;(async () => {
  const { data: html } = await axios.get('https://conf.vuejs.org')
  const data = parseNuxtData(html)
  console.log(data)

  // { layout: 'default', data: [ {} ], error: null, serverRendered: true }
})()
```
