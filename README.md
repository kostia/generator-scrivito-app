# Yeoman generator for bare bone Scrivito apps

* Scrivito: https://scrivito.com
* Yeoman: http://yeoman.io/

## Usage

1. Clone this repo to your local machine.
1. Link the generator by running `npm link` from inside the cloned repo.
1. Call the generator:
```bash
yo scrivito-app # You will need your tenant ID
```

## Project structure

```
+ src // JavaScript source files
  - index.html // Main entry point, which loads all necessary scripts

  + models
    + objs // Obj models created using `Scrivito.createObjClass`
      - Homepage.js
      - ...

    + widgets // Widget models created using `Scrivito.createWidgetClass`
      - TextWidget.js
      - ...

  + components // React components
    - App.js // Main application component

    + objs // Components for obj models (pages, images etc.)
      - Homepage.js
      - ...

    + widgets // Components for widget models
      - TextWidget.js
      - ...


  + config
    - Scrivito.js // Main Scrivito configuration

    + objs // Editing configuration for obj models
      - Homepage.js
      - ...

    + widget // Editing configuration for widget models
      - TextWidget.js
      - ...

  + extensions // Custom extensions of the Scrivito UI
    - MyTab.js
    - MyEditor.js
    - ...

+ public // Static HTML files
  - index.html // HTML file, in which the main application component will be mounted
  - _scrivito_extensions.html // HTML file containing custom extensions of the Scrivito UI
```
