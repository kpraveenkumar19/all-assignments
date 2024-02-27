const fs = require('fs');//import fs library
const filePath = 'example.txt';

// calls fs.readFile() which reads file and after reading file call back function executes with err parameter if it has error else with (null,data) parameter and executes call back function
function readFromFile(filePath,callback){
   fs.readFile(filePath,'utf8',(err,data)=>{
     if(err){
       callback(err);
       return;
     }
     callback(null,data);
   })
}
// expensive operation which executes after file content is printed
function expOperation(){
  let result=0;
  for(let i=0;i<1000000000;i++){
    result+=Math.random();
  }
  console.log("expensive operation completed");
}

//calling funtion for reading a file and passing callback function as a argument
readFromFile(filePath,(err,data)=>{
  if(err){
    console.error("Error reading a File",err);
    return;
  }
  console.log("File content :" , data);
  expOperation();
});
