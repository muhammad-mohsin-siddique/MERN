let quantity = 0;
    let score = JSON.parse(localStorage.getItem("score")) || {
      wins: 0,
      losses: 0,
      tie: 0,
      timePlay: 0,
    };

    // if(!score) //shortcut on the above line with || operator
    // {
    //   score = {
    //     wins: 0,
    //     losses: 0,
    //     tie: 0,
    //     timePlay: 0
    //   }
    // }

    function pickComputerMove() {
      const randomNumber = Math.random();

      if (randomNumber >= 0 && randomNumber < 1 / 3) return "Rock";
      else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) return "Paper";
      else return "Scissors";
    }

    function playGame(userMove) {
      const computerMove = pickComputerMove();
      let result;

      if (userMove === "rock") {
        if (computerMove == "Rock") result = "Tie.";
        else if (computerMove == "Paper") result = "You Lose.";
        else result = "You Win.";
      } else if (userMove === "paper") {
        if (computerMove == "Rock") result = "You Win.";
        else if (computerMove == "Paper") result = "Tie.";
        else result = "You Lose.";
      } else if (userMove === "scissors") {
        if (computerMove == "Rock") result = "You Lose.";
        else if (computerMove == "Paper") result = "You Win.";
        else result = "Tie.";
      } else {
        score.wins = 0;
        score.losses = 0;
        score.tie = 0;
        score.timePlay = 0;

        document.querySelector('.results').innerText = '';
        document.querySelector('.moves').innerText = '';  

        document.querySelector(".score").innerText = `
    Win: ${score.wins}, Lose: ${score.losses}, Tie: ${score.tie}, \n
    Your ${score.timePlay} Turn.
    `;

        localStorage.removeItem("score");
      }
      if (!(result === undefined)) {
        if (result === "You Win.") score.wins++;
        else if (result === "You Lose.") score.losses++;
        else score.tie++;

        score.timePlay++;
        localStorage.setItem("score", JSON.stringify(score));

        document.querySelector(".results").innerText = result;
        document.querySelector(".moves").innerHTML = ` you
        <img class="images-icon" src="./img/${userMove}-emoji.png" alt="rock">
        <img class="images-icon" src="./img/${computerMove}-emoji.png" alt="rock">
        Computer
      `;
        document.querySelector('.score').innerHTML = 
        `
          Win: ${score.wins}, Lose: ${score.losses}, Tie: ${score.tie}, \n
          Your ${score.timePlay} Turn.
        `;
      }
    }