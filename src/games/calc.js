// brain-even game logic

import playGame, { getRandomNumber } from '..';

const evenRules = 'What is the result of the expression?\n';

const showQuestion = () => {
  const number1 = getRandomNumber(100);
  const number2 = getRandomNumber(100);
  let expression = 0;
  const expressionType = getRandomNumber(3);

  switch (expressionType) {
    case 1:
      expression = number1 + number2;
      console.log(`Question: ${number1} + ${number2}`);
      break;

    case 2:
      expression = number1 - number2;
      console.log(`Question: ${number1} - ${number2}`);
      break;

    case 3:
      expression = number1 * number2;
      console.log(`Question: ${number1} * ${number2}`);
      break;

    default: break;
  }

  return expression;
};

const getCorrectAnswer = num => String(num);

const playCalc = () => playGame(evenRules, showQuestion, getCorrectAnswer);

export default playCalc;
