import playGame from '..';
import getRandomNumber from '../utils';

const isEven = num => num % 2 === 0;

const gameDescription = 'Answer "yes" if number even otherwise answer "no"';

const generateGameData = () => {
  const number = [getRandomNumber(1, 100)];
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  const question = `${number}`;

  return { question, correctAnswer };
};

export default () => playGame(gameDescription, generateGameData);
