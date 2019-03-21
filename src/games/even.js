// brain-even game logic

import playGame from '..';
import getRandomNumber from '../utils';

const isEven = num => num % 2 === 0;

const evenDescription = 'Answer "yes" if number even otherwise answer "no"\n';

const showQuestion = () => {
  const question = getRandomNumber(100);

  console.log(`Question: ${question}`);

  if (isEven(question)) {
    return 'yes';
  }
  return 'no';
};

const playEven = () => playGame(evenDescription, showQuestion);

export default playEven;
