var mainContainer = document.getElementById("main-container");
var numberContainer = document.getElementById("number-container");
var correctCode = document.getElementById("correct-code");
var wrongCode = document.getElementById("wrong-code");
var showNumbers = document.getElementById("numbers");

var clickCounter = 0;

function getNumber(button) {
  console.log(button.value);

  showNumbers.innerHTML += button.value;
  clickCounter++;
  console.log(clickCounter);

  if (clickCounter == 1) {
      numberOne = button.value;
  }
  else if (clickCounter == 2) {
      numberTwo = button.value;
  }
  else {
      numberThree = button.value;
      if (numberOne == 2 && numberTwo == 1 && numberThree == 3) {
        result.innerHTML = "The code is right!";
        showNumbers.innerHTML = "";



      }
      else {
        result.innerHTML = "The code is wrong!";

        showNumbers.innerHTML = "";


      }
      clickCounter = 0;

  }



}
