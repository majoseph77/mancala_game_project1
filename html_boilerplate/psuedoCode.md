<!-- //psuedo code for move logic user story 1// -->
As a creator I want to create an object that will hold the
numerical values of each pit on the board. So that the addition
and subtraction of stones can stay accounted for.

`var value= {
  "#a":0,
  "#1":4,
  "#2":4,
  "#3":4,
  "#4":4,
  "#5":4,
  "#6":4,
  "#7":4,
  "#8":4,
  "#9":4,
  "#10":4,
  "#11":4,
  "#12":4,
  "#b":0
};`

<!-- //psuedo code for move logic user story 2// -->
- As a creator I want to be able to add and subtract numerical values
from pits #1-12 to coincide with how many stones are being placed into
each pit. Pits #1-12 all start with a value of 4.
I only want to add numerical values to pit #a and #b to keep the total
number of stones in pits #a and #b for the purpose of win logic.

value of pits= i
i>0; board.length; i+

(computerPlayer)
<!-- //pit#10 will always be chosen first// -->
"Beginning values of every game"
value of #a=0
value of #1 =4
value of #2= 4
value of #3= 4
value of #4= 4
value of #5= 4
value of #6= 4
value of #7= 4
value of #8= 4
value of #9= 4
value of #10=4
value of #11=4
value of #12=4
value of #b= 0



when pit #10 is chosen first
new values will be:
<!-- //value of #a remained the same and the value of #1
increased by 1 because it was computers move and #a belongs
to player, move by computer in #a not allowed// -->

value of #a=0
value of #1 =5
value of #2= 4
value of #3= 4
value of #4= 4
value of #5= 4
value of #6= 4
value of #7= 4
value of #8= 4
value of #9= 4
value of #10=4
value of #11=5
value of #12=5
value of #b= 1


<!-- since last pit that was added to was #1 and the value is
greater than 0 (5>0) computers turn continues
by picking up 5 stones and continuing to drop stones -->

"computers turn"
    value of #a=0
    value of #1 =5
new value of #1 =0
    value of #2= 5
    value of #3= 5
    value of #4= 5
    value of #5= 5
    value of #6= 5
<!-- //last stone dropped in #6//     -->
    value of #7= 4
    value of #8= 4
    value of #9= 4
    value of #10=4
    value of #11=5
    value of #12=5
    value of #b= 1




