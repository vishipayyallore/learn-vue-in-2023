# learn-vue-in-2022

I am learning Vue from different sources (Books, Web Sites, Video Courses, etc.) in 2022

## Few Commands

```bash
npm install -g @vue/cli
npm i -g @vue/cli

vue create a1-firstclidemo
```

## Customizing the default port

### **Method 1**

```json
"scripts": {
    "serve": "vue-cli-service serve --port 8092",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  },
```

### **Method 2**

```js
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8093,
  },
});
```

## For Testing with `jest`

```bash
npm i -D jest@26.6.3 @testing-library/vue
npm i -D vue-jest@next @vue/test-utils@next
npm i -D babel-jest@26.6.3
```
