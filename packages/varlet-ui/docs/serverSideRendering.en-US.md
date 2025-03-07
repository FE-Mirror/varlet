# Server side rendering

### Intro

Here is the basic way to introduce `Varlet` in `Nuxt`. You can introduce the entire `Varlet` or just a few components as needed. Let's start with how to introduce the full `Varlet`.

### Create Nuxt project

`Nuxt.js`  is a server rendering application framework based on `Vue.js`，For more details, please go [Nuxt](https://v3.nuxtjs.org/).

### Fully import

`Nuxt` will automatically read the files in your `plugins` directory and load them.
So you can create a new `varlet.ts` in the `plugins` directory and write the following:

```js
// playground-ignore
import { defineNuxtPlugin } from '#app'
import Varlet from '@varlet/ui'
import '@varlet/ui/es/style.js'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Varlet)
})
```

The above imports `Varlet` entirely. Note that CSS file needs to be imported separately.

### On demand

The on-demand import avoids the full import of components and can effectively reduce the size of the distribution package.
Each component is a `Vue plugin` and is composed of `component logic` and `style files`.
It is manually install and used as follows.

```js
// playground-ignore
import { defineNuxtPlugin } from '#app'
import { Button } from '@varlet/ui'
import '@varlet/ui/es/button/style/index.js'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Button)
})
```

For more examples, see [varlet-nuxt3-example](https://github.com/varletjs/varlet-nuxt3-example).