const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");

const { initOrganising } = require("./js/folderOrganiser");
inquirer.registerPrompt("directory", require("inquirer-select-directory"));

let url = path.join(__dirname, "..");

inquirer
  .prompt([
    {
      type: "directory",
      name: "folder-to-organise",
      message: "Which folder would you like to organise?",
      basePath: "../",
      // basePath: ".", //for exe files
    },
  ])
  .then(function (answers) {
    url = answers["folder-to-organise"];
  })
  .finally(() => initOrganising(url));

fs.watch("../", (eventType, filename) => {
  if (filename) {
    initOrganising(url);
  }
});
