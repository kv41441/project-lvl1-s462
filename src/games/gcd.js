import playGame from '..';
import getRandomNumber from '../utils';

const gameDescription = 'Find the greatest common divisor of given numbers.';

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

const generateGameData = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);

  const correctAnswer = String(getGreatestCommonDivider(number1, number2));
  const question = `${number1} ${number2}`;

  return { question, correctAnswer };
};

export default () => playGame(gameDescription, generateGameData);
