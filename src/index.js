// Engine of all package's games

import readlineSync from 'readline-sync';

const gameIterationsCount = 3;

const playGame = (gameDescription, generateGameData) => {
  console.log('Welcome to the Brain Games!');

  console.log(`${gameDescription}\n`);

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}\n`);

  for (let i = 0; i < gameIterationsCount; i += 1) {
    const { question, correctAnswer } = generateGameData();

    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulatons, ${userName}!`);
};

export default playGame;
