const { linearSearch, globalLinearSearch } = require('../linear_search');
const { binarySearch, binarySearchRec } = require('../binarySearch');

describe("linearSearch()", function () {
  it("returns first index of item in array", function () {
    let item = 3;
    let arr = [1, 2, 3, 4, 5];
    expect(linearSearch(item, arr)).toEqual(2);
  });
});

describe("globalLinearSearch()", function () {
  it("returns array indxes of items in array", function () {
    let item = 'a';
    let arr = ['b', 'a', 'n', 'a', 'n', 'a', 's'];
    expect(globalLinearSearch(item, arr)).toEqual([1, 3, 5]);
  });
});

describe('Проверка различных реализаций бинарного поиска', () => {
  describe('Проверка итеративной реализации бинарного поиска', () => {
    it("Возвращает индекс элемента", () => {
      let elem = 9;
      let arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
      expect(binarySearch(elem, arr)).toBe(4);
    })
    it("Не возвращает индекс элемента, ибо его нет", () => {
      let elem = 100;
      let arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
      expect(binarySearch(elem, arr)).toBe(-1);
    })
  })

  describe('Проверка рекурсивной реализации бинарного поиска', () => {
    it('Тест1', () => {
      let elem = 9;
      let arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
      expect(binarySearchRec(elem, arr, 0, arr.length - 1)).toBe(4);
    });
    it('Тест2', () => {
      let elem = 20;
      let arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
      expect(binarySearchRec(elem, arr, 0, arr.length - 1)).toBe(-1);
    })
  })
})
