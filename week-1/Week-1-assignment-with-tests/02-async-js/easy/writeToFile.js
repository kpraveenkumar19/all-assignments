const fs = require("fs");//import module fs
const content = "praveen kumar is a bad boy";
const filePath = "example.txt";
//fs.writeFile(filePath,content,callback fucntion) has three parameters filePath,content to write to the file and callback function which will be executed 
//after wrting operation is done and any peice of code written  below it will be executed after writing operation starts (not finished) when writing is finished callback func executes
fs.writeFile(filePath, content, (err) => {
  if (err) {
    console.error("Errroe found while writing to File :", err);
  }
  console.log("writing to file is successful");
});
// any code below it will be ecexuted first
