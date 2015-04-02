$(document).ready(function() { 

$('.beerClick').click(function(){
  addBeer();
});

$("button").click(function(){
});

var feeling;

$('.buttonDrunk').click(function(){
  startGame();
  console.log("Buttondrunk is working");
});

$('.buttonDrunk')[1].onclick

$('.buttonDrunk').attr('data-harry') // THIS IS SELECTING ELEMENT USING CLASS! CAN USE THIS FOR LOGGING BUTTON ACTION?

var secondsLeft = 10;
  var unitDrinks=0;

function startGame(){
  var a=howDrunk;
  var b=unitDrinks;
  $('.status').text(a);  
  console.log("function startGame ran");
  $('.counterbanner').text("Drink count: "+b);  
}

var howDrunk =function fhowdrunk(){
  unitDrinks=unitDrinks+1;
  if (unitDrinks < 2) {
feeling = "Congrats on your first drink!";
} else if (unitDrinks >= 13) {
    feeling = "XxX";
  } else if (unitDrinks <4) {
    feeling = "Still quite sober; drink more and faster";
  } else if (unitDrinks >=4 && unitDrinks < 6) {
    feeling = "Getting there"
  } else if (unitDrinks >=6 && unitDrinks <8) {
    feeling = "Approaching drunk"
  } else if (unitDrinks >=8 && unitDrinks <10) {
    feeling = "Should not be able to read this"
  } else if (unitDrinks >=10 && unitDrinks <12) {
    feeling = "This is messed up"
  };
  return feeling;   
}

var ranNum = function generateRanNum() {
    ranNum = Math.ceil(Math.random()*100);
   console.log(ranNum);
    return ranNum; // REMEMBER TO USE RETURN!
  };

var ranNum2= function generateRanNum2() {
    ranNum2 = Math.ceil(Math.random()*100);
   console.log(ranNum2);
    return ranNum2;
  };

var points=0;

$(document).on('keyup', '.answer', function() {
   var answer = ranNum+ranNum2;
   if ( $('.answer').val() == answer ) {
      var clear = $(".answer");
      clear[0].value="";
      points = points +1;
    $('.pcounter >p').text("Points Total: "+points); 
    if (points > 9) {
      playAudio();
      if (points >19) {
        alert("Congratulations! But there is no such things as Ultimate Satisfaction.")
      }
  raveWDI()};
     secondsLeft += 1;
     newCal();
   }
 });

function crazyBackground() {
  var colors = ["green", "red", "blue" , "Salmon" , "hotPink" 
    , "white" , "yellow", "gold", "orchid", "lightcyan"];
    var randomNumber = Math.floor(Math.random() * colors.length);
  document.bgColor = colors[randomNumber];
};

var crazy;
function raveWDI() {
  crazy = setInterval(crazyBackground, 200);
};


function newCal(){
  ranNum = Math.ceil(Math.random()*100);
  ranNum2 = Math.ceil(Math.random()*100); 
  $('.foo >p').text(ranNum+" + "+ranNum2); 
  return(ranNum);
};

function addOneSecond() {
  secondsLeft++;
};

function functionEverySecond() {
  if (secondsLeft < 0) {
    // Stop the timer
    console.log("Game Over!");
    alert("Game Over!")
    clearInterval(timer);
  } else {
    console.log(secondsLeft);
    $('.scounter >p').text("Seconds Left: "+secondsLeft); 
    secondsLeft = secondsLeft - 1;
  }
};

var audio = new Audio("http://freedownloads.last.fm/download/578751073/The%2BPinkie%2BPie%2BStyle.mp3");

function playAudio() {
  audio.play();
};

});

