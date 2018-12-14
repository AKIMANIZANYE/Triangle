//Declaration of variables

var a = function(firstnumber, secondnumber) {
  return firstnumber + secondnumber;
};

var b = function(secondnumber, thirdnumber) {
  return secondnumber + thirdnumber;
};

var c = function(firstnumber, thirdnumber) {
  //return firstnumber + thirdnumber;
};

function check() {
  var data = [];
  var firstnumber = document.getElementById("one").value;
  var secondnumber = document.getElementById("two").value;
  var thirdnumber = document.getElementById("three").value;
  var newData = data.concat([firstnumber, secondnumber, thirdnumber]);

  var text;
  if (
    a(firstnumber, secondnumber) <= thirdnumber ||
    b(secondnumber, thirdnumber) <= firstnumber ||
    c(firstnumber, thirdnumber) <= secondnumber
  ) {
    text = "it is not a triangle";
  } else if (firstnumber === secondnumber && secondnumber === thirdnumber) {
    text = "Equilaterial Triangle.";
  } else if (
    firstnumber === secondnumber ||
    firstnumber === thirdnumber ||
    secondnumber === thirdnumber
  ) {
    text = "Isoscele Triangle.";
  }
  //Isoscele Triangle
  else if (
    firstnumber !== secondnumber &&
    firstnumber !== thirdnumber &&
    secondnumber !== thirdnumber
  ) {
    text = "Scalene Triangle.";
  }
  //Scalene Triangle
  else {
    text = "Not a Triangle.";
  }
  document.getElementById("demo").innerHTML = text;
}
