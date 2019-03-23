// brain-calc game logic

import playGame from '..';
import getRandomNumber from '../utils';

const calcDescription = 'What is the result of the expression?\n';

const calculator = {
  '+': (num1, num2) => num1 + num2,
  '-': (num1, num2) => num1 - num2,
  '*': (num1, num2) => num1 * num2,
};

const getGameData = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const randomOperation = getRandomNumber(0, 2);
  const operations = ['+', '-', '*'];
  const operation = operations[randomOperation];

  const answer = calculator[operation](number1, number2);

  const correctAnswer = String(answer);
  const questionText = `${number1} ${operation} ${number2}`;

  return { questionText, correctAnswer };
};

const playCalc = () => playGame(calcDescription, getGameData);

export default playCalc;
