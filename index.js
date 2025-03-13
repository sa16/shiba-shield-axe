console.log("rock paper scissors.")

let humanChoice = 0
let computerChoice =0 
let computerScore=0
let humanScore =0
let roundNumber=0

const getComputerChoice = ()=>{
    computerChoice = "rock"
    if(Math.floor(Math.random()*3) === 1){
        computerChoice = "scissors"

    }else{
        computerChoice = "paper"
    }

    return computerChoice
}


const getHumanChoice = ()=>{
   humanChoice = prompt(console.log("choose rock, paper or scissors:"))
   return humanChoice

}




const playRound = (humanChoice, computerChoice)=>{
    humanChoice = getHumanChoice()
    computerChoice = getComputerChoice() 
   
    switch (humanChoice.toLowerCase()){
    case "rock":
        if(computerChoice == "paper"){
            console.log("you lose, paper beats rock!")
            computerScore++
            roundNumber++

        }else if (computerChoice == "scissors"){
            console.log("you win ! rock beats scissors")
            humanScore++
            roundNumber++
        }else{
            console.log("draw, replay round")
        }
     break 
     
     case "scissors":
        if(computerChoice == "rock"){
            console.log("you lose, rock beats scissors!")
            computerScore++
            roundNumber++
        }else if (computerChoice == "paper"){
            console.log("you win ! scissors beats paper")
            humanScore++
            roundNumber++
        }else{
            console.log("draw, replay round")
        }
     break
    
     case "paper":
        if(computerChoice == "rock"){
            console.log("you win, paper beats rock!")
            humanScore++
            roundNumber++
        }else if (computerChoice == "scissors"){
            console.log("you lose ! scissors beats paper")
            computerScore++
            roundNumber++
        }else{
            console.log("draw, replay round")
        }
     break
     default:
        console.log("Please enter a valid choice")
    
}
}

playRound(humanChoice, computerChoice)




while(roundNumber <5){
    console.log("******Scoreboard*******")
    console.log("Round: " + roundNumber)
    console.log("your score: " + humanScore)
    console.log("computer score: " + computerScore)
    playRound(humanChoice, computerChoice)

    if(roundNumber ==5){
        roundNumber=0
        humanScore=0
        computerScore=0
        console.log("game over")
        if(humanScore > computerScore){
            console.log("you won!")
        }else{
            console.log("you lost!")
        }
    }
}
