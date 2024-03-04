/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
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

  const result1 = await waitOneSecond();
  const result2 = await waitTwoSecond();
  const result3 = await waitThreeSecond();

  const endTime = Date.now();

  console.log(result1);
  console.log(result2);
  console.log(result3);

  console.log(`All promises resolved in ${endTime - startTime} milliseconds.`);
}
calculateTime();
