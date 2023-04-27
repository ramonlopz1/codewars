function confirmEnding(str, target) {
    const targetLength = target.length
    const slicedStr = str.slice(str.length - 1, str.length - targetLength)

  return slicedStr;
}


console.log(confirmEnding("Ramon", "n"))
