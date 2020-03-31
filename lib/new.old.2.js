//----------------------------------------------------------
// Modules
//----------------------------------------------------------
// NPM
const prompt = require("prompt");
const shell = require("shelljs");
const fs = require("fs");
const colors = require("colors/safe");
const chalk = require("chalk");
const figlet = require("figlet");
const clear = require("clear");
const boxen = require("boxen");
const { execSync } = require("child_process");
const Multispinner = require("multispinner");

module.exports = args => {
  const title = args.title;
  const path = `${__dirname}/../templates/default`;
  const spinners = [
    "Creating directories",
    "Copying files",
    "Installing dependencies"
  ];
  const m = new Multispinner(spinners, {
    color: {
      incomplete: "blue",
      success: "green",
      error: "red"
    }
  });

  clear();

  //draw initial banner
  console.log(
    chalk.red(
      figlet.textSync("Create p5 sketch", { horizontalLayout: "default" })
    )
  );

  //draws credits
  console.log(
    chalk.white(`  
  Author: Emanuele Dancelli
  Contact: emanueledancelli@gmail.com
  Version: 0.1.1
  `)
  );

  /**
   * @desc creates the dir for the template
   * @param {string} title - the sketch title
   * @returns {undefined}
   */
  const createDir = title => {
    shell.mkdir(title);
    m.success("Creating directories");
    return;
  };

  /**
   * @desc copies the files from the template to the new dir
   * @param {string} path - the path to the template
   * @param {string} title - the sketch title
   * @returns {undefined}
   */
  const copyFiles = (path, title) => {
    shell.cp("-R", `${path}/*`, title);
    m.success("Copying files");
    shell.cd(title);
    //execSync("npm install");
    shell.cd("..");
    m.success("Installing dependencies");
    return;
  };

  /**
   * @desc runs npm install inside the new folder
   * @param {string} title - the sketch title
   * @returns {undefined}
   */
  const installDep = title => {
    shell.cd(title);
    console.log(title);
    //execSync("npm install");
    shell.cd("..");
    return;
  };

  /**
   * @desc formats and prints results
   * @returns {function}
   */
  const logsOnSuccess = title => {
    console.log(
      chalk.blue(`  stdout: mmand:
    
    `)
    );
    console.log(chalk.red(`  cd ${title}; code . && npm run start`));
    console.log(
      chalk.blue(`  
    
  All done! Happy drawing!
    
    
    `)
    );
  };

  createDir(title);
  copyFiles(path, title);

  m.on("success", () => {
    logsOnSuccess(title);
  });
};
