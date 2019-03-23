// brain-even game logic

import playGame from '..';
import getRandomNumber from '../utils';

const isEven = num => num % 2 === 0;

const gameDescription = 'Answer "yes" if number even otherwise answer "no"\n';

const generateGameData = () => {
  const question = [getRandomNumber(1, 100)];
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  const questionText = `${question}`;

  return { questionText, correctAnswer };
};

export default () => playGame(gameDescription, generateGameData);
