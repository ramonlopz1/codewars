const isPrime = (num) => {
    const possibilities = []
    if(num < 2) return false

    for(let i = 1; i <= num; i++) {
        if (num % i === 0) {
            possibilities.push("true")
        } else {
            possibilities.push("false")
        }
    }

    return possibilities.filter(v => v === "true").length === 2
}