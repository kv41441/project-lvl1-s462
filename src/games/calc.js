import playGame from '..';
import getRandomNumber from '../utils';

const gameDescription = 'What is the result of the expression?';

const calculator = {
  '+': (num1, num2) => num1 + num2,
  '-': (num1, num2) => num1 - num2,
  '*': (num1, num2) => num1 * num2,
};

const generateGameData = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const randomOperation = getRandomNumber(0, 2);
  const operations = ['+', '-', '*'];
  const operation = operations[randomOperation];

  const answer = calculator[operation](number1, number2);

  const correctAnswer = String(answer);
  const question = `${number1} ${operation} ${number2}`;

  return { question, correctAnswer };
};

export default () => playGame(gameDescription, generateGameData);
