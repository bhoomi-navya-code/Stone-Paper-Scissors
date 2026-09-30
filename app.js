let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")
const rootStyles = getComputedStyle(document.documentElement);
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const restartBtn = document.querySelector("#restart-btn");

const gemcompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const reandIdx = Math.floor(Math.random()* 3);
    return options[reandIdx]
}

const drawGame = () =>{
    console.log("game was drew")
    msg.innerText= "Game was drew"
    msg.style.backgroundColor = "var(--msg-bg)"
}

const showWinner = (userWin,userChoice, compChoice) =>{
    if(userWin){
        console.log("you win ")
        userScore++
        userScorePara.innerText = userScore;
        msg.innerText= `You win.your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "var(--win-coloer)";
    }else{
        console.log("you lost")
        compScore++
        compScorePara.innerText = compScore;
        msg.innerText= `You lost. ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor = "var(--lost-coloer)";
    }
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    const compChoice = gemcompChoice();
    console.log("computer choice = ", compChoice);

    if (userChoice === compChoice) {
        //Draw
        drawGame()
    }else{
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice ==="paper" ? false : true ;
        } else if (userChoice == " paper"){
            userWin = compChoice ==="scissors" ? false : true ;
        } else {
            userWin = compChoice ==="rock" ? false : true ;
        }
     showWinner(userWin,userChoice, compChoice);
    }

}

choices.forEach((choices) => {

    choices.addEventListener("click", () => {
        const userChoice = choices.getAttribute("id");
        console.log(" choice was click", userChoice);
        playGame(userChoice)
    })
})





const restartGame = () => {
    userScore = 0;
    compScore = 0;

    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;

    msg.innerText = "Play your move!";
    msg.style.backgroundColor = "var(--msg-bg)";
};

restartBtn.addEventListener("click", restartGame);