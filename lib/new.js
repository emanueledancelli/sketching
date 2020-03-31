"use strict";

const exec = require("child_process").exec;
const ora = require("ora");
const chalk = require("chalk");

function os_func() {
  this.execCommand = function(cmd) {
    return new Promise((resolve, reject) => {
      exec(cmd, (error, stdout, stderr) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(stdout);
      });
    });
  };
}

module.exports = args => {
  const title = args.title;
  const path = `${__dirname}/../templates/default`;

  console.log(
    chalk.blue(`
  Sketching - v 0.1.1 - Emanuele Dancelli - https://github.com/emanueledancelli/sketching
    `)
  );

  const spinner = ora(
    `Creating your new sketchboard ~ ${title} ~ creating directories`
  ).start();

  var os = new os_func();

  os.execCommand(`mkdir ${title}`)
    .then(() => {
      spinner.text = `Creating your new sketchboard ~ ${title} ~ Copying template files`;
      os.execCommand(`cp -R ${path}/* ${title}`).then(() => {
        spinner.text = `Creating your new sketchboard ~ ${title} ~ Downloading and installing dependencies (speed depends on connection quality)`;
        os.execCommand(`cd ${title} && npm install`).then(() => {
          spinner.succeed(chalk.green("All done, your sketchboard is ready!"));
          console.log(`  
  There are two scripts to run inside the folder:
          `);
          console.log(
            "  npm run start - starts the server on localhost:1234 with HTR"
          );
          console.log(
            "  npm run build - creates an optimized version of the sketch in /dist folder"
          );
          console.log(`
  Happy drawing!
            `);
        });
      });
    })
    .catch(err => {
      console.log("There was an error", err);
    });
};
