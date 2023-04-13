const showScore = async (temp) => {
  temp.innerHTML = '';
  const apiKey = 'gNpARx1YwqgWhJk6znvn';
  const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${apiKey}/scores`, {
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
  return 1;
};

export default showScore;