const showScore = async (temp) => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/gNpARx1YwqgWhJk6znvn/scores', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  const myScores = await response.json();
  myScores.result.forEach((player) => {
    temp.innerHTML += `
  <tr>
    <td>
      ${player.user} : ${player.score}
    </td>
  </tr>
  `;
  });
};

export default showScore;