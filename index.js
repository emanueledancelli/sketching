#! /usr/bin/env node

const prog = require("caporal");
const newCmd = require("./lib/new");

prog
  .version("0.0.1")
  .command("new", "Create a new sketch")
  .argument("<title>", "The sketch title")
  .action(newCmd);

prog.parse(process.argv);
