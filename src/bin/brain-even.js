#!/usr/bin/env node

import showGreetings, { playGameEven } from '..';

const gameIterationsCount = 3;

const userName = showGreetings();

playGameEven(userName, gameIterationsCount);
