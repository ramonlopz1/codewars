// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

const HighestScoringWord = (str) => {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const splitted = str.split(" ")
    let points = 0
    let aux = []

    splitted.forEach(word => {
        word.split("").forEach(l => {
                points += alphabet.indexOf(l) + 1
        })

        aux.push(points)
        points = 0
    })

    const max = Math.max.apply(null, aux)
    return splitted[aux.indexOf(max)]
}

console.log(HighestScoringWord('b aa'))