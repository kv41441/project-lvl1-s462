// brain-even game logic

import playGame, { getRandomNumber } from '..';

const isEven = num => num % 2 === 0;

const evenRules = 'Answer "yes" if number even otherwise answer "no"\n';

const showQuestion = () => {
  const number = getRandomNumber(100);

  console.log(`Question: ${number}`);

  return number;
};

const getCorrectAnswer = (num) => {
  if (isEven(num)) {
    return 'yes';
  }
  return 'no';
};

const playEven = () => playGame(evenRules, showQuestion, getCorrectAnswer);

export default playEven;
