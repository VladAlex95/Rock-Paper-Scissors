const arr = ['Rock','Paper','Scissors'];

var ite = arr[Math.floor(Math.random()*arr.length)];
let playerName =prompt("Name: ");
let playerSelection;
const computerSelection ='';

let W =0;
let L=0;

function computerPlay(){  
  //console.log(ite);
   return ite;
}
//const playerSelection ="Rock";

//console.log(playRound(playerSelection,computerSleection));


//const computerSelection ="Rock";
let egal =false;


let capitalize =function(playerSelection){
  return  playerSelection && playerSelection[0].toUpperCase() + playerSelection.slice(1);
}
//alert(capitalize(playerSelection));


function playRound(playerSelection,computerSelection){
    
     playerSelection =prompt("");
     playerSelection = capitalize(playerSelection);
       
     computerSelection = computerPlay();

   

   if (playerSelection ==="Paper" && computerSelection ==="Rock"){
      
    console.log("You Win! Paper beats Rock");
    W++;
    
   }
      else   if (playerSelection ==="Scissors" && computerSelection ==="Paper"){
       console.log("You Win! Scissors beats Paper");
         W++
       }

       else   if  (playerSelection ==="Rock" && computerSelection ==="Scissors"){
       console.log("You Win!  Rock beats Scissors");
         W++;
       }


        else   if (playerSelection ==="Rock" && computerSelection ==="Paper"){
        
        console.log("You Lose! Paper beats Rock");
        L++;
        
        }
        else   if (playerSelection ==="Paper" && computerSelection ==="Scissors"){
           console.log("You Lose! Scissors beats Paper");
           L++;
          }
    
        else   if  (playerSelection ==="Scissors" && computerSelection ==="Rock"){
           console.log("You Lose!  Rock beats Scissors");
           L++;
          
           }
    
 
        else if (playerSelection ===computerSelection ){
         console.log("They are equal!");
        }
             else{
             console.log("Wrong date!");    
            }

 
   }

function game(){
    for (let i =0;i<5;i++){

        playRound(playerSelection,computerSelection); 
    
  }
   
}



game();
if (W > L){
    //console.log(`the winner is ${playerName}`);

    alert(`the winner is ${playerName}`);
}
else{
    //console.log(`the winner is Computer`);
    alert(`the winner is Computer`);
}
//console.log(computerPlay());
//playRound(playerSelection,computerSelection);



