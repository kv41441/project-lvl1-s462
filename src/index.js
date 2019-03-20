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

const handleCorrectAnswer = () => console.log('Correct!');

// Доработать через regexp, чтобы читал "yes" и "no" в любом регистре.
const handleIncorrectAnswer = (answer, num, userName) => {
  const rightAnswer = checkParity(num) ? 'yes' : 'no';

  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.
Let's try again, ${userName}!`);
};

const checkAnswer = (answer, num, userName) => {
  if (answer === 'yes' && checkParity(num)) {
    handleCorrectAnswer();
    return true;
  }
  if (answer === 'no' && !checkParity(num)) {
    handleCorrectAnswer();
    return true;
  }
  handleIncorrectAnswer(answer, num, userName);
  return false;
};

export const playGameEven = (userName, iterationsCount) => {
  for (let i = 1, result = true; i <= iterationsCount; i += 1) {
    if (result) {
      const question = showQuestion();
      const answer = getAnswer();
      result = checkAnswer(answer, question, userName);
    } else {
      break;
    }
    if (i === iterationsCount && result) {
      showCongratulations(userName);
    }
  }
};

export default showGreetings;
