# Fretboard

An experimental Angular component which wraps the <a href="https://github.com/fmodica/fretboard">jQuery plugin</a>. Note that two-way databinding is currently accomplished by writing directly to your config object's properties. Refactoring is required to accomplish one-way data flow, which is more in line with the best practices of Angular (2+).

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.0.

## Demo

Check out the <a href="http://frankmodica.net/static/fretboarddemo/angular-2/dist/index.html">demo fretboard (default styles)</a>, which shows the fretboard and the config updated in real time.


## AngularJS 1 Directive

If you are using Angular 1, the fretboard is also wrapped as an <a href="https://github.com/fmodica/fretboard-angular-1">Angular 1 directive</a>.

## Setup 

```
git submodule init
git submodule update
npm install
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Extra

You can also check out my <a target="_blank" href="http://frankmodica.net/voiceleader/index">Guitar Voiceleading Helper</a>, where I use the fretboard to help users create progressions with good voice leading.
