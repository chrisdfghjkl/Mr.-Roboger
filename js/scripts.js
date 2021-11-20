// BUSINESS LOGIC

function roboger(number) {
  if (number < 0) {
    return "You Broke It!";
  }
  
  let resultArray = [];
  
  for (let i = 0; i <= number; i++) {
    if (i.toString().indexOf(3) > -1) {
      resultArray.push("'Won't you be my neighbor?'");
    } else if (i.toString().indexOf(2) > -1) {
      resultArray.push("'Boop!'");
    } else if (i.toString().indexOf(1) > -1) {
      resultArray.push("'Beep!'");
    } else {
      resultArray.push(i.toString());
    }
  }
return resultArray.join(", ");
}

//UI LOGIC

$(document).ready(function() {
  $("form#number-form").submit(function(event) {
    event.preventDefault();
    const number = parseInt($("input#number").val());
    const result = roboger(number);
    $("#form-results").fadeIn();
    $("#results").html(result);
  });
});