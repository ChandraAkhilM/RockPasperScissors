let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = ()=>{
    const options=["rock","paper","scissors"];
    let random = Math.floor(Math.random()*3) 
    console.log(random);
    return options[random];
};

choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });

const drawGame = (userChoice,compChoice) =>{
    msg.innerText = `Draw! Your ${userChoice} Draws with ${compChoice}`;
    console.log("Draw");
    msg.style.backgroundColor = "#081b31";
};


const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        console.log("You win");
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        userScorePara.innerText= userScore;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        console.log("You lose")
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        compScorePara.innerText=compScore;
        msg.style.backgroundColor = "red";
    }
}


const playGame = (userChoice) =>{
    console.log("user choice = ", userChoice);
    const compChoice= genCompChoice();
    console.log("comp choice = ",compChoice);
    if(userChoice==compChoice){
        drawGame(userChoice,compChoice);
    } else {
        let userWin = true;
        if(userChoice ==="rock"){
            userWin = compChoice ==="paper" ? false : true;
        }else if(userChoice ==="paper"){
            userWin = compChoice ==="scissors" ? false : true;
        }else{
            userWin = compChoice ==="rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    };
    
};

});