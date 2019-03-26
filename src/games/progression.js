import playGame from '..';
import getRandomNumber from '../utils';

const gameDescription = 'What number is missing in the progression?';

const length = 10;

const getProgression = (begin, step) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(begin + step * i);
  }

  return progression;
};

const generateGameData = () => {
  const begin = getRandomNumber(1, 50);
  const step = getRandomNumber(1, 10);
  const progression = getProgression(begin, step);
  const hiddenElementIndex = getRandomNumber(0, progression.length - 1);

  const correctAnswer = String(progression[hiddenElementIndex]);
  progression.splice(hiddenElementIndex, 1, '..');
  const question = progression.join(' ');

  return { question, correctAnswer };
};

export default () => playGame(gameDescription, generateGameData);
