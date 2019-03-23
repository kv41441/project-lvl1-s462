// Engine of all package's games

import readlineSync from 'readline-sync';

const playGame = (gameDescription, getGameData) => {
  const gameIterationsCount = 3;
  let result = true;

  console.log('Welcome to the Brain Games!');

  console.log(gameDescription);

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}\n`);

  for (let i = 0; i < gameIterationsCount; i += 1) {
    const gameData = getGameData();

    console.log(`Question: ${gameData.questionText}`);

    const answer = readlineSync.question('Your answer: ');
    const rightAnswer = gameData.correctAnswer;

    if (answer === 'exit' || answer === 'quit') {
      console.log(`Goodbye, ${userName}!`);
      return;
    }

    if (answer === rightAnswer) {
      console.log('Correct!');
      result = true;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.
Let's try again, ${userName}!`);
      result = false;
    }

    if (!result) {
      return;
    }
  }

  console.log(`Congratulatons, ${userName}!`);
};

export default playGame;
