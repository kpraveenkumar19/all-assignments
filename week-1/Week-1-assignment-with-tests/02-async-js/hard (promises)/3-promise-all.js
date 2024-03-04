/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond() {
return new Promise(resolve=>{
  setTimeout(()=>{
    resolve('resolved after 1 second');
  },1000);
});
}

function waitTwoSecond() {
return new Promise(resolve=>{
  setTimeout(()=>{
    resolve("resolved after 2 second");
  },2000);
})
}

function waitThreeSecond() {
return new Promise(resolve=>{
  setTimeout(()=>{
    resolve("resolved after 3 seconds");
  },3000);
});
}

async function calculateTime() {
const startTime =  Date.now();

  const [result1,result2,result3] = await Promise.all([
    waitOneSecond(),waitTwoSecond(),waitThreeSecond()
  ]);

  const endTime = Date.now();

  console.log(result1);
  console.log(result2);
  console.log(result3);

  console.log(`All promises resolved in ${endTime - startTime} milliseconds.`);
}
calculateTime();
