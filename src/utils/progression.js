import getRandomInRange from './randomInRange.js';

export default function progression() {
  const list = [1, 2, 3, 4, 5, 6, 7];
  const number = getRandomInRange(1, 15);
  for (let i = 0; i < list.length; i += 1) {
    list[i] *= number;
    list[i] += number;
  }
  return list;
}
