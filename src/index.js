import './style.css';
import showBody from './modules/showBody.js';

const name = document.getElementById('name');
const score = document.getElementById('score');
const btnSubmit = document.getElementById('btsubmit');
const myBoard = [];

const template = document.getElementById('template');

document.body.onload = () => {
  showBody();
};

function addPlayer(myName, myScrore) {
  myBoard.push({
    name: myName,
    scores: myScrore,
  });
  const newBoard = myBoard;
  return newBoard;
}

const displayplayer = (addPlayer) => {
  template.innerHTML = `
  <table>
    <tr><td>${addPlayer.name} : ${addPlayer.score}</td></tr>
  </table>
  `;
};

btnSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  addPlayer(name.value, score.value);
  displayplayer(addPlayer);
});
