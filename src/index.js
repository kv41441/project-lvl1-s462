import readlineSync from 'readline-sync';

const getUserName = () => readlineSync.question('May I have your name? ');

const showGreetings = () => {
  console.log('Welcome to the Brain Games!\n');

  const userName = getUserName();

  console.log(`Hello, ${userName}`);
};

export default showGreetings;
