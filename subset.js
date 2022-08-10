function subset(n, k) {
  if (!n) {
    return 0;
  } else if (!k) {
    return 1
  } else if (k === 1) {
    return n
  }
  return subset(n - 1, k - 1) + subset(n - 1, k);
}


console.log(subset(24, 4));
