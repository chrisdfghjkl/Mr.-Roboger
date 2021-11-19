Describe: roboger()

Test: "It should return an array with a 0 if the number 0 is inputted"
Code: beepBoop(0);
Expected Output: 0

Test: "It should return an array starting at 0 and ending at the argument number"
Code: beepBoop(5);
Expected Output: [0, 1, 2, 3, 4, 5];

Test: "It should return an array starting at 0 and ending at the argument number"
Code: beepBoop(5);
Expected Output: [0, 1, 2, 3, 4, 5];

Test: "It should it should identify the presence of the digit 1 in an array of numbers"
Code: beepBoop(5);
Expected Output: true;

Test: "It should replace array elements that include the digit '1' with a string 'TEST'"
Code: 
resultArray = []
if (i.toString().indexOf(1) > -1)
  resultArray.push("TEST");
beepBoop(5);
Expected Output: [0, TEST, 2, 3, 4, 5]

Test: 
"It should return array that replaces instances of 3, 2, and 1 with: 'Won't you be my neighbor?', 'Boop!', and 'Beep!', ranked in that order of importance"
Code: 
resultArray = []
if (i.toString().indexOf(3) > -1)
  resultArray.push("Won't you be my Neighbor");
if (i.toString().indexOf(2) > -1)
  resultArray.push("Boop!");
if (i.toString().indexOf(1) > -1)
  resultArray.push("Beep!");
else resultArray.push(i)

beepBoop(13);
Expected Output: [0, 'Beep!', 'Boop!', "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, 'Beep!', 'Beep!', 'Boop!', "Won't you be my neighbor?"]

Test: "It should return the message 'You Broke It!' if negative number is input"
Code: beepBoop(-5);
Expected Output: "You Broke It!"