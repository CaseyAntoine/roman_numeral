var converter = function(number) {

  var numerals = ["I", "V", "X", "L", "C", "D", "M"]
  // var numberArray = number.split("");
  number = parseInt(number);
  var numeralArray = [];
  console.log(number.length);

  if (number === 1) {
    numeralArray.push("I");
  } else if (number === 5) {
    numeralArray.push("V");
  } else if (number === 10) {
    numeralArray.push("X");
  }  else if (number === 50) {
    numeralArray.push("L");
  }  else if (number === 100) {
    numeralArray.push("C");
  }  else if (number === 500) {
    numeralArray.push("D");
  }  else if (number === 1000) {
    numeralArray.push("M");
  }
  return numeralArray;
}


$(document).ready(function() {
  $("form#numbers").submit(function(event) {
    event.preventDefault();
    var input = $("#numberEnterLine").val();
    var output = converter(input);
    $("#results").text(output);
  });
});
