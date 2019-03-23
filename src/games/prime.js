// brain-prime game logic

import playGame from '..';
import getRandomNumber from '../utils';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';

const isSimple = (number) => {
  
};

const generateGameData = () => {
  const number = getRandomNumber(1, 100);
  const correctAnswer = String(isSimple(number));
  const questionText = `${number}`;

  return { questionText, correctAnswer };
};

const playProgression = () => playGame(gameDescription, generateGameData);

export default playProgression;
