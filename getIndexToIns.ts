// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

function getIndexToIns(arr: number[], num: number) {
  const sorted = arr.sort((a, b) => a - b);
  let idxOf: number = 0;
  for (let i = 0; i < arr.length; i++) {
    if (num === sorted[i] || num === sorted[i + 1]) {
      idxOf = sorted.indexOf(num)
      break
    } else if (num >= sorted[i] && num <= sorted[i + 1]) {
      idxOf = sorted.indexOf(sorted[i + 1]);
      break
    } else if(sorted[i] <= num && i === arr.length - 1) {
      idxOf = sorted.length
      break
    }
  }
  
  return idxOf;
}
//3
console.log(getIndexToIns([2, 5, 10], 15))
