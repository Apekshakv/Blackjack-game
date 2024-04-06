let Firstcard= randomcard();
let Secondcard=randomcard();
let sum = Firstcard + Secondcard;
let hasblackjack = false
let isalive=false
let message=""//we are creating a string & using it in the if and else satements kali string hai
let cards=[Firstcard,Secondcard]
let black=document.querySelector(".black");

console.log(sum)
L=document.querySelector(".SUM")
let Cards=document.querySelector(".cards");

function startGame() {
    isalive=true
    // Clear previous content
    Cards.textContent = "";
    
    // Render out all the cards
    for (let i = 0; i < cards.length; i++) {
        Cards.textContent += cards[i] + " ";
    }
    
    L.innerText = "Sum: " + sum;

    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You WIN!";
        hasBlackjack = true;
    } else {
        message = "You LOSE!";
        isalive = false;
    }

    black.innerText = message;
}
function randomcard(){
       let randomnumber= Math.floor( Math.random()*13 ) + 1 //math.randomnumber generates random number & math.floor rounds it to decimal
       if(randomnumber>10){  
        return 10;
       }
       else if(randomnumber==1){
        return 11;
       }
       else{
        return randomnumber;
       }
    }

function newcard(){
    if(isalive==true && hasblackjack==false){
    let card=randomcard();
    sum+=card;
    cards.push(card)//push is used to add new element
    console.log(cards)
    startGame()
}
}