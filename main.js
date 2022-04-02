const arr = ['Rock','Paper','Scissors'];

var ite = arr[Math.floor(Math.random()*arr.length)]; //selectare aleatoare din vectorul arr
let playerName ='';
let playerSelection; 
let  computerSelection ='';

let W =0; //victorie
let L=0;  //pierdere

function computerPlay(){  
  //console.log(ite);
   return ite;
}


//const playerSelection ="Rock";

while (playerName === ''){
  playerName =  prompt("Name: ");
}

/*
let capitalize =function(playerSelection){
  return  playerSelection && playerSelection[0].toUpperCase() + playerSelection.slice(1);
}
*/


function playRound(playerSelection,computerSelection){//functie  pentru joc
    
     
     //playerSelection = capitalize(playerSelection);
       
     //computerSelection = computerPlay();

   if (playerSelection ==="Paper" && computerSelection ==="Rock"){
      
    console.log("You Win! Paper beats Rock");
    W++;
    
   }
      else  if (playerSelection ==="Scissors" && computerSelection ==="Paper"){
       console.log("You Win! Scissors beats Paper");
         W++
       }

       else  if  (playerSelection ==="Rock" && computerSelection ==="Scissors"){
       console.log("You Win!  Rock beats Scissors");
         W++;
       }


        else  if (playerSelection ==="Rock" && computerSelection ==="Paper"){
        
        console.log("You Lose! Paper beats Rock");
        L++;
        
        }
        else  if (playerSelection ==="Paper" && computerSelection ==="Scissors"){
           console.log("You Lose! Scissors beats Paper");
           L++;
          }
    
        else  if  (playerSelection ==="Scissors" && computerSelection ==="Rock"){
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


  function ButonClick(){ //verifica butonul apasat
    document.getElementById('Rock').addEventListener("click",function(){
    playerSelection = "Rock"; 
    computerSelection=computerPlay();
    playRound( playerSelection,computerSelection);
    document.getElementById('player').innerText=W;
    document.getElementById('computer').innerText=L;
      if (W ===5 || L ==5){ 

        if (W > L){  //verificare castigator joc
          //console.log(`the winner is ${playerName}`);
        
          alert(`The Winner is ${playerName}!`);
        }
        else{
          //console.log(`the winner is Computer`);
          alert(`The Winner is Computer!`);
        }


      }
      console.log(W);
      console.log(L);
      //console.log('rock button  was clicked!');
     });
     document.getElementById('Paper').addEventListener("click",function(){
      playerSelection = "Paper"; 
      computerSelection=computerPlay();
      playRound( playerSelection,computerSelection);
      document.getElementById('player').innerText=W;
      document.getElementById('computer').innerText=L;
      if (W ===5 || L ==5){

        if (W > L){
          //console.log(`the winner is ${playerName}`);
        
          alert(`The Winner is ${playerName}!`);
        }
        else{
          //console.log(`the winner is Computer`);
          alert(`The Winner is Computer!`);
        }


      }
      console.log(W);
      console.log(L)
      //console.log('paper button  was clicked!');
     });
     
     document.getElementById('Scissors').addEventListener("click",function(){
      playerSelection = "Scissors"; 
      computerSelection=computerPlay();
      playRound( playerSelection,computerSelection);
      document.getElementById('player').innerText=W;
      document.getElementById('computer').innerText=L;
      if (W ===5 || L ==5){

        if (W > L){
          //console.log(`the winner is ${playerName}`);
        
          alert(`The Winner is ${playerName}!`);
        }
        else{
          //console.log(`the winner is Computer`);
          alert(`The Winner is Computer!`);
        }

      }
      console.log(W);
      console.log(L)
      //console.log('scissors button  was clicked!');
     });

    }
 
//playRound(playerSelection,computerSelection);
ButonClick();
