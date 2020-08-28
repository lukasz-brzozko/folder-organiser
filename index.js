const fs = require("fs");
const path = require("path");
const mv = require("mv");
const glob = require("glob");
const { get } = require("http");

const url = path.join(__dirname, "..");
const query = "/*.*";
let filesToMove = 1;

const optionsGlobal = {
  nodir: true,
  ignore: [
    __filename,
    `${__dirname}/*package*.json`,
    `${__dirname}/.gitignore`,
  ],
  // ignore: `${url}/*(*package*.json|*js)`,
};

const lookForFilesToMove = (pathUrl = url + query) => {
  const files = getFiles(pathUrl, optionsGlobal);

  if (files) {
    files.forEach((file) => {
      let ext = extractExtension(file, false);
      ext = ext.toUpperCase();

      const filename = path.basename(file);

      moveFile(file, path.resolve(url, ext, filename), ext);
    });

    setFilesToMoveNumber();
  }
};

const setFilesToMoveNumber = () => {
  const files = getFiles();
  if (files) {
    filesToMove = files.length;
  }
};

const getFiles = (pathUrl = url + query, options = optionsGlobal) => {
  const matchingFiles = glob.sync(`${pathUrl}`, options);

  return matchingFiles;
};

const extractExtension = (file, withDot = false) => {
  let ext = path.extname(file);
  if (!withDot) {
    const dotIndex = ext.lastIndexOf(".");
    ext = ext.slice(dotIndex + 1);
  }
  return ext;
};

function renameFile(currentName, index, replacement) {
  return (
    currentName.substr(0, index) + replacement + currentName.substr(index + 1)
  );
}

const moveFile = (filePath, destPath, additionalFolderName) => {
  const destExist = fs.existsSync(destPath);

  if (!destExist) {
    try {
      fs.renameSync(filePath, destPath);
    } catch (e) {
      if (e.errno === -4058) {
        fs.mkdirSync(path.join(url, additionalFolderName));
        fs.renameSync(filePath, destPath);
      }
    }
  } else {
    const dotIndex = filePath.lastIndexOf(".");
    const newName = renameFile(filePath, dotIndex, `(1).`);

    fs.renameSync(filePath, newName);
  }
};

do {
  lookForFilesToMove();
} while (filesToMove > 0);