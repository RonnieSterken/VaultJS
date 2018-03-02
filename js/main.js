var mainContainer = document.getElementById("main-container");
var numberContainer = document.getElementById("number-container");
var correctCode = document.getElementById("correct-code");
var wrongCode = document.getElementById("wrong-code");
var showNumbers = document.getElementById("numbers");
var showResult = document.getElementById("result");
var numberButtons = document.getElementsByClassName("numberButton");
var clickCounter = 0;
var intervalTimerRight = 0;
var intervalTimerFalse = 0;
var accesAudio = new Audio('snd/Acces.mp3');
var noAccesAudio = new Audio('snd/noAcces.mp3');



console.log(numberButtons);

function disableButtons() {

	//used to loop through all buttons and disable them with attribute disable
	//so that it isn't possible to click more then three times
	for(i=0; i < numberButtons.length; i++) {
		numberButtons[i].setAttribute('disabled', 'disabled');
	}
}

function enableButtons() {

	//used to loop through all buttons and enable them again, remove attribute disabled
	for(i=0; i < numberButtons.length; i++) {
		numberButtons[i].removeAttribute('disabled');
	}
}

function getNumber(button) {
  console.log(button.value);

  showNumbers.innerHTML += button.value;
  clickCounter++;
  console.log(clickCounter);

  if (clickCounter == 1) {
    numberOne = button.value;
  } else if (clickCounter == 2) {
    numberTwo = button.value;
  } else {
    numberThree = button.value;

    disableButtons();

    if (numberOne == 2 && numberTwo == 1 && numberThree == 3) {
      showResult.innerHTML = "The code is right!";
				accesAudio.play();
        showNumbers.innerHTML = "";


        // document.getElementsByName("codeButton").disabled = true;

        var blink = setInterval(function() {

        intervalTimerRight++;

        //turning div on and off
        if (correctCode.style.visibility == 'visible') {
          correctCode.style.visibility = 'hidden';
        } else {
          correctCode.style.visibility = 'visible';
        }

        //check if it blinked 10 times
        if (intervalTimerRight == 11) {

          //ClearInterval function stops the interval after 10 times
          showResult = "";
          intervalTimerRight = 1;
          clearInterval(blink);
          enableButtons();
        }
      }, 500);
    } else {
      result.innerHTML = "The code is wrong!";
			noAccesAudio.play();
      showNumbers.innerHTML = "";

      var blink = setInterval(function() {
        //add +1 every time the setinterval function runs
        intervalTimerFalse++;
        //method to show div on and off
        if (wrongCode.style.visibility == 'visible') {
          wrongCode.style.visibility = 'hidden';
        } else {
          wrongCode.style.visibility = 'visible';
        }
        //check if the interval has runned ten times
        if (intervalTimerFalse == 11) {
          //ClearInterval function stops the interval after 10 times
          showResult = "";
          intervalTimerFalse = 1;
          clearInterval(blink);
          enableButtons();
        }
      }, 500);
    }
    clickCounter = 0;
  }
}
