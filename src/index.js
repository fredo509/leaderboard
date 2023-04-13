import './style.css';
import GamePlayer from './modules/GamePlayer.js';
import playerGenerator from './modules/playerGenerator.js';
import showScore from './modules/showScore.js';

const refresh = document.getElementById('refresh');
const name = document.getElementById('name');
const score = document.getElementById('score');
const btnSubmit = document.getElementById('btsubmit');

const template = document.getElementById('template');

btnSubmit.addEventListener('click', () => {
  const newPlayer = new GamePlayer(name.value, score.value);
  playerGenerator(newPlayer);
  name.value = '';
  score.value = '';
});

refresh.addEventListener('click', () => {
  showScore(template);
});
