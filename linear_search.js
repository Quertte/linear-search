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

module.exports = {
  linearSearch,
  globalLinearSearch
}
