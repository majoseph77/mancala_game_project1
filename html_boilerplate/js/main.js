
  console.log('activate framework!');

//Global variables//

var pitValue = 0;

$( ".pit" ).each(function(index) {
    $(this).on("click", function(){
      console.log(this);
      pitValue=$(this).text();
      console.log(pitValue);
      $(this).text("0");
    });
});



$( ".large_pit" ).each(function(index) {
    $(this).on("click", function(){
      console.log(this);
    });
});






var board = $('.pit, .large_pit');

var boardValue=[[4,4,4,4,4,4,0],
              [4,4,4,4,4,4,0]];

var playerSide = $('#a, #1, #2, #3, #4, #5, #6');
var computerSide= $('#7, #8, #9, #10, #11, #12, #b');

var value = $(board).text();

var empty = 0;

//returns value of board//
// $(board).eq(1).text()
// "4"

//returns inner text of board//


// var value= {
//   "#a":0,
//   "#1":4,
//   "#2":4,
//   "#3":4,
//   "#4":4,
//   "#5":4,
//   "#6":4,
//   "#7":4,
//   "#8":4,
//   "#9":4,
//   "#10":4,
//   "#11":4,
//   "#12":4,
//   "#b":0
// };

// var turn = function()

// var computerMove =()

