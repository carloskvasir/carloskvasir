#!/usr/bin/env node
"use strict";

const { readFile } = require("fs");
const { join } = require("path");

const banner = `
.d88b           8               8  dP                  w      
8P    .d88 8d8b 8 .d8b. d88b    8wdP  Yb  dP .d88 d88b w 8d8b 
8b    8  8 8P   8 8' .8 \`Yb.    88Yb   YbdP  8  8 \`Yb. 8 8P   
\`Y88P \`Y88 8    8 \`Y8P' Y88P    8  Yb   YP   \`Y88 Y88P 8 8                                                          
`;

console.log(in_green(banner));

readFile(join(__dirname, "carloskvasir.json"), "utf8", (err, content) => {
  if (err) process.exit(1);
  console.log(content);
});

function in_green(text) {
  const greenColor = "\x1b[32m";
  const reset = "\x1b[0m";
  return greenColor + text + reset;
}
