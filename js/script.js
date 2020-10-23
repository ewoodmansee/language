function fruitFunction(){

	var q1 = document.quiz.q1.value;
    var correct = 0;


if (q1 == "yes") {
    correct++;
}

var pictures = ["img/win.gif", "img/meh.jpeg", "img/lose.gif"];
var messages = ["Great job!", "That's just okay", "You really need to do better"];
var total;

	if (correct == 0) {
		total = 2;
	}

	if (correct > 0 && correct < 3) {
		score = 1;
	}

	if (correct == 3) {
		total = 0;
    }


	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];
	}