// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

function moveZeros(arr) {
    arr.forEach((value, i) => {
        if(value === 0) {
            arr.push(0)
            arr.splice(i, 1)
        }
    })
    
  return arr;
}

console.log(moveZeros(["a", "1", 1, 0, 0, 2, "a"]))
