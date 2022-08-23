/**
 * 
 * Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3] a 

 * @param {*} b 
 * @returns 
 */


function arrayDiff(a, b) {
    // tem que remover os itens de A que existem em B e manter a ordem.
    b.forEach((vb) => {
        a.find(va => {
            if (va === vb) {
                const idx = a.indexOf(vb)
                a[idx] = ""
            }
        })
    })

    a = a.join("").split("")

    return a.map(x => {
        return parseInt(x)
    })
}

console.log(arrayDiff([1, 2, 3], [1]))