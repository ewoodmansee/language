//business logic


//user interface logic
function languageFunction() {
	let q1 = document.quiz.q1.value;
	let q2 = document.quiz.q2.value;
	let q3 = document.quiz.q3.value;
	let q4 = document.quiz.q4.value;
	let q5 = document.quiz.q5.value;
		let count = 0;

	if (q1 = "yes") {
		count++;
	}

	if (q2 = "yes") {
		count++;
	}

	if (q3 = "yes") {
		count++;
	}

	if (q4 = "yes") {
		count++;
	}

	if (q5 = "yes") {
		count++;
	}


	if (count === 0) {
		code = 0;
	}

	if (count === 5) {
		code = 5;
	}

	if (> 0 && count < 5) {
		code = 2;
	}

	if (code === 0){
		alert("Learn JavaScript!")
	}

	if (code === 5){
		alert("Learn C#!")
	}

	if (code === 2){
		alert("Learn Go!")
	}

}