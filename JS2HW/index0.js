// Function that checks if 2 or more numbers are equal to eachother
function numCheck(num1, num2, num3) {
    if (num1 == num2) {
        return true
    } else if (num1 == num3) {
        return true
    } else if (num2 == num3) {
        return true
    } else {
        return false
    }
}

console.log(numCheck(1,5,"1")); // Check functionality of function