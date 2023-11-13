# Code for America USWDS theme starter

The Code for America USWDS theme is most easily managed using [NPM](https://www.npmjs.com/) (Node Package Manager). This method lets you compile the theme with your application’s CSS, JavaScript, SVGs, and other images. It also maintains a dependency link with the theme source to receive updates. Installing Node.js will install NPM at the same time. We recommend using [Node Version Manager (NVM)](https://github.com/nvm-sh/nvm), but you may also install [Node.js](https://nodejs.org/) directly.

This is a minimal template repository for a Node.js front-end development environment to manage the [Code for America USWDS theme](https://github.com/codeforamerica/uswds). It uses NPM scripts to call the same build scripts and plugins used by the theme to generate the necessary static assets from Dart Sass, ES JavaScript, fonts, and image files for the theme to work properly.

## Usage

**Quick start**. Create a copy of this repository (clone or download) in your project then run `npm install`.

Or, create your own project using the following steps. If you do not have a package.json file in your project yet, run the `init` command. This will walk you through the steps of creating a package.json file.

```bash
npm init
```

Once complete, run the installation command to add the theme to your project.

```bash
npm install @codeforamerica/uswds
```

This will add the theme package to the `node_modules` directory of your project.

Next. Create the following directories and files in your project:

* [package.json](package.json), copy the file.
* [entrypoints.js](entrypoints.js), copy the file.
* [src/scss/_styles.scss](src/scss/_styles.scss), create the directory and copy the file.
* [src/js/index.js](src/js/index.js), create the directory and copy the file.
* [dist/assets/css](dist/assets/css), just create the directory.
* [dist/assets/js](dist/assets/js), just create the directory.

Now you can run the following NPM scripts.

## NPM Scripts

The [package.json](package.json) `scripts` block contains the NPM scripts that can be run to compile the theme.

```bash
npm run styles
```

Compiles Sass from configured `.scss` entry points using Dart Sass then runs them through selected PostCSS plugins. Output is distributed to the `dist/assets/css` directory.

```bash
npm run scripts
```

Concatenates ES JavaScript from configured `.js` entry points using Rollup.js then runs them through selected Rollup.js plugins. Output is distributed to the `dist/assets/js` directory.

```bash
npm run copy
```

Copies static font and image files to the `dist/assets/fonts` and `dist/assets/img` directories, respectively.

```bash
npm run default
```

Runs the `styles` and `scripts` commands respectively. This script prepends those commands with `NODE_ENV=production` to create production-ready assets. This means `console.log` statements and source maps are removed.

## Entry points

Configuration for the main entry points can be found in the [entrypoints.js](entrypoints.js) file. This is where the file source and distribution paths are defined and what optimizations are run on them (using Rollup.js or PostCSS plugins based on the file type).

**Styles**

The sample [src/scss/_styles.scss](src/scss/_styles.scss) contains the basic `@forward` statements needed for Sass to compile the theme and hints on how to configure it.

**Scripts**

The sample [src/js/index.js](src/js/index.js) contains the basic `import` statements needed for Rollup.js to find the package JavaScript and concatenate it into one file.

## Linking

Once you have chosen what assets and where they need to be compiled, add them as links in your HTML or project templates. The stylesheet can be added to the `<head>` tag. Below are the default path references.

```html
<link rel="stylesheet" href="dist/assets/css/styles.css">
```

The JavaScript can be added just before the closing `</body>` tag.

``````html
<script src="dist/assets/js/default.js"></script>
``````

## Generating USWDS assets without the Code for America theme

The following forward statements in the [Sass entry point](src/scss/_styles.scss) generate the Code for America USWDS theme.

```scss
@forward 'cfa-uswds';
@forward 'uswds';
@forward 'cfa';
```

To generate a generic USWDS stylesheet without the theme only the following line is needed.

```scss
@forward 'uswds';
```

Similarly, for the [JavaScript entry point](src/js/index.js), only the import statements and instantiation lines for USWDS components are needed. They follow the pattern

```javascript
// Accordion component import
import accordion from '@uswds/uswds/js/usa-accordion';

// Accordion component instantiation
accordion.on(document.body);
```

## Directory structure

After following the steps above to install the theme in your project using `npm install`, these resources* will be available in the `node_modules/@codeforamerica/uswds/` folder.

```
– 📂 dist
  ├ 📂 assets           —  All static assets needed for the theme are distributed here including CSS, JavaScript, SVGs, images, and font files.
    ├ 📂 css
      └ 📄 styles.css   —  Main distribution for CSS compiled from the src/scss/_styles.scss.
    ├ 📁 fonts          —  Supported font files for the USWDS. These are needed if you are using any fonts other than the system default.
    ├ 📁 img            —  SVG icons and image files referenced by the dist/assets/css/styles.css file are stored here.
    └ 📁 js
      └ 📄 default.js   —  Main distribution for JavaScript compiled from the src/js/index.js.
├ 📂 src                 —  Folder for source files such as Dart Sass and JavaScript ES modules.
  ├ 📂 scss
    └ 📄 _styles.scss    —  Main entry point for Dart Sass where the USWDS and CfA theme packages are imported and configured.
  └ 📂 js
    └ 📄 index.js        —  Main entry point for ES JavaScript where the USWDS and CfA packages are imported and configured.
├ 📁 packages            —  Folder for CfA theme components, including USWDS component stylesheets and templates for Thymeleaf and ERB.
  ├ 📂 cfa-uswds-theme
    └ 📄 _index.scss     —  The main CfA theme settings for the USWDS.
  ├ 📂 cfa-uswds
    └ 📄 _index.scss     —  This file actively extends the USWDS core settings with the CfA settings.
  ├ 📂 cfa-core
    └ 📄 _index.scss     —  Stores CfA package settings that aren’t supported by the USWDS but are used by CfA packages.
  └ 📂 cfa
    └ 📄 _index.scss     —  Imports all of the CfA theme component packages.
├ 📄 config.js           —  Configuration for the theme, including base path definitions for static and source files.
├ 📄 entrypoints.js      —  Defines the configuration for Dart Sass and ES JavaScript modules and their distribution.
├ 📄 styles.js           —  Node.js script for generating CSS from Dart Sass using Sass and PostCSS.
└ 📄 scripts.js          —  Node.js script for bundling JavaScript ES modules using Rollup.js.
```

<small>*There are additional files in the theme package, mainly used for configuring the static documentation site, not documented here.</small>