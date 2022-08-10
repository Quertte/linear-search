function binarySearch(elem, array) {
  let start = 0;
  let end = array.length - 1;
  let middle = Math.floor((end - start) / 2 + start);
  while (true) {
    if (elem === array[middle]) {
      return middle;
    } else if (start >= end) {
      return -1;
    } else if (elem < array[middle]) {
      end = middle - 1;
      middle = Math.floor((end - start) / 2 + start);
    } else if (elem > array[middle]) {
      start = middle + 1;
      middle = Math.floor((end - start) / 2 + start);
    }
  }
}

function binarySearchRec(elem, array, start, end) {
  let middle = Math.floor((end - start) / 2 + start);
  if (array[middle] === elem) {
    return middle;
  } else if (start >= end) {
    return -1;
  } else if (array[middle] > elem) {
    return binarySearchRec(elem, array, start, middle - 1);
  } else if (array[middle] < elem) {
    return binarySearchRec(elem, array, start + 1, end);
  }
}

module.exports = { binarySearch, binarySearchRec };
