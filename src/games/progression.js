// brain-progression game logic

import playGame from '..';
import getRandomNumber from '../utils';

const progressionDescription = 'What number is missing in the progression?\n';

const getProgression = () => {
  const progressionStep = getRandomNumber(1, 10);
  const progressionBegin = getRandomNumber(1, 50);
  const progressionEnd = progressionBegin + progressionStep * 10;
  const progression = [];

  for (let i = progressionBegin, j = 0; i < progressionEnd; i += progressionStep, j += 1) {
    progression[j] = i;
  }

  return progression;
};
// недоделка
const getGameData = () => {
  const progression = getProgression();
  const randomElement = getRandomNumber(0, progression.length - 1);
  const correctAnswer = String(progression[randomElement]);
  progression.splice(randomElement, 1, '..');
  const questionText = `${progression.join(' ')}`;

  return { questionText, correctAnswer };
};

const playProgression = () => playGame(progressionDescription, getGameData);

export default playProgression;
