// Business Logic

function roboger(number) {
  let resultArray = [];
  
  for (let i = 0; i <= number; i++) {
    if (i.toString().indexOf(1) > -1) {
      resultArray.push("TEST");
    } else {
      resultArray.push(i);
    }
  }
return resultArray;
}
roboger(5)