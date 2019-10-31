var converter = function(number) {

  var numerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  number = parseInt(number);
  var roman = "";
  console.log(number);

  for (i = 0; i < 13; i++) {
    while (number >= numbers[i] ) {
      roman = roman + numerals[i];
      number = number - numbers[i];
    }
  }

  return roman;
}

$(document).ready(function() {
  $("form#numbers").submit(function(event) {
    event.preventDefault();
    var input = $("#numberEnterLine").val();
    var output = converter(input);
    $("#results").text(output);
  });
});
