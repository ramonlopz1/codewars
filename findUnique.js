//There is an array with some numbers. All numbers are equal except for one. Try to find it!
//findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2

function findUniq(arr) {
    if(arr.toString().length < 3) return

    // transforma (se for string) em uppercase
    arr = arr.map(a => {
        if(typeof a === 'string') {
            return a.toUpperCase()
        } else {
            return a
        }
    })
    

    let unique = [];

    arr.reduce((prev, curr) => {
        if(curr === prev) {
            return prev
        } else {
            unique.push(curr)
        }
    })

    return unique[0]
  }
  

  console.log(findUniq(['a','a','a','B','A']))