function maxString(arr) {
        let sortingArr = arr.sort(function(a, b){return b - a});  // sorts numbers from largest to smalles
        let maxStr = sortingArr.shift();        // the aforementioned sort places the highest number on index 0, we take index 0
                                                // remove it from the array and push it to maxStr, then we return the value with the
        return maxStr;                          // return here
}

// Test
console.log(maxString([23, 13, 422, 9]));  