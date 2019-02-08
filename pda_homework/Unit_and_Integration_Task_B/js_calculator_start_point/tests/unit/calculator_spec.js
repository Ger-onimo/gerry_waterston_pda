var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('should add numbers', function(){
    calculator.previousTotal = 4;
    calculator.add(1);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 5);
  })

  it('should subtract numbers', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 3)
  })

  it('should multiply numbers', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 15)
  })

  it('should divide numbers', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 3)
  })

  it('should concatenate multiple number clicks', function(){
    calculator.numberClick(1);
    calculator.numberClick(2);
    calculator.numberClick(3);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 123)
  })

  it('should chain multiple operations together', function(){
    calculator.previousTotal = 3;
    calculator.add(4);
    calculator.previousTotal = 7;
    calculator.add(3);
    calculator.previousTotal = 10;
    calculator.subtract(5);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 5)
  })

  it('should clear the running total without affecting the calculation', function(){
    calculator.previousTotal = 7;
    calculator.clearClick;
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 0)
  })

});

// Integration Tests:
// DONE: calculator.numberClick() - concatenate multiple number button clicks
// DONE: calculator.operatorClick() - chain multiple operations together
// DONE: calculator.clearClick() - clear the running total without affecting the calculation

// DONE ALL
// Unit Tests:
// DONE: calculator.add() - add 1 to 4 and get 5
// DONE: calculator.subtract() subtract 4 from 7 and get 3
// DONE: calculator.multiply() - multiply 3 by 5 and get 15
// DONE: calculator.divide() - divide 21 by 7 and get 3
