module.exports = function sumOfOthers(array) {
  let summ = 0;
  let currentIndex = 0;
  const result = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (currentIndex === j) continue;
      summ += array[j];
    }
    result.push(summ);
    currentIndex++;
    summ = 0;
  }
  return result;
}