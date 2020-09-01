const fs = require("fs");
const path = require("path");

const url = path.join(__dirname);

const { initOrganising } = require("./js/folderOrganiser");

initOrganising(url);

fs.watch("../", (eventType, filename) => {
  if (filename) {
    initOrganising(url);
  }
});
