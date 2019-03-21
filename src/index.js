// Engine of all package's games

import readlineSync from 'readline-sync';

export const showGreetings = (gameRules) => {
  console.log('Welcome to the Brain Games!');

  console.log(gameRules);

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}\n`);

  return userName;
};

const showAnswer = (answer, rightAnswer, userName) => {
  if (answer === rightAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.
Let's try again, ${userName}!`);
  return false;
};

const playGame = (gameRules, showQuestion, getCorrectAnswer) => {
  const gameIterationsCount = 3;
  const userName = showGreetings(gameRules);
  let result = true;
  let counter = 0;

  do {
    const question = showQuestion();
    const answer = readlineSync.question('Your answer: ');
    const rightAnswer = getCorrectAnswer(question);
    result = showAnswer(answer, rightAnswer, userName);

    counter += 1;

    if (!result) {
      return;
    }
  } while (counter < gameIterationsCount);

  console.log(`Congratulatons, ${userName}!`);
};

export default playGame;
