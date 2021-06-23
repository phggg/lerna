#!/usr/bin/env node

"use strict";

/* eslint-disable import/no-dynamic-require, global-require */
const importLocal = require("import-local");

if (importLocal(__filename)) {
  require("npmlog").info("cli", "using local version of lerna");
} else {
  // reqyure(".") 是按照相对路径， 一个点为引入当前目录，没有写具体文件名，则默认引入./index.js
  require(".")(process.argv.slice(2));
}
