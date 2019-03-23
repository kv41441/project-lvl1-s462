// brain-progression game logic

import playGame from '..';
import getRandomNumber from '../utils';

const gameDescription = 'What number is missing in the progression?\n';

const getProgression = () => {
  const progression = [];
  const progressionBegin = getRandomNumber(1, 50);
  const progressionStep = getRandomNumber(1, 10);
  const progressionLength = 10;

  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(progressionBegin + progressionStep * i);
  }

  return progression;
};

const generateGameData = () => {
  const progression = getProgression();
  const randomElement = getRandomNumber(0, progression.length - 1);
  const correctAnswer = String(progression[randomElement]);
  progression.splice(randomElement, 1, '..');
  const questionText = `${progression.join(' ')}`;

  return { questionText, correctAnswer };
};

export default () => playGame(gameDescription, generateGameData);
