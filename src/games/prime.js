// brain-prime game logic

import playGame from '..';
import getRandomNumber from '../utils';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';

const isPrime = (number) => {
  let result = false; // Ибо линтер "ожидает увидеть return в конце функции"

  if (number === 1) {
    result = false;
  }

  for (let divider = 2; divider * divider <= number; divider += 1) {
    if (number % divider === 0) {
      return false;
    }
    result = true;
  }

  return result;
};

const generateGameData = () => {
  const number = getRandomNumber(1, 100);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  const questionText = `${number}`;

  return { questionText, correctAnswer };
};

const playProgression = () => playGame(gameDescription, generateGameData);

export default playProgression;
