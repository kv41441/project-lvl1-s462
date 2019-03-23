// Engine of all package's games

import readlineSync from 'readline-sync';

const playGame = (gameDescription, generateGameData) => {
  const gameIterationsCount = 3;

  console.log('Welcome to the Brain Games!');

  console.log(gameDescription);

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}\n`);

  for (let i = 0; i < gameIterationsCount; i += 1) {
    const gameData = generateGameData();

    console.log(`Question: ${gameData.questionText}`);

    const answer = readlineSync.question('Your answer: ');
    const rightAnswer = gameData.correctAnswer;
    // Cкрытое поведение (с) убрать или сделать открытым (описать в README)?
    if (answer === 'exit' || answer === 'quit') {
      console.log(`Goodbye, ${userName}!`);
      return;
    }

    if (answer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.
Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulatons, ${userName}!`);
};

export default playGame;
