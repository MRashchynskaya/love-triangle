/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let counter = 0;
  for (let i = 0; i < preferences.length; i++) {
    let personFirst = preferences[i] - 1;
    let personSecond = preferences[personFirst] - 1;
    let personThird = preferences[personSecond] - 1;
    if (personThird === i) {
      counter++;
    };
  }
  return Math.floor(counter / 3);
};
