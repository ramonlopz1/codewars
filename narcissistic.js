function narcissistic(v) {
    if(v < 0) return
    const vString = v.toString()
    const vSize = vString.length
    
    const newArray = vString.split("").map(n => {
        let number = parseInt(n)
        return Math.pow(number, vSize)
    })

    const sum = newArray.reduce((last, curr) => {
        last += curr
        return last
    })

    if(sum === v) {
        return true
    } else {
        return false
    }
}

console.log(narcissistic(153))