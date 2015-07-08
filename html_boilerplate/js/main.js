
  console.log('activate framework!');

//Global variables//







$( ".pit" ).each(function() {

console.log("hello");

    $(this).on("click", function(){
      console.log(this);
      var i = parseInt(this.id);
      console.log(i);
    });
});

var firstPlayerName = prompt("Lets Play Mancala! Player 1 enter your name", "name");
var secondPlayerName= prompt("Lets Play Mancala! Player 1 enter your name", "name");

var player1 = firstPlayerName;
var player2 = secondPlayerName;


var board = $('.pit, .large_pit');


var player1Side = $('#0, #1, #2, #3, #4, #5, #6');
var player2Side= $('#7, #8, #9, #10, #11, #12, #13');

var value = $(board).text();

var empty = 0;

var numstones =[0,4,4,4,4,4,4,0,4,4,4,4,4,4];


// function turn = function(player1,player2){

// };

// function play = function(move, turn, updateDisplay){

// };

// function move = function (numstones, empty, player1Side, player2Side){
//   numstones

// };

function updateDisplay(){
  for(i=0; i<14; i++) {
    var s = numstones[i] === 0 ? "0" : numstones[i];
    $('#' + i).text(s);
  }
}

updateDisplay();

var i = numstones[i]
for(i=0; i>0 i++ ){

}

var i = numstones[i]
while(i>0){

}




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
