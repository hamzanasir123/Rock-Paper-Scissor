
let userScore:any = document.querySelector("#User-Score");

let compScore:any = document.querySelector("#Comp-score");

const choices = document.querySelectorAll(".choice");

const msg:any = document.querySelector(".msg");

const showMsg:any = document.querySelector(".show-msg");


const showWinner = (userWin:any)=>{
    if (userWin) {
        msg.innerHTML = "You Win!";
        userScore.innerHTML++
    } else {
        msg.innerHTML = "You Lose!";
        compScore.innerHTML++
    }
}

const drawGame = ()=>{
    msg.innerHTML = "Game Draw";
}

const play = (userChoice:any)=>{
    console.log("User Choice =" , userChoice);
    const comChoice = genCompChoice();
    console.log("Comp Choice =" , comChoice);
    if(userChoice === comChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "Rock" ){
            userWin = comChoice === "Paper" ? false : true;
        }else if(userChoice === "Paper"){
            userWin = comChoice === "Scissors" ? false : true;
        }else if(userChoice === "Scissors"){
            userWin = comChoice === "Rock" ? false : true;
        }
        showWinner(userWin);
    }
}

const genCompChoice = ()=>{
    const options = ["Rock" , "Paper" , "Scissors"];
    let randomnum = Math.floor(Math.random() * 3);
    if(options[randomnum] === "Rock" ){
        showMsg.innerHTML = "Computer Chose Rock";
    }else if(options[randomnum] === "Paper"){
        showMsg.innerHTML = "Computer Chose Paper";
    }else if (options[randomnum] === "Scissors"){
        showMsg.innerHTML = "Computer Chose Scissor";
    }else{
        showMsg.innerHTML = "Hello Gamers";
    }
        return options[randomnum]; 
}



choices.forEach((ch)=>{
    ch.addEventListener("click", ()=>{
        const choiceId = ch.getAttribute("id");
        // console.log("User Click =", choiceId);
        play(choiceId);
    })
})

