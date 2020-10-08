# spk-vue-library

## Project setup

To use the vue-library in your project, you have to do the following steps:
- Inside `package.json`, import spk-vue-library as a dependency: ``"spk-vue-library": "git+https://github.com/oforge/spk-vue-library.git"``
- `npm install` or npm `install spk-vue-library`
- Load the Plugin inside `src/main.ts`: `import { spkVueLibrary } from 'spk-vue-library';` 
- Use `spkVueLibrary` as a Vue Plugin inside `src/main.ts`: `Vue.use(spkVueLibrary);`
- Load Styles inside `src/App.vue`: `@import '~spk-vue-library/src/styles/main';`
- Create a `vue.config.js` file inside the root folder with the following content:
    ```js 
    module.exports = {
      css: {
        loaderOptions: {
          scss: {
            prependData: '@import "~spk-vue-library/src/styles/abstracts/_style.scss";'
          }
        }
      }
    };
To make use of the Plugin's store Modules, you have to import and use them inside your App's Vuex store.
- Inside the `./src/store/index.ts` file you import the Plugin Modules: `@import { spkModules } from 'spk-vue-library';`
- Then inside your store object, add the modules to your store:
    ```js
    ...
    modules: {
      ...spkModules
    }
