/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
  - `npm run test-calculator`
*/

class Calculator {
  constructor(){
    this.result=0;
  }
  add(number){
    this.result+=parseFloat(number);
  }
  subtract(number){
    this.result-=parseFloat(number);
  }
  multiply(number){
    this.result*=parseFloat(number);
  }
  divide(number){
   const divisor = parseFloat(number)
    if(divisor==0){
      throw new Error("Cannot divide by zero");
    }
    else{
      this.result/=divisor;
    }
  }
  clear(){
    this.result=0;
  }
  getResult(){
    return this.result;
  }
  calculate(expr){
    const cleanExpr = expr.replace(/\s+/g,'');
    const regexp = /^[\d+\-*/().]+$/g;
    const validExp = regexp.test(cleanExpr);

    if(!validExp){
      throw new Error("invalid expression");
    }
    else{
      try{
        this.result = eval(cleanExpr);
      }
      catch(error){
        throw new Error("Invalid Expression");
      }
    }
    
  }
  
  
}








//testing

// Create a new instance of Calculator
const calculator = new Calculator();

// Test Case 1: Basic Arithmetic Operations
calculator.add(5);
console.log(calculator.getResult()); // Expected output: 5

calculator.subtract(3);
console.log(calculator.getResult()); // Expected output: 2

calculator.multiply(4);
console.log(calculator.getResult()); // Expected output: 8

calculator.divide(2);
console.log(calculator.getResult()); // Expected output: 4

// Test Case 2: Clear Result
calculator.clear();
console.log(calculator.getResult()); // Expected output: 0

// Test Case 3: Complex Expression Calculation
calculator.calculate("10 + 2 * (6 - (4 + 1) / 2) + 7");
console.log(calculator.getResult()); // Expected output: 24

// Test Case 4: Division by Zero Error
try {
  calculator.divide(0);
} catch (error) {
  console.log(error.message); // Expected output: Cannot divide by zero
}

// Test Case 5: Invalid Expression Error
try {
  calculator.calculate("5 + abc");
} catch (error) {
  console.log(error.message); // Expected output: Invalid expression
}
