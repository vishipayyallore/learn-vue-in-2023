# learn-vue-in-2022

I am learning Vue from different sources (Books, Web Sites, Video Courses, etc.) in 2022

## Customizing the default port

**Method 1**

```
"scripts": {
    "serve": "vue-cli-service serve --port 8092",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  },
```

**Method 2**

```
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8093
  }
})

```

## For Testing with `jest`

```
npm i -D jest@26.6.3 @testing-library/vue
npm i -D vue-jest@next @vue/test-utils@next
npm i -D babel-jest@26.6.3
```
