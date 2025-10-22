function sum (list) {
    let first = list[0]
    list.shift()
    
    if(list.length > 1) { // recursive case
        list[0] = list[0] + first
        return sum(list);
    } else if (list.length == 1) { // base case
        return list[0] + first    
    }
}

console.log(sum([1,2,3,4,5,6,7,8,9,10])) // 55

function higher(list) {
    let biggest = list[0]
    
    list.shift()

    if(list.length > 0) {
        if(biggest < list[0]) { 
            biggest = list[0]
        } else {
            list[0] = biggest
        }
        return higher(list)
       
    } else { 
        return biggest
    }
}

console.log(higher([6, 8, 1, 33, 99, 1, 55, 89, 111, 99, 9999, 1]))
