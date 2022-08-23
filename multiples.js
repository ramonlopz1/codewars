function multiples(number) {
    const arr = number.toString().split("").map(n => {
        if (n % 3 === 0 || n % 5 === 0) {
            return parseInt(n)
        } else {
            return 0
        }
    })

    const result = arr.reduce((prev, curr) => {
        prev += curr
        return prev
    })

    if(number > 0) {
        return result
    } else {
        return 0
    }
}


console.log(multiples(-3569))