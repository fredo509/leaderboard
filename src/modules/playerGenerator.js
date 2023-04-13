const playerGenerator = (Obj) => {
  const apiKey = 'gNpARx1YwqgWhJk6znvn';
  fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${apiKey}/scores`, {
    method: 'POST',
    body: JSON.stringify(Obj),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => json);
};

export default playerGenerator;