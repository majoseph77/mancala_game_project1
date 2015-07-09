
  console.log('activate framework!');

//Global variables//
// var firstPlayerName = prompt("Lets Play Mancala! Player 1 enter your name", "name");
// var secondPlayerName= prompt("Lets Play Mancala! Player 1 enter your name", "name");

// var player1 = firstPlayerName;
// var player2 = secondPlayerName;






var board = $('.pit, .large_pit');


var player1Side = $('#0, #1, #2, #3, #4, #5, #6');
var player2Side= $('#7, #8, #9, #10, #11, #12, #13');

var value = $(board).text();

// var empty = ;

var numstones =[0,4,4,4,4,4,4,4,4,4,4,4,4,0];

var allPits = document.querySelectorAll(".pits");

// This code will initialize the board with number :-)
(function init(){
  for(var i=0; i<allPits.length; i++) {
   allPits[i].innerHTML = numstones[i] ;
  }
})();

// Listens for click on a specific pit and calls the move function.
$(".pit").click(move);

function move(){
  // moveCount is equal to the number of stones in the pit clicked.
  var moveCount = numstones[$(this).attr("id")];
  // This resets the clicked pit to 0 in the DOM.
  $(this).text(0);
  // This resets the clicked pit in the array to 0.
  numstones[$(this).attr("id")] = 0;

  var index = $(this).attr("id");

  for(var i = moveCount; moveCount >= 0; i--){
    numstones[index--]++;
   var new_value = numstones[index--]++;
    allPits[index--].innerHTML = new_value;
    console.log(moveCount);

    // number = parseInt(current)
    // new_value = number + 1
    // allPits[stoneId--].innerHTML = new_value;
  }

}

$(".pit").hover(function(){
    $(this).css("background-color", "red");
    });

// When the pit is clicked,
// function move(){
//   var stoneCount = document.getElementById("1")innerHTML;
//   var stoneId = this.id;
//   var i = stoneCount

//   for(stoneCount; stoneCount >= 0; i--){
//     current = allPits[stoneId].innerHTML
//     number = parseInt(current)
//     new_value = number + 1
//     allPits[stoneId--].innerHTML = new_value;
//   }

// }

$(".pit").hover(function(){
    $(this).css("background-color", "red");
    });


// }

// function numMoves(){
//   step1:take output of selectPit
//   step2: that number will determine how many
//   times fx move occurs
// }

// move = function (allPits, empty, player1Side, player2Side){
// var allPits = document.querySelectorAll(".pits");
// for(var i=0; i<allPits.length; i++) {
//  allPits[i].innerHTML = numstones[i] ;
// }
//   for (var i= 4; i <= 0; i- -){
//     if(allPits[]===)
//    console.log("hi");
// };
// }

// $( allPits).each(function(){

//     $(this).on("click", function(){
//       console.log("");
//       // var i = parseInt(this.id);
//       // console.log(i);
//     });
// });



// function turn = function(player1,player2){

// };

// function play = function(move, turn, updateDisplay){

// };



// function updateDisplay(){
//   for(i=0; i<14; i++) {
//     var s = numstones[i] === 0 ? "0" : numstones[i];
//     $('#' + i).text(s);
//   }
// }

// updateDisplay();

// var i = numstones[i]
// for(i=0; i>0){
//   i + numstones.length

// }

// var i = numstones[i]
// while(i>0){
//   numstones[] + numstones.length

// }




// the next 4 pits have a starting value of 4, so the new value of the next 4 pits is 5

// var winner;
// function win (){
//   if (#0 > #7)
//     return winner player1
//   } else {
//   return winner player2
//   }
// }
//returns value of board//
// $(board).eq(1).text()
// "4"


// i= text inside id create an array for i

// loop through that and add to each one wile i>0

//   <button name="subject" type="submit" value="fav_HTML">HTML</button>
