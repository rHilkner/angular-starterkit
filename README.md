# Angular StarterKit

This is a basic StarterKit for an Angular project. You can clone this repo and will be ready for development. The motivation for making this is because after setting up many Angular projects I realized all of them had a similar folder structure and imports, so for the next projects I can just clone this repo and everything will be set up the way I personally like.

## Configs
0. This project was generated with [Angular CLI](https://github.com/angular/angular-cli) "~7.3.6" using Sass and with basic routing configured
1. Angular Material "^7.3.5"
2. Angular Flex-Layout "^7.0.0-beta.24"
3. Pug Loader "^2.4.0" - for using .pug instead of .html
4. HammerJS "^2.0.8" - for mobile gestures

## Folder structure
1. src/assets folder: subdivided between /css and /img folders.
    - src/assets/css folder has: 0-tools/normalize.scss for normalizing the project between browsers and 0-tools/reset.scss for removing all the default styles from html; 1-base/base.sass for basic html and body styles, 1-base/material.sass for customizing Material Design components (Angular Material), 1-base/theme.sass for customizing Angular Material basic theme, 1-base/typography.sass for defining basic typography (h1, h2, ..., hr, etc).
    - /img folder has: the favicon.ico and should have all images that will be included in the project (may be subdivided into subfolders also, depending on the project necessity).
2. The src/app folder already has some basic empty pages, components, modules, routes and services with the identifiers .page, .component, .module, .routes, .service. Every .page and .route are @NgModules (as well as .modules), but the identifiers are used to find these files easier when developing.
    - This folder has the subfolders /pages that have the pages (with components, modules, services, etc) of the web applications and /shared that keeps modules and components shared between many pages.

## What the developer must change to begin development
1. src/assets/css/0-tools/color-palette.scss: The color palette that will theme the app (colors: primary, accent, warn, foreground, background)
2. src/assets/css/1-base/typography.sass: The typography of your app (font-family, font-sizes, font-colors, underlines, hr border, italics, bolds, etc)
3. src/assets/img: Include images and favicon of the app
4. src/app/app.routes.ts: Routing
5. src/app/pages/home/components: Create|include|change components that will be needed in the home.page

## Possible next updates
- Add Firebase module/service for basic Firebase operations

## How to import this project
1. Import the project: `git clone https://github.com/rHilkner/angular-starterkit.git`
2. Go to the project folder: `cd angular-starterkit`
3. Delete node_modules folder inside angular-project: `rm -rf node_modules`
4. Reinstall modules: `npm install`
5. Start the application: `ng serve` or `npm start`
6. Open the website at the URL: `http://localhost:4200/`

# Default README.md from Angular

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
