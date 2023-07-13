const fs = require("fs/promises");
const fileName = "myfile.txt";
const fileContent = "Newton School";
const writeFile = async (fileName, fileContent) => {
  // write code here
  // dont change function name
  fs.writeFile(fileName,fileContent,(error)=>{
    console.log(error);
  });
};

module.exports = { writeFile };
