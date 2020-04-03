# sketching

> p5js projects scaffolding node cli tool

Easily create new projects in p5js. Be faster iterating ideas with the addition of hot module reloading. Release a more optimized sketch with automatic code bundling and code splitting.

## Description

Scaffolds a new project featuring [parcel](https://parceljs.org/) and [p5js](https://p5js.org/).

- Creates a new directory for the project.
- Copies template files and installs dependencies through npm.
- Provides two scripts to start using the template right away.

## Installation

Be sure to have [node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) installed on your machine before starting.

OS X & Linux:

```shell
npm install -g sketching
```

or

```shell
npm install --global sketching
```

## Usage

```shell
sketching 1.0.0

   USAGE

     sketching new <title>

   ARGUMENTS

     <title>      The sketch title      required

   GLOBAL OPTIONS

     -h, --help         Display help
     -V, --version      Display version
     --no-color         Disable colors
     --quiet            Quiet mode - only displays warn and error messages
     -v, --verbose      Verbose mode - will also output debug messages
```

## Built with

The tool is build with [node.js](https://nodejs.org/en/) and the help of a few other libraries.

CLI tool:

- [caporal](https://github.com/mattallty/Caporal.js?)
- [chalk](https://github.com/chalk/chalk)
- [figlet](https://github.com/patorjk/figlet.js)
- [ora](https://github.com/sindresorhus/ora)

Template:

- [p5js](https://p5js.org/)
- [parcel](https://parceljs.org/)

## Credits

Emanuele Dancelli - emanueledancelli@gmail.com

## License

[MIT](https://mit-license.org/)
