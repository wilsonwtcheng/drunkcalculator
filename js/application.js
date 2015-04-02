$(document).ready(function() { 

// $('.beerClick').click(function(){
//   addBeer();
// });

$('.buttonDrunk').click(function(){
  startGame();
  console.log("Buttondrunk is working");
});

$('.resetLogBut').click(function(){
  resetLog();
});

// $('.buttonDrunk')[1].onclick

// var drinks = ['Bottle of beer', 'Pint of beer', 'Shot of spirit', 'Glass of Red', 'Glass of white','Glass of champagne', 'Glass of cocktail'];
//$('.buttonDrunk').attr('data-harry'); // THIS IS SELECTING ELEMENT USING CLASS! CAN USE THIS FOR LOGGING BUTTON ACTION?

// var botbee=0;
// var pinbee=0;
// var shospi=0;
// var glared=0;
// var glawhi=0;
// var glacha=0;
// var glacoc=0;

// var drinks = [[d1],[d2],[d3],[d4]]
// var d1={ botbee1 : 1 };
// var d2={ pinbee1 : 2 };
// var d3={ shospi1 : 3 };
// var d4={ glared1 : 4 };

var drinksHistory = {
  button1: {
    count: 0, 
    text: "Bottle of beer"
  },
  button2: {
    count: 0, 
    text: "Spirit + Mixer"
  },
  button3: {
    count: 0, 
    text: "Shot of spirit" 
  },
  button4: {
    count: 0,
     text: "Glass of red" 
   },
  button5: {
    count: 0, 
    text: "Glass of white" 
  },
  button6: {
    count: 0, 
    text: "Glass of champagne" 
  },
  button7: {
    count: 0, 
    text: "Glass of cocktail" 
  },
  // note: more buttons/drinks can go here, if any
};

function printDrinks(){
  for (var drinks in drinksHistory){
//    if(drinksHistory[drinks].count !== 0){ // both this syntax and below syntax works.
    if(drinksHistory[drinks]["count"] !== 0){
      $(".rightDrinkLog").append("<li>" + drinksHistory[drinks].text + " x " + drinksHistory[drinks].count + "</li>");
    }
  }
}

$('.button1').click(function(){ 
        drinksHistory["button1"]["count"] += 1;
        $(".leftDrinkLog").append("<li>Bottle of beer</li>");
        // $(".leftDrinkLog").text(drinksHistory["button1"].text);
        $(".rightDrinkLog").text("");
        printDrinks();
    });
$('.button2').click(function(){ 
        drinksHistory["button2"]["count"] += 1;
        $(".leftDrinkLog").append("<li>Spirit + mixer</li>");
        $(".rightDrinkLog").text("");
        printDrinks();
    });
$('.button3').click(function(){ 
        drinksHistory["button3"]["count"] += 1;
        $(".leftDrinkLog").append("<li>Shot of spirit</li>");
        $(".rightDrinkLog").text("");
        printDrinks();
    });
$('.button4').click(function(){ 
        drinksHistory["button4"]["count"] += 1;
        $(".leftDrinkLog").append("<li>Glass of red</li>");
        $(".rightDrinkLog").text("");
        printDrinks();
    });
$('.button5').click(function(){ 
        drinksHistory["button5"]["count"] += 1;
        $(".leftDrinkLog").append("<li>Glass of white</li>");
        $(".rightDrinkLog").text("");
        printDrinks();
    });
$('.button6').click(function(){ 
        drinksHistory["button6"]["count"] += 1;
        $(".leftDrinkLog").append("<li>Glass of champagne</li>");
        $(".rightDrinkLog").text("");
        printDrinks();
    });
$('.button7').click(function(){ 
        drinksHistory["button7"]["count"] += 1;
        $(".leftDrinkLog").append("<li>Glass of coctail</li>");
        $(".rightDrinkLog").text("");
        printDrinks();
    });

function resetLog() {
  for (var drinks in drinksHistory){
    (drinksHistory[drinks]["count"] = 0)
  };
        $(".leftDrinkLog").remove();
        $(".rightDrinkLog").remove();
        $(".status").text("- -");
        $(".counterbanner").text("Drink count: 0");
}

var feeling;
var unitDrinks=0;

function startGame(){
  var a=howDrunk;
  var b=unitDrinks;
  $('.status').text(a);  
  console.log("function startGame ran");
  $('.counterbanner').text("Drink count: "+(b+1));  
}

var howDrunk =function fhowdrunk(){
  unitDrinks=unitDrinks+1;
  //console.log(unitDrinks);
  if (unitDrinks < 2) {
feeling = "...Congrats on your first drink!";
} else if (unitDrinks >= 13) {
    feeling = "XxX";
  } else if (unitDrinks <4) {
    feeling = "...Still quite sober; drink more and faster!";
  } else if (unitDrinks >=4 && unitDrinks < 6) {
    feeling = "...Getting there!";
  } else if (unitDrinks >=6 && unitDrinks <8) {
    feeling = "...Approaching drunk!";
  } else if (unitDrinks >=8 && unitDrinks <10) {
    feeling = "...Should not be able to read this!";
  } else if (unitDrinks >=10 && unitDrinks <12) {
    feeling = "...This is messed up";
  }
  return feeling;   
};

// functions that worked and getting retired **start*

// function botBeeBreak() {
//   if (botbee === 1){
//         $(".rightDrinkLog").append("<li>Bottle of beer x 1</li>");
//         } else if (botbee === 2) {
//         $(".rightDrinkLog").text("");          
//         $(".rightDrinkLog").append("<li>Bottle of beer x 2</li>");
//         } else if (botbee === 3) {
//         $(".rightDrinkLog").text("");    
//         $(".rightDrinkLog").append("<li>Bottle of beer x 3</li>");
//         } return;
// }

// function pinBeeBreak() {
//   // var latestEle;
//     // var oneXBeer = $("<li>Pint of beer x 1</li>");
//   if (pinbee === 1){
//         $(".rightDrinkLog").append("<li>Pint of beer x 1</li>");
//         // latestEle = $(".rightDrinkLog li");
//         } else if (pinbee === 2) {
//         $(".rightDrinkLog").text("");          
//         // $(".rightDrinkLog").text("");  
//        // oneXBeer.remove();
//         $(".rightDrinkLog").append("<li>Pint of beer x 2</li>");
//         } else if (pinbee === 3) {
//         // $(".rightDrinkLog").text("");    
//         $(".rightDrinkLog").append("<li>Pint of beer x 3</li>");
//         } return;
// }
// functions that worked and getting retired **end*

//old buttons that worked but replaced **Start

// $('.button1').click(function(){ 
//         $(".leftDrinkLog").append("<li>Bottle of beer</li>");
//         botbee=botbee+1;
//     });
// $('.button2').click(function(){ 
//         $(".leftDrinkLog").append("<li>Pint of beer</li>");
//         pinbee=pinbee+1;
//     });
// $('.button3').click(function(){ 
//         $(".leftDrinkLog").append("<li>Shot of spirit</li>");
//         shospi=shospi+1;
//     });
// $('.button4').click(function(){ 
//         $(".leftDrinkLog").append("<li>Glass of red</li>");
//         glared=glared+1;
//     });
// $('.button5').click(function(){ 
//         $(".leftDrinkLog").append("<li>Glass of white</li>");
//         glawhi=glawhi+1;
//     });
// $('.button6').click(function(){ 
//         $(".leftDrinkLog").append("<li>Glass of champagne</li>");
//         glacha=glacha+1;
//     });
// $('.button7').click(function(){ 
//         $(".leftDrinkLog").append("<li>Glass of cocktail</li>");
//         glacoc=glacoc+1;
//     });
// $('.b8').click(function(){ 
//         $("ol").append("<li>Bottle of beer</li>");
//     });
//old buttons that worked but replaced **End



// var secondsLeft = 10;


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
   if ( $('.answer').val() === answer ) {
      var clear = $(".answer");
      clear[0].value="";
      points = points +1;
    $('.pcounter >p').text("Points Total: "+points); 
    if (points > 9) {
      playAudio();
      if (points >19) {
        alert("Congratulations! But there is no such things as Ultimate Satisfaction.");
      }
  raveWDI();}
     secondsLeft += 1;
     newCal();
   }
 });

function crazyBackground() {
  var colors = ["green", "red", "blue" , "Salmon" , "hotPink" 
    , "white" , "yellow", "gold", "orchid", "lightcyan"];
    var randomNumber = Math.floor(Math.random() * colors.length);
  document.bgColor = colors[randomNumber];
}

var crazy;
function raveWDI() {
  crazy = setInterval(crazyBackground, 200);
}


function newCal(){
  ranNum = Math.ceil(Math.random()*100);
  ranNum2 = Math.ceil(Math.random()*100); 
  $('.foo >p').text(ranNum+" + "+ranNum2); 
  return(ranNum);
}

function addOneSecond() {
  secondsLeft++;
}

function functionEverySecond() {
  if (secondsLeft < 0) {
    // Stop the timer
    console.log("Game Over!");
    alert("Game Over!");
    clearInterval(timer);
  } else {
    console.log(secondsLeft);
    $('.scounter >p').text("Seconds Left: "+secondsLeft); 
    secondsLeft = secondsLeft - 1;
  }
}

var audio = new Audio("http://freedownloads.last.fm/download/578751073/The%2BPinkie%2BPie%2BStyle.mp3");

function playAudio() {
  audio.play();
}

});

