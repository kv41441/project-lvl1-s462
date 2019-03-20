#!/usr/bin/env node

import showGreetings, { playGameEven } from '..';

const userName = showGreetings();

playGameEven(userName);
