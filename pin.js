function validatePIN (pin) {
    const convert = pin.toString()

    const regex = new RegExp(/[.,/?;ça-zA-Z]/)

    if((convert.length === 4 || convert.length === 6) && !regex.test(convert)) {
        return true
    } else {
        return false
    }
}

console.log(validatePIN(9447.4))