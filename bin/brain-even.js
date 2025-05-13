#!/usr/bin/env node

import {
  greetUser, askQuestion, getAnswer, checkAnswer,
} from '.';

const playEvenGame = () => {
  const name = greetUser();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let correctAnswers = 0;
  const roundsToWin = 3;

  while (correctAnswers < roundsToWin) {
    const number = getRandomNumber(1, 100);
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';

    askQuestion(number);
    const userAnswer = getAnswer();

    if (!checkAnswer(userAnswer, correctAnswer, name)) {
      return;
    }

    correctAnswers += 1;
  }

  console.log(`Congratulations, ${name}!`);
};

playEvenGame();
