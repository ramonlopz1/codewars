function titleCase(str) {
  const splited = str.split(" ");

  for (let i = 0; i < splited.length; i++) {
    let subSplited = splited[i].split("");
    subSplited = subSplited.map((l) => l.toLowerCase());
    subSplited[0] = subSplited[0].toUpperCase();
    splited[i] = subSplited.join("");
  }

  return splited.join(" ");
}

console.log(titleCase("sHoRt AnD sToUt"));
