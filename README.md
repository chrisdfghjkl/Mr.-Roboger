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