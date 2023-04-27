function repeatStringNumTimes(str, num) {
  let concated = "";
  for (let i = 0; i < num; i++) {
    concated += str.toString();
  }

  return concated;
}

console.log(repeatStringNumTimes("abc", 1));
