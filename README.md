# sketching

> p5js projects scaffolding node cli tool

Easily create new projects in p5js. Be faster iterating ideas with the addition of hot module reloading. Release a more optimized sketch with automatic code bundling and code splitting.

## Highlights

- creates a new directory for the project.
- copies template files and installs dependencies through npm.
- provides two scripts to start using the template right away.

## Installation

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

CLI tool:

- [caporal](https://github.com/mattallty/Caporal.js?)
- [chalk](https://github.com/chalk/chalk)
- [figlet](https://github.com/patorjk/figlet.js)
- [ora](https://github.com/sindresorhus/ora)

Template:

- [p5js](https://p5js.org/)
- [parcel](https://parceljs.org/)

## Author

Emanuele Dancelli - emanueledancelli@gmail.com

## License

[MIT](https://mit-license.org/)
