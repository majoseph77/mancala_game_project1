#Let's Play Mancala

##Mancala is an ancient family of board games, and there are numerous variants.
This is a version of the basic game, known as two-rank Mancala and also known as Kalah.

###Difficulty: Average

###Time Required: 15 minutes

###Here's How:

- The Mancala 'board' is made up of two rows of six pits, each.

- Four pieces are placed in each of the 12 holes.

- Each player has a 'store' to the right side of the Mancala board.

- The game begins with one player picking up all of the pieces in any one of the
  holes on his side. Moving counter-clockwise, the player deposits one of the
  stones in each hole until the stones run out.

- If you run into your own store, deposit one piece in it.
  If you run into your opponent's store, skip it.

- If the last piece you drop is in your own store, you get a free turn.

<!-- //might git red of this rule// -->
- If the last piece you drop is in an empty hole on your side, you capture that
  piece and any pieces in the hole directly opposite.

- Always place all captured pieces in your store.

- The game ends when all six spaces on one side of the Mancala board are empty.

- The player who still has pieces on his side of the board when the game ends captures all of those pieces.

- Count all the pieces in each store. The winner is the player with the most pieces.


##User Stories

- As a user I want to know how to play the game. How I win,
lose and gain points.

- As a user I want the game to be colorful ,have sound an animation.

- As an administrator I want the board to clear at the end of each game
 to signify a brand new game has started

- As an administrator I want to create a board where each container
 has a specific ID

-As an administrator I want the stones to move to each pit with animation.

-As an administrator I want the players to only be able to move their
stones on their turn.

##Player Logic
- As a creator I want one human player and one computer
player. Before the game begins the human player must
enter their name, which will then define Player1,
computer will be player2.

- As a creator I want the computer to always go first
and be attatched to the left side of the board.

-As a creator I want the human player to go second and
be attached to the right side of the board.

<!-- //turn logic user stories completed 7.7.15 11.24am// -->

##Turn Logic
- As a creator I want the game to be able to determine if a pit has a numeric
value of 0 or some other numeric value so that it can determine whether
a players turn has ended or will continue.

-As a creator I want the game to be aware of which side stones are being
dropped (playerSide, computerSide) so the game can determine whether a
players turn has come to an end or will continue.


##Move Logic

<!-- -As a creator I want to create an object that will hold the
numerical values of each pit on the board. So that the addition
and subtraction of stones can stay accounted for.

- As a creator I want to be able to add and subtract numerical values
from pits #1-12 to coincide with how many stones are being placed into
each pit. And only add numerical values to pit #a and #b to keep the total
number of stones in pits #a and #b for the purpose of win logic.

- As a creator I always want the computer to make the first move starting
from the same designated pit, to lessen the chance of loop breaks.

- As a creator I want to be able to make pits #a and #b unavaliable for
stone placement based on the current players turn.

- As a creator if the last number ever coincides with pit #a, or pit #b
I want to add that to the total number of #a or #b to assist in win logic.

- As a creator I want to create a loop where the number of stones in one pit
will be captured and dropped one stone into each of the following until it
comes to a pit with a value of 0, if the last stone is dropped into a pit that
has a numerical value >0 then it will add 1 to the value and continue. For
example all pits have a starting value of 4, if 'pit#1' has 4 stones then
1 stone will be added to pits #2-#5 which will now have a value of '5'. Since
pit '#5' new value is now 5 and not 0 those 5 stones will be removed from
'pit#5'. 'Pit#5' will then have a value of '0' and the value of 1 will be added to
to pits #6-#10. -->

- As a user I want to be able to know how many stones are in each of my pits
and how many stones are in my opponents pits so I can know which option would
be the best move.

- As a user I want to see how many stones are in each pit after each turn. And
how many stones are in my opponents large pit so that I can know if they have
more points than me.

-  As a user I want to know who has the current turn

<!-- ///////////////////////
//variables to create:/
var empty            //
var #aTotal;        ///
var #bTotal;       ///
var value;          //
/////////////////////// -->

- "First Move" Computer will pick up 4 stones from pit #12
and then drop each stone into the next pits one by one until
the last stone is dropped into pit #8. Computer will then pick
up all stones in pit #8 (5) and continue to drop them into the
pits, excluding the human players large pit #a. Landing in pit#4
computer will then pick up all stones (5) and continue dropping
1 stone in their own large pit #b. Computer will land in pit #11
and continue process to pit #1




