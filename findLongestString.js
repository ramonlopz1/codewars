function findLongestWordLength(str) {
  const arr = str.split(" ");
  const big = arr.reduce((prev, cur) => {
    if (cur.length > prev.length) {
        return cur;
    } else {
        return prev
    }
  });

  return big;
}
console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);
