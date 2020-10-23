function languageFunction() {
	let q1 = document.quiz.q1.value;
	let q2 = document.quiz.q2.value;
	let q3 = document.quiz.q3.value;
	let q4 = document.quiz.q4.value;
	let q5 = document.quiz.q5.value;
	let quizAttribute = document.getElementById('quiz');
	let resultsAttribute = document.getElementById('languageResults');
	let retakeAttribute = document.getElementById('retakeResults');

		let count = 0;

		if (q1 == "yes") {
			count++;
		}
		if (q2 == "yes") {
			count++;
		}
		if (q3 == "yes") {
			count++;
		}
		if (q4 == "yes") {
			count++;
		}
		if (q5 == "yes") {
			count++;
		}

		if (count == "0") {
			results = "Javascript."
		}
		else if (count == "5") {
			results = "C#."
		}
		else {
			results = "Ruby."
		}

		document.getElementById("languageResults").innerHTML = results;
		resultsAttribute.setAttribute('class', 'languageBox');
		quizAttribute.setAttribute('class', 'hidden');
		retakeAttribute.setAttribute('class', 'languageBox');
}

function retakeFunction() {
	let quizAttribute = document.getElementById('quiz');
	let resultsAttribute = document.getElementById('languageResults');
	let retakeAttribute = document.getElementById('retakeResults');

	resultsAttribute.setAttribute('class', 'hidden');
	quizAttribute.setAttribute('class', 'language');
	retakeAttribute.setAttribute('class', 'hidden');
}