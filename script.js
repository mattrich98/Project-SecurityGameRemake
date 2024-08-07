let gameTime = 0; //number for time that will increment as the game plays out. 
let gameScore = 0; //number for the player's score that will increment.

function startGame() { //pressing the play button starts the game with nested functions
  gameIntervals(); //games timer function
  pointsSystem(); //gain or lose points function
}

function gameIntervals() { 
  gameTime++; //gametime gets incremented +1 every second
  console.log(gameTime); //checks gameTime is incrementing (JavaScript is a single-threaded language)
  

  if (gameTime <= 20) { //if the game time is less than 20 seconds, below will occur

    //Loops gameIntervals, 750 = time between
    setTimeout(gameIntervals, 750); //method to slow down the game timer.

    //link with HTML timer
    document.getElementById("timeNumber").innerHTML = gameTime; //links the gameTime variable with HTML timer div
    document.getElementById("startButton").innerHTML = "Game Started"; //changes the start button inner letters

    //stops play button press
    document.getElementById("startButton").onclick = false; //so you can only click the play button once to start game
   

    //Idea: Make the divs 0px by 0px to make it look like it dissapears, normal size when it appears. This way you can use numbers in maths.random

    //widthArray = ['0', '50'] //Between 0 and 50px  only
    //var randomWidth = widthArray[Math.floor(Math.random()*widthArray.length)]; //[Math.floor] is needed to calculate Math.random()*widthArray.length) * <-- combines those two to use array

    //math.floor is needed because it rounds the decimal point/float number to a whole number <--------------------------


    /* Array Duplicates Top */
    displayArray = ["inline", "none"]; //choose between strings, inline or none
    let displayRandom = displayArray[Math.floor(Math.random()*displayArray.length)]; //[Math.floor] is needed to calculate Math.random()*widthArray.length) * <-- combines those two to use array

    displayArray2 = ["inline", "none"]; //choose between strings, inline or none
    let displayRandom2 = displayArray2[Math.floor(Math.random()*displayArray2.length)]; //[Math.floor] is needed to calculate Math.random()*widthArray.length) * <-- combines those two to use array

    displayArray3 = ["inline", "none"]; //choose between strings, inline or none
    let displayRandom3 = displayArray3[Math.floor(Math.random()*displayArray3.length)];

    displayArray4 = ["inline", "none"]; //choose between strings, inline or none
    let displayRandom4 = displayArray4[Math.floor(Math.random()*displayArray4.length)];

    displayArray5 = ["inline", "none"]; //choose between strings, inline or none
    let displayRandom5 = displayArray5[Math.floor(Math.random()*displayArray5.length)];

    displayArray6 = ["inline", "none"]; //choose between strings, inline or none
    let displayRandom6 = displayArray5[Math.floor(Math.random()*displayArray6.length)];

    displayArray7 = ["inline", "none"]; //choose between strings, inline or none
    let displayRandom7 = displayArray7[Math.floor(Math.random()*displayArray7.length)];

    displayArray8 = ["inline", "none"]; //choose between strings, inline or none
    let displayRandom8 = displayArray8[Math.floor(Math.random()*displayArray8.length)];

    displayArray9 = ["inline", "none"]; //choose between strings, inline or none
    let displayRandom9 = displayArray9[Math.floor(Math.random()*displayArray9.length)];

    displayArray10 = ["inline", "none"]; //choose between strings, inline or none
    let displayRandom10 = displayArray10[Math.floor(Math.random()*displayArray10.length)];

    /*Array Duplicatse Bottom */

    if (gameTime == 1){
      document.getElementById('enemy1').style.display= displayRandom; 
      document.getElementById('person').style.display = displayRandom2;
      document.getElementById('person').style.display = displayRandom3;
      document.getElementById('person2').style.display = displayRandom4;
      document.getElementById('person3').style.display = displayRandom5;
      document.getElementById('person4').style.display = displayRandom6;
      document.getElementById('enemy2').style.display = displayRandom7;
      document.getElementById('enemy3').style.display = displayRandom8;
      document.getElementById('enemy4').style.display = displayRandom9;
      document.getElementById('enemy5').style.display = displayRandom10;


      //px is added to the end of randomWidth to convert it into a specific number with px for CSS  document.getElementById("enemyClass2").style.width = randomWidth + "px"

    }

    if (gameTime == 2){
      document.getElementById('enemy1').style.display= displayRandom; 
      document.getElementById('person').style.display = displayRandom2;
      document.getElementById('person').style.display = displayRandom3;
      document.getElementById('person2').style.display = displayRandom4;
      document.getElementById('person3').style.display = displayRandom5;
      document.getElementById('person4').style.display = displayRandom6;
      document.getElementById('enemy2').style.display = displayRandom7;
      document.getElementById('enemy3').style.display = displayRandom8;
      document.getElementById('enemy4').style.display = displayRandom9;
      document.getElementById('enemy5').style.display = displayRandom10;
    }

    if (gameTime == 3){
      document.getElementById('enemy1').style.display= displayRandom; 
      document.getElementById('person').style.display = displayRandom2;
      document.getElementById('person').style.display = displayRandom3;
      document.getElementById('person2').style.display = displayRandom4;
      document.getElementById('person3').style.display = displayRandom5;
      document.getElementById('person4').style.display = displayRandom6;
      document.getElementById('enemy2').style.display = displayRandom7;
      document.getElementById('enemy3').style.display = displayRandom8;
      document.getElementById('enemy4').style.display = displayRandom9;
      document.getElementById('enemy5').style.display = displayRandom10;
    }

    if (gameTime == 4){
      document.getElementById('enemy1').style.display= displayRandom; 
      document.getElementById('person').style.display = displayRandom2;
      document.getElementById('person').style.display = displayRandom3;
      document.getElementById('person2').style.display = displayRandom4;
      document.getElementById('person3').style.display = displayRandom5;
      document.getElementById('person4').style.display = displayRandom6;
      document.getElementById('enemy2').style.display = displayRandom7;
      document.getElementById('enemy3').style.display = displayRandom8;
      document.getElementById('enemy4').style.display = displayRandom9;
      document.getElementById('enemy5').style.display = displayRandom10;
    }

    if (gameTime == 5){
      document.getElementById('enemy1').style.display= displayRandom; 
      document.getElementById('person').style.display = displayRandom2;
      document.getElementById('person').style.display = displayRandom3;
      document.getElementById('person2').style.display = displayRandom4;
      document.getElementById('person3').style.display = displayRandom5;
      document.getElementById('person4').style.display = displayRandom6;
      document.getElementById('enemy2').style.display = displayRandom7;
      document.getElementById('enemy3').style.display = displayRandom8;
      document.getElementById('enemy4').style.display = displayRandom9;
      document.getElementById('enemy5').style.display = displayRandom10;
    }

    if (gameTime == 6){
      document.getElementById('enemy1').style.display= displayRandom; 
      document.getElementById('person').style.display = displayRandom2;
      document.getElementById('person').style.display = displayRandom3;
      document.getElementById('person2').style.display = displayRandom4;
      document.getElementById('person3').style.display = displayRandom5;
      document.getElementById('person4').style.display = displayRandom6;
      document.getElementById('enemy2').style.display = displayRandom7;
      document.getElementById('enemy3').style.display = displayRandom8;
      document.getElementById('enemy4').style.display = displayRandom9;
      document.getElementById('enemy5').style.display = displayRandom10;
    } 

    if (gameTime == 7){
      document.getElementById('enemy1').style.display= displayRandom; 
      document.getElementById('person').style.display = displayRandom2;
      document.getElementById('person').style.display = displayRandom3;
      document.getElementById('person2').style.display = displayRandom4;
      document.getElementById('person3').style.display = displayRandom5;
      document.getElementById('person4').style.display = displayRandom6;
      document.getElementById('enemy2').style.display = displayRandom7;
      document.getElementById('enemy3').style.display = displayRandom8;
      document.getElementById('enemy4').style.display = displayRandom9;
      document.getElementById('enemy5').style.display = displayRandom10;
    }

    if (gameTime == 8){
      document.getElementById('enemy1').style.display= displayRandom; 
      document.getElementById('person').style.display = displayRandom2;
      document.getElementById('person').style.display = displayRandom3;
      document.getElementById('person2').style.display = displayRandom4;
      document.getElementById('person3').style.display = displayRandom5;
      document.getElementById('person4').style.display = displayRandom6;
      document.getElementById('enemy2').style.display = displayRandom7;
      document.getElementById('enemy3').style.display = displayRandom8;
      document.getElementById('enemy4').style.display = displayRandom9;
      document.getElementById('enemy5').style.display = displayRandom10;
    }

    if (gameTime == 9){
      document.getElementById('enemy1').style.display= displayRandom; 
      document.getElementById('person').style.display = displayRandom2;
      document.getElementById('person').style.display = displayRandom3;
      document.getElementById('person2').style.display = displayRandom4;
      document.getElementById('person3').style.display = displayRandom5;
      document.getElementById('person4').style.display = displayRandom6;
      document.getElementById('enemy2').style.display = displayRandom7;
      document.getElementById('enemy3').style.display = displayRandom8;
      document.getElementById('enemy4').style.display = displayRandom9;
      document.getElementById('enemy5').style.display = displayRandom10;
    }

    if (gameTime == 10){
      document.getElementById('enemy1').style.display= displayRandom; 
      document.getElementById('person').style.display = displayRandom2;
      document.getElementById('person').style.display = displayRandom3;
      document.getElementById('person2').style.display = displayRandom4;
      document.getElementById('person3').style.display = displayRandom5;
      document.getElementById('person4').style.display = displayRandom6;
      document.getElementById('enemy2').style.display = displayRandom7;
      document.getElementById('enemy3').style.display = displayRandom8;
      document.getElementById('enemy4').style.display = displayRandom9;
      document.getElementById('enemy5').style.display = displayRandom10;
    }

    if (gameTime == 11){
      document.getElementById('enemy1').style.display= displayRandom; 
      document.getElementById('person').style.display = displayRandom2;
      document.getElementById('person').style.display = displayRandom3;
      document.getElementById('person2').style.display = displayRandom4;
      document.getElementById('person3').style.display = displayRandom5;
      document.getElementById('person4').style.display = displayRandom6;
      document.getElementById('enemy2').style.display = displayRandom7;
      document.getElementById('enemy3').style.display = displayRandom8;
      document.getElementById('enemy4').style.display = displayRandom9;
      document.getElementById('enemy5').style.display = displayRandom10;
    }

    if (gameTime == 12){
      document.getElementById('enemy1').style.display= displayRandom; 
      document.getElementById('person').style.display = displayRandom2;
      document.getElementById('person').style.display = displayRandom3;
      document.getElementById('person2').style.display = displayRandom4;
      document.getElementById('person3').style.display = displayRandom5;
      document.getElementById('person4').style.display = displayRandom6;
      document.getElementById('enemy2').style.display = displayRandom7;
      document.getElementById('enemy3').style.display = displayRandom8;
      document.getElementById('enemy4').style.display = displayRandom9;
      document.getElementById('enemy5').style.display = displayRandom10;
    }

    if (gameTime == 13){
      document.getElementById('enemy1').style.display= displayRandom; 
      document.getElementById('person').style.display = displayRandom2;
      document.getElementById('person').style.display = displayRandom3;
      document.getElementById('person2').style.display = displayRandom4;
      document.getElementById('person3').style.display = displayRandom5;
      document.getElementById('person4').style.display = displayRandom6;
      document.getElementById('enemy2').style.display = displayRandom7;
      document.getElementById('enemy3').style.display = displayRandom8;
      document.getElementById('enemy4').style.display = displayRandom9;
      document.getElementById('enemy5').style.display = displayRandom10;
    }

    if (gameTime == 14){
      document.getElementById('enemy1').style.display= displayRandom; 
      document.getElementById('person').style.display = displayRandom2;
      document.getElementById('person').style.display = displayRandom3;
      document.getElementById('person2').style.display = displayRandom4;
      document.getElementById('person3').style.display = displayRandom5;
      document.getElementById('person4').style.display = displayRandom6;
      document.getElementById('enemy2').style.display = displayRandom7;
      document.getElementById('enemy3').style.display = displayRandom8;
      document.getElementById('enemy4').style.display = displayRandom9;
      document.getElementById('enemy5').style.display = displayRandom10;
    }

    if (gameTime == 15){
      document.getElementById('enemy1').style.display= displayRandom; 
      document.getElementById('person').style.display = displayRandom2;
      document.getElementById('person').style.display = displayRandom3;
      document.getElementById('person2').style.display = displayRandom4;
      document.getElementById('person3').style.display = displayRandom5;
      document.getElementById('person4').style.display = displayRandom6;
      document.getElementById('enemy2').style.display = displayRandom7;
      document.getElementById('enemy3').style.display = displayRandom8;
      document.getElementById('enemy4').style.display = displayRandom9;
      document.getElementById('enemy5').style.display = displayRandom10;
    }

    if (gameTime == 16){
      document.getElementById('enemy1').style.display= displayRandom; 
      document.getElementById('person').style.display = displayRandom2;
      document.getElementById('person').style.display = displayRandom3;
      document.getElementById('person2').style.display = displayRandom4;
      document.getElementById('person3').style.display = displayRandom5;
      document.getElementById('person4').style.display = displayRandom6;
      document.getElementById('enemy2').style.display = displayRandom7;
      document.getElementById('enemy3').style.display = displayRandom8;
      document.getElementById('enemy4').style.display = displayRandom9;
      document.getElementById('enemy5').style.display = displayRandom10;
    }

    if (gameTime == 17){
      document.getElementById('enemy1').style.display= displayRandom; 
      document.getElementById('person').style.display = displayRandom2;
      document.getElementById('person').style.display = displayRandom3;
      document.getElementById('person2').style.display = displayRandom4;
      document.getElementById('person3').style.display = displayRandom5;
      document.getElementById('person4').style.display = displayRandom6;
      document.getElementById('enemy2').style.display = displayRandom7;
      document.getElementById('enemy3').style.display = displayRandom8;
      document.getElementById('enemy4').style.display = displayRandom9;
      document.getElementById('enemy5').style.display = displayRandom10;
    }

    if (gameTime == 18){
      document.getElementById('enemy1').style.display= displayRandom; 
      document.getElementById('person').style.display = displayRandom2;
      document.getElementById('person').style.display = displayRandom3;
      document.getElementById('person2').style.display = displayRandom4;
      document.getElementById('person3').style.display = displayRandom5;
      document.getElementById('person4').style.display = displayRandom6;
      document.getElementById('enemy2').style.display = displayRandom7;
      document.getElementById('enemy3').style.display = displayRandom8;
      document.getElementById('enemy4').style.display = displayRandom9;
      document.getElementById('enemy5').style.display = displayRandom10;
    }

    if (gameTime == 19){
      document.getElementById('enemy1').style.display= displayRandom; 
      document.getElementById('person').style.display = displayRandom2;
      document.getElementById('person').style.display = displayRandom3;
      document.getElementById('person2').style.display = displayRandom4;
      document.getElementById('person3').style.display = displayRandom5;
      document.getElementById('person4').style.display = displayRandom6;
      document.getElementById('enemy2').style.display = displayRandom7;
      document.getElementById('enemy3').style.display = displayRandom8;
      document.getElementById('enemy4').style.display = displayRandom9;
      document.getElementById('enemy5').style.display = displayRandom10;
    }

    if (gameTime == 20){
      document.getElementById('enemy1').style.display= displayRandom; 
      document.getElementById('person').style.display = displayRandom2;
      document.getElementById('person').style.display = displayRandom3;
      document.getElementById('person2').style.display = displayRandom4;
      document.getElementById('person3').style.display = displayRandom5;
      document.getElementById('person4').style.display = displayRandom6;
      document.getElementById('enemy2').style.display = displayRandom7;
      document.getElementById('enemy3').style.display = displayRandom8;
      document.getElementById('enemy4').style.display = displayRandom9;
      document.getElementById('enemy5').style.display = displayRandom10;
    }


  //stops setTimeout loop
  } else if (gameTime >= 20) { //if the timer reaches 20 seconds
    
    document.getElementById("startButton").innerHTML = "Game Over"; //changes the start button inner letters
    alert("Game over! you scored: " + gameScore); //method alert pop up in browser for final score
    location.reload();
    //console.log("Game Over");
  }
  
}

function pointsSystem() { 

  //gets HTML div id person and adds click ability with gains points function 
    document.getElementById("person").addEventListener("click", function gainPoints() { 

    gameScore+=1; //each click increments the score +1
    //console.log(gameScore); 

    //gameScore variable links with inner HTML score div to make it visible on browser
    document.getElementById("scoreNumber").innerHTML = gameScore; 
    
});

  document.getElementById("person2").addEventListener("click", function gainPoints() { 
    gameScore+=1;
    document.getElementById("scoreNumber").innerHTML = gameScore; 
    
});

document.getElementById("person3").addEventListener("click", function gainPoints() { 
  gameScore+=1;
  document.getElementById("scoreNumber").innerHTML = gameScore; 
  
});

document.getElementById("person4").addEventListener("click", function gainPoints() { 
  gameScore+=1;
  document.getElementById("scoreNumber").innerHTML = gameScore; 
  
});

document.getElementById("person5").addEventListener("click", function gainPoints() { 
  gameScore+=1;
  document.getElementById("scoreNumber").innerHTML = gameScore; 
  
});




  //gets HTML div id person and adds click ability with lose points function 
    document.getElementById("enemy1").addEventListener("click", function losePoints(){

    gameScore-=5; //each click decrements the score -5
    //console.log(gameScore);

    //gameScore variable links with inner HTML score div to make it visible on browser
    document.getElementById("scoreNumber").innerHTML = gameScore;
})

document.getElementById("enemy2").addEventListener("click", function losePoints(){
  gameScore-=5; 
  document.getElementById("scoreNumber").innerHTML = gameScore;
})

document.getElementById("enemy3").addEventListener("click", function losePoints(){
  gameScore-=5; 
  document.getElementById("scoreNumber").innerHTML = gameScore;
})

document.getElementById("enemy4").addEventListener("click", function losePoints(){
  gameScore-=5; 
  document.getElementById("scoreNumber").innerHTML = gameScore;
})

document.getElementById("enemy5").addEventListener("click", function losePoints(){
  gameScore-=5; 
  document.getElementById("scoreNumber").innerHTML = gameScore;
})

}

console.log("test"); //Need to setup nodejs properly
console.log(gameTime) // does nothing