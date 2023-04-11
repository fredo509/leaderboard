const showBody = () => {
  document.body.innerHTML = `
<main>
      <h1 class="project-title">Leaderboard</h1>
      <section>
        <div id="scoreBlock">
          <div id="scorehead">
            <p class="title">Recent scores</p>
            <button id="refresh" type="button"> Refresh</button>
          </div>

        </div>
        <div id="template">
        </div>
        <div id="add">
          <p class="title">Add your score</p>
          <div class="in">
            <form action="">
              <input type="text" placeholder="Your name" id="name">
              <input type="number" placeholder="Your score" id="score">
              <button type="submit" id="btn-submit">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  `;
};

export default showBody;