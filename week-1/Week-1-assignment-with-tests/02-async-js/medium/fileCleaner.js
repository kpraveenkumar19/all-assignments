const fs = require('fs');
// removes extrapaces in the string
function cleanDatafn(str){
  return str.replace(/\s+/g,' ').trim();
}
// this funcn reads from file then cleans the data then rewrites to the file and then logs it
function fileCleaner(filePath){
  // reading from a file
  fs.readFile(filePath,'utf8',(err,data)=>{
    if(err){
      console.error("Error reading a file :",err);
      return;
    }
    // returns a clean string with no extra spaces
    const cleanData =  cleanDatafn(data);
    // rewrites clean string to the file
    fs.writeFile(filePath,cleanData,'utf8',(err)=>{
      if(err){
       console.error("error in writing to a file:",err);
        return;
      }
      console.log(cleanData);
    });
  });
}


const filePath =  'example.txt';
fileCleaner(filePath);
