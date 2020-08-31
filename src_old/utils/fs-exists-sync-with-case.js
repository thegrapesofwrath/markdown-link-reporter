import * as fs from "fs";
import * as path from "path";

const cache = {};

// Checks to see if the information is cached before checking the file system
const fsExistsSyncWithCase = filePath => {
  const fileDir = path.dirname(filePath);
  const fileBase = path.basename(filePath);
  if (cache[fileDir]) {
    return cache[fileDir].indexOf(fileBase) > -1;
  }
  try {
    return scanDirectory(filePath);
  } catch (e) {
    return false;
  }
};

const scanDirectory = filePath => {
  try {
    if (fs.existsSync(filePath)) {
      return true;
    }
  } catch(err) {
    return false;
  }
};

export default fsExistsSyncWithCase;
