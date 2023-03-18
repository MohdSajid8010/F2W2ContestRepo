

function OpeningCeremony(nextRace100M) {
    setTimeout(() => {
      console.log("\t\tLet the games begin! \n\n");
      let score = { red: 0, blue: 0, green: 0, yellow: 0 };
      console.log("initialised score: " , score);
      
      nextRace100M(score, LongJump);
    }, 1000);
  }
  
  
   
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function Race100M(score, nextLongJump) {
    console.log("\nRace100M started!");
   
    setTimeout(() => {
      let times = {
        red: getRandomInt(10, 15),
        blue: getRandomInt(10, 15),
        green: getRandomInt(10, 15),
        yellow: getRandomInt(10, 15),
      };
      console.log("\nRace100M previous scores: ", score);
   
      let sortedTimesAr = Object.entries(times).sort((a, b) => a[1] - b[1]);
   
      let first_color = sortedTimesAr[0][0];
      let second_color = sortedTimesAr[1][0];
   
      score[first_color] += 50;
      score[second_color] += 25;
   
      console.log("\nRace100M updated scores: ", score);
      nextLongJump(score, HighJump);
    }, 3000);
  }
  
  
  function getRandomColor() {
    let colors = ["red", "yellow", "blue", "green"];
    return colors[getRandomInt(0, 3)];
  }
   
  function LongJump(score, nextHighJump) {
    console.log("\n\nLongJump started!");
    console.log("\nLongJump previous scores: ", score);
   
    setTimeout(() => {
      let color = getRandomColor();
      // console.log(`LongJump winner: ${color}`);
      score[color] += 150;
      console.log("\nLongJump updated scores: ", score);
      nextHighJump(score, AwardCeremony);
    }, 2000);
  }
   
  function HighJump(score, nextAwardCeremony) {
    console.log("\n\nHighJump started!");
    let color = prompt("What colour secured the highest jump?");
   
    if (color === null || color === "") {
      console.log("\n\t\tEvent was cancelled!");
   
      nextAwardCeremony(score);
    } else if (Object.keys(score).includes(color)) {
      score[color] += 100;
      console.log(color," color got HighJump scores:",score[color]);
    console.log("\nHighjump previous scores: ", score);
      
      console.log("Highjump updated scores: ", score);
      nextAwardCeremony(score);
    } else{
      console.log("\n\t\tEvent was cancelled!");
      nextAwardCeremony(score);

    }
  }
   
  function AwardCeremony(score) {
    console.log("\n\nAward Ceremony started!");
    let sortedScores = Object.entries(score).sort((a, b) => b[1] - a[1]);
    console.log(
      sortedScores[0][0] , "color came first with", sortedScores[0][1] ,"points"
    );
    console.log(
      sortedScores[1][0],"color came second with",  sortedScores[1][1], "points"
    );
    console.log(
      sortedScores[2][0] ,"color came third with", sortedScores[2][1], "points"
    );
  }
  
   
   
  // Starting the SportsDay
  
  OpeningCeremony(Race100M);