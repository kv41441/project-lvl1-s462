// brain-progression game logic

import playGame from '..';
import getRandomNumber from '../utils';

const progressionDescription = 'What number is missing in the progression?\n';

const getProgression = () => {
  const progressionStep = getRandomNumber(1, 5);
  const firstNumber = getRandomNumber(1, 50);
  const numbersCount = firstNumber + progressionStep * 10;
  const progression = [];

  for (let i = firstNumber, j = 0; i < numbersCount; i += progressionStep, j += 1) {
    progression[j] = i;
  }

  return progression;
};
// недоделка
const getGameData = () => {
  const progression = getProgression();
  const correctAnswer = String(progression[0]);
  const questionText = `${progression.join(' ')}`;

  return { questionText, correctAnswer };
};

const playProgression = () => playGame(progressionDescription, getGameData);

export default playProgression;
