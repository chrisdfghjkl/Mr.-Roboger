// Business Logic

function roboger(number) {
  if (number < 0) {
    return "You Broke It!";
  }
  
  let resultArray = [];
  
  for (let i = 0; i <= number; i++) {
    if (i.toString().indexOf(3) > -1) {
      resultArray.push("Won't you be my neighbor?");
    } else if (i.toString().indexOf(2) > -1) {
      resultArray.push("Boop!");
    } else if (i.toString().indexOf(1) > -1) {
      resultArray.push("Beep!");
    } else {
      resultArray.push(i);
    }
  }
return resultArray;
}
roboger(13)