function countDigits(number) {  // Here the loop counts up the digits in the number, and with Math.floor we devide by 10 to remove the last digit
    let i = 0;                  // and then incriment the i var, and repeatuntil its 0
    while (number !== 0) {
      number = Math.floor(number / 10);
      i++;
    }
    return i;
  }
  
  // Example usage, please use numbers as this this function assumes it is a number and anything else will give weird results
  const myNumber = 18737;
  const digitCount = countDigits(myNumber);
  console.log(digitCount); 