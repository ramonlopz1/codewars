// Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

const pyramidArray = (arr) => {
    const auxArr = []
    let pyramidArr = []
    
    for(let i = 0; i < arr; i++) {
        for(let j = 0; j < i + 1; j++) {
            pyramidArr.push(1)
        }
        auxArr.push(pyramidArr)
        pyramidArr = []
    }

    return auxArr
}

console.log(pyramidArray(3))


