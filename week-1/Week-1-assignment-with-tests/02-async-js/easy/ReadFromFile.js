const fs = require('fs');
const filePath = 'example.txt';

function readFromFile(filePath,callback){
   fs.readFile(filePath,'utf8',(err,data)=>{
     if(err){
       callback(err);
       return;
     }
     callback(null,data);
   })
}

function expOperation(){
  let result=0;
  for(let i=0;i<1000000000;i++){
    result+=Math.random();
  }
  console.log("expensive operation completed");
}


readFromFile(filePath,(err,data)=>{
  if(err){
    console.error("Error reading a File",err);
    return;
  }
  console.log("File content :" , data);
  expOperation();
});
