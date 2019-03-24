import playGame from '..';
import getRandomNumber from '../utils';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number === 1) {
    return false;
  }

  if (number === 2 || number === 3) {
    return true;
  }

  for (let divider = 2; divider * divider <= number; divider += 1) {
    if (number % divider === 0) {
      return false;
    }
  }

  return true;
};

const generateGameData = () => {
  const number = getRandomNumber(1, 100);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  const question = number;

  return { question, correctAnswer };
};

export default () => playGame(gameDescription, generateGameData);
