// brain-even game logic

import playGame from '..';

const getRandomNumber = () => Math.floor(Math.random() * 100 + 1);

const isParity = num => num % 2 === 0;

const evenRules = 'Answer "yes" if number even otherwise answer "no"\n';

const showQuestion = () => {
  const number = getRandomNumber();

  console.log(`Question: ${number}`);

  return number;
};

const getCorrectAnswer = (num) => {
  if (isParity(num)) {
    return 'yes';
  }
  return 'no';
};

const playEven = () => playGame(evenRules, showQuestion, getCorrectAnswer);

export default playEven;
