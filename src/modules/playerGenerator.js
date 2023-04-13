const playerGenerator = (Obj) => {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/gNpARx1YwqgWhJk6znvn/scores', {
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