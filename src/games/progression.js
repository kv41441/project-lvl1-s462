import playGame from '..';
import getRandomNumber from '../utils';

const gameDescription = 'What number is missing in the progression?';

const getProgression = () => {
  const progression = [];
  const begin = getRandomNumber(1, 50);
  const step = getRandomNumber(1, 10);
  const length = 10;

  for (let i = 0; i < length; i += 1) {
    progression.push(begin + step * i);
  }

  return progression;
};

const generateGameData = () => {
  const progression = getProgression();
  const hiddenElementIndex = getRandomNumber(0, progression.length - 1);
  const correctAnswer = String(progression[hiddenElementIndex]);
  progression.splice(hiddenElementIndex, 1, '..');
  const question = progression.join(' ').toString();

  return { question, correctAnswer };
};

export default () => playGame(gameDescription, generateGameData);
