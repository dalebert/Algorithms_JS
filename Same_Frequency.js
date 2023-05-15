function splitToDigit(n){
    return (n + '').split('').map((i) => { return Number(i); })
  }
  
  function sameFrequency(num1, num2) {
    // good luck. Add any arguments you deem necessary.
      let count = [0,0,0,0,0,0,0,0,0,0];
      let digits1 = splitToDigit(num1);
      let digits2 = splitToDigit(num2);
      for (let x of digits1) {
          count[x]++
      }
      for (let x of digits2) {
          count[x]--
      }
      for (let x of count) {
          if (x !== 0) {
              return false
          }
      }
      return true
  }
  
  console.log(sameFrequency(252, 5225))
  