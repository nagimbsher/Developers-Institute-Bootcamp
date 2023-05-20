const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];


   const usernames = getUsernamesFromArray (gameInfo);
   console.log("usernames:",usernames);

    function getUsernamesFromArray(users){
        return users.map ((user) => user. username);
    }
    //const username = gameIbfo.map(user)=>user.username



    const winners = getWinnersFromsArray(gameInfo)
    console.log("winners:",winners);


    function getWinnersFromsArray(users){


      return users.filter ((user) => user. score> 5 ); 
    }


    const totalScore = getTotalScoreFromArray(gameInfo);
    console.log("totalScore:",totalScore);

     function getTotalScoreFromArray(players){
        return players.reduce((total,player) => total + player.score,0);
     }
