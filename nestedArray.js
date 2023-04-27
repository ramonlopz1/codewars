function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  let contains;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === elem) {
        contains = true;
        break;
      }
    }

    if (!contains) {
      newArr.push(arr[i]);
    }

    contains = false;
  }
  // Only change code above this line
  return newArr;
}

console.log(
  filteredArray(
    [
      ["trumpets", 2],
      ["flutes", 4],
      ["saxophones", 2],
    ],
    2
  )
);
