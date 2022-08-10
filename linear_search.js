const { binarySearch, binarySearchRec } = require('./binarySearch')
//Реализуй функции линейного поиска. Проверь результат тестами.

function linearSearch(elem, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === elem) {
      return i;
    }
  }
}

function globalLinearSearch(elem, array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === elem) {
      result.push(i);
    }
  }
  return result;
}

let arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
console.log(binarySearchRec(6, arr, 0, arr.length - 1));

module.exports = {
  linearSearch,
  globalLinearSearch
}
