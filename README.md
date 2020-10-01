# vue-plugin-test

## Project setup

To use vue-library in your project, you have to do the following steps:
- Inside package.json as dependencs: ``"vue-library": "git+https://github.com/oforge/vue-library.git"``
- Load Plugin inside `src/main.ts`: `import spkStyleguidePlugin from "vue-library";` and use spkStyleguidePlugin as a Vue Plugin
- Load Styles inside `src/App.vue`: `@import "~vue-library/src/styles/main"`
- Create a vue.config.json with the following content:
    ```js 
     /*
      In this file you have the possibility to alter the webpack behaviour. In our case we want to create special sass files,
      like variables or mixins, that are used globally. Therefore we extended the project with the sass-loader npm module.
      This module lets us load scss files globally before all the other files.
      In this example we load the variables and mixins.
      It is important, that only files that don't generate css should be used here. Otherwise the generated css would be
      injected multiple times.
     */
    module.exports = {
      css: {
        loaderOptions: {
          scss: {
            /*
              Important: When we refactor the css files and change the folder structure, we have to keep in mind that we have to
              change the injection here as well.
             */
            prependData: '@import "~vue-library/src/styles/abstracts/_style.scss";'
          }
        }
      }
    };
Thats all, folks.
