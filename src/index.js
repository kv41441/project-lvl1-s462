import readlineSync from 'readline-sync';

const getUserName = () => readlineSync.question('May I have your name? ');

const showGameRules = () => console.log('Answer "yes" if number even otherwise answer "no"\n');

const showGreetings = () => {
  console.log('Welcome to the Brain Games!');

  showGameRules();

  const userName = getUserName();

  console.log(`Hello, ${userName}\n`);

  return userName;
};

const showQuestion = () => {
  const number = Math.floor(Math.random() * 100 + 1);

  console.log(`Question: ${number}`);

  return number;
};

const getAnswer = () => readlineSync.question('Your answer: ');

const showCongratulations = userName => console.log(`Congratulatons, ${userName}!`);

const checkParity = num => num % 2 === 0;

const showCorrectAnswerMessage = () => console.log('Correct!');

const correctAnswerForEven = (num) => {
  if (checkParity(num)) {
    return 'yes';
  }
  return 'no';
};

const showIncorrectAnswerMessage = (answer, rightAnswer, userName) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.
Let's try again, ${userName}!`);
};

const showAnswer = (answer, rightAnswer, userName) => {
  if (answer === rightAnswer) {
    showCorrectAnswerMessage();
    return true;
  }
  showIncorrectAnswerMessage(answer, rightAnswer, userName);
  return false;
};

export const playGameEven = (userName) => {
  const gameIterationsCount = 3;

  for (let i = 1, result = true; i <= gameIterationsCount; i += 1) {
    if (result) {
      const question = showQuestion();
      const answer = getAnswer();
      const rightAnswer = correctAnswerForEven(question);
      result = showAnswer(answer, rightAnswer, userName);
    } else {
      break;
    }
    if (i === gameIterationsCount && result) {
      showCongratulations(userName);
    }
  }
};

export default showGreetings;
