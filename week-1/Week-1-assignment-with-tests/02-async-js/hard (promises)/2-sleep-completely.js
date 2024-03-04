/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {
  const start = Date.now();
  while(true){
    const current =  Date.now();
    if(current-start>=seconds*1000){
      break;
    }
  }
}
