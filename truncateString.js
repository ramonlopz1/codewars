function truncateString(str, num) {
  const sliced = str.slice(0, num);
  if (str.length > num) {
    return sliced.concat("...");
  }

  return str;
}

