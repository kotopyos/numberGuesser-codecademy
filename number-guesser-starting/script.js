let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


const getAbsoluteDistance = (playerNum, secret) =>{
    return Math.abs(secret - playerNum);
}

function generateTarget(){
    return Math.floor(Math.random() * 10);
}
// console.log(generateTarget());      

const compareGuesses = (human, computer, secret) => getAbsoluteDistance(human, secret) <= getAbsoluteDistance(computer, secret)
    

// console.log(compareGuesees(5, 6, 3));                       

const updateScore = winner => {
    if (winner === 'human') {
      humanScore++;
    } else if (winner === 'computer') {
      computerScore++;
    }
  }


// updateScore('human');                                        test
// updateScore('computer');
// console.log(humanScore, computerScore);

const advanceRound = () => currentRoundNumber++;

const rangeCheck = (value) => {    
    return !(value > 9 || value < 0);
}