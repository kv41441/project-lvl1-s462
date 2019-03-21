// Engine of all package's games

import readlineSync from 'readline-sync';

export const showGreetings = (gameRules) => {
  console.log('Welcome to the Brain Games!');

  console.log(gameRules);

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}\n`);

  return userName;
};

const showAnswer = (answer, question, userName) => {
  if (answer === question) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${question}'.
Let's try again, ${userName}!`);
  return false;
};

const playGame = (gameRules, showQuestion) => {
  const gameIterationsCount = 3;
  const userName = showGreetings(gameRules);
  let result = true;
  let counter = 0;

  do {
    const question = showQuestion();
    const answer = readlineSync.question('Your answer: ');
    result = showAnswer(answer, question, userName);

    counter += 1;

    if (!result) {
      return;
    }
  } while (counter < gameIterationsCount);

  console.log(`Congratulatons, ${userName}!`);
};

export default playGame;
