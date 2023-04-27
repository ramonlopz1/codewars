function largestOfFour(arr) {
    let newArr = []
    for(let i = 0; i < arr.length; i++) {
        const biggest = arr[i].reduce((prev, curr) => {
            if(prev > curr) {
                return prev
            } else {
                return curr
            }
        })

        newArr = [...newArr, biggest]
    }
    return newArr;
  }
  
