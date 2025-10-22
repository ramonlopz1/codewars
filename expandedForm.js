// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

// If you liked this kata, check out part 2!!

function expandedForm(num) {
    const size = num.toString().length
    let subtractNumber = "1"

    for(let i = 1; i <= size; i++) {
        subtractNumber = subtractNumber.concat("0")
    }

    let minifiedNumber = num / subtractNumber
    minifiedNumber = minifiedNumber.toString().split("").filter(n => n !== ".").reverse()
    
    minifiedNumber = minifiedNumber.map((m, size) => {
        multiplyNumber = "1"
        for(let i = 0; i < size; i++) {
            multiplyNumber = multiplyNumber.concat("0")
        }
        
        
        return m * multiplyNumber
    })

    minifiedNumber = minifiedNumber.filter(v => v != 0).reverse()

    return minifiedNumber.join(" + ")
    
    
}

console.log(expandedForm(70304))
