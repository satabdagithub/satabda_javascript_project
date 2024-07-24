let boxes= document.querySelectorAll(".box");
let resetbutton= document.querySelector("#reset-btn");

let msg= document.querySelector("#message");
let messagecontainer= document.querySelector(".message-container");
let newgamebutton= document.querySelector("#new-game-btn");

let turnO= true;
let count= 0;

const winPatterns= [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetgame = () =>{
    turnO=true;
    count=0;
    enablebtns();
    messagecontainer.classList.add("hide");
};

boxes.forEach((box) => {
        box.addEventListener("click", () => {
            // console.log("button was clicked");
            if(turnO) {
                box.innerText= "O";
                turnO=false;
            }
            else{
                    box.innerText= "X";
                    turnO= true;
                }
                box.disabled= true;
                count++;

                let draworwinner = checkWinner();
                if(count===9 && !draworwinner){
                    gameDraw();
                }

                // checkWinner();

            // const disablebtns = () => {
            //     for(let box of boxes){
            //       box.disabled= true;
                         
            //      }
            });
        });
       
                
            
        

        const gameDraw = () => {
            msg.innerText = `Well played both, Game was a Draw!`;
            messagecontainer.classList.remove("hide");
            disablebtns();
        };

        const disablebtns = () => {
            for(let box of boxes){
              box.disabled= true;
                     
             }
        };
        
        const enablebtns = () => {
            for(let box of boxes){
                 box.disabled= false;
                 box.innerText="";

            }
        };

        const showWinner= (winner) => {
            msg.innerText= `${winner} Won the game, Congratulations!!`;
            messagecontainer.classList.remove("hide");
            disablebtns();
        };
        

        const checkWinner= () => {
            for(let pattern of winPatterns) {
                let position1value = boxes[pattern[0]].innerText;
                let position2value = boxes[pattern[1]].innerText;
                let position3value = boxes[pattern[2]].innerText;

                if(position1value!="" &&position2value!="" && position3value!=""){
                    if(position1value === position2value && position2value === position3value){
                        console.log("winner", position1value);
                        showWinner(position1value);
                    }
                }
            }

        };
        
        


        newgamebutton.addEventListener("click", resetgame);
        resetbutton.addEventListener("click", resetgame);

        
    


