// brain-gcd game logic

import playGame from '..';
import getRandomNumber from '../utils';

const gcdDescription = 'Find the greatest common divisor of given numbers.\n';

const getGreatestCommonDivider = (num1, num2) => {
  // О - оптимизация. Начало.
  if (num1 === num2) {
    return num1;
  }
  if (num1 % num2 === 0) {
    return num2;
  }
  if (num2 % num1 === 0) {
    return num1;
  }

  const iter = (number1, number2, acc) => {
    if (num1 % acc === 0 && num2 % acc === 0) {
      return acc;
    }
    return iter(number1, number2, acc - 1);
  };

  if (num1 > num2) {
    return iter(num1, num2, Math.floor(num2 / 2 + 1)); // О - оптимизация. Продолжение.
  }
  return iter(num1, num2, Math.floor(num1 / 2 + 1));
};

const showQuestion = () => {
  const number1 = getRandomNumber(100);
  const number2 = getRandomNumber(100);
  const question = getGreatestCommonDivider(number1, number2);

  console.log(`Question: ${number1}, ${number2}`);

  return String(question);
};

const playGcd = () => playGame(gcdDescription, showQuestion);

export default playGcd;
