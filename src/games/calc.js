// brain-calc game logic

import playGame from '..';
import getRandomNumber from '../utils';

const calcDescription = 'What is the result of the expression?\n';

const getGameData = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const randomOperation = getRandomNumber(0, 2);
  const operations = ['+', '-', '*'];
  const currentOperation = operations[randomOperation];
  let answer = 0;

  switch (currentOperation) {
    case '+':
      answer = number1 + number2;
      break;

    case '-':
      answer = number1 - number2;
      break;

    case '*':
      answer = number1 * number2;
      break;

    default: break;
  }

  const correctAnswer = String(answer);
  const questionText = `${number1} ${currentOperation} ${number2}`;

  return { questionText, correctAnswer };
};

const playCalc = () => playGame(calcDescription, getGameData);

export default playCalc;
