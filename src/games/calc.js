// brain-calc game logic

import playGame from '..';
import getRandomNumber from '../utils';

const calcDescription = 'What is the result of the expression?\n';

const showQuestion = () => {
  const number1 = getRandomNumber(100);
  const number2 = getRandomNumber(100);
  let question = 0;
  const expressionType = getRandomNumber(3);

  switch (expressionType) {
    case 1:
      question = number1 + number2;
      console.log(`Question: ${number1} + ${number2}`);
      break;

    case 2:
      question = number1 - number2;
      console.log(`Question: ${number1} - ${number2}`);
      break;

    case 3:
      question = number1 * number2;
      console.log(`Question: ${number1} * ${number2}`);
      break;

    default: break;
  }

  return String(question);
};

const playCalc = () => playGame(calcDescription, showQuestion);

export default playCalc;
