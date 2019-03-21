// brain-gcd game logic

import playGame from '..';
import getRandomNumber from '../utils';

const gcdDescription = 'Find the greatest common divisor of given numbers.\n';

const getGreatestCommonDivider = (num1, num2) => {
  let number1 = num1;
  let number2 = num2;

  while (number1 !== 0 && number2 !== 0) {
    if (number1 > number2) {
      number1 %= number2;
    } else {
      number2 %= number1;
    }
  }

  return number1 + number2;
};

const getGameData = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const correctAnswer = String(getGreatestCommonDivider(number1, number2));
  const questionText = `${number1} ${number2}`;

  return { questionText, correctAnswer };
};

const playGcd = () => playGame(gcdDescription, getGameData);

export default playGcd;
