// Business Logic

function roboger(number) {
  let resultArray = [];
  
  for (let i = 0; i <= number; i++) {
    if (i.toString().indexOf(1) > -1) {
      return true
    }
  }
  return false;
}
roboger(5)