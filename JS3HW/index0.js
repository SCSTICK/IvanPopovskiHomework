function removeElementFromArray(arr, element) {   // This function essentially check if the element exists in the array using the indexOf method, if it does we remove it
    const index = arr.indexOf(element);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }
  
  // Example usage
  const myArray = [1, 2, 3, 4, 5];
  const elementToRemove = 3;
  
  const newArray = removeElementFromArray(myArray, elementToRemove);
  console.log(newArray);