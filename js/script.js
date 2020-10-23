function languageFunction() {
	let q1 = document.quiz.q1.value;
	let q2 = document.quiz.q2.value;
	let q3 = document.quiz.q3.value;
	let q4 = document.quiz.q4.value;
	let q5 = document.quiz.q5.value;
	let quizAttribute = document.getElementById('quiz');
	let rubyAttribute = document.getElementById('rubyResults');
	let csharpAttribute = document.getElementById('csharpResults');
	let javascriptAttribute = document.getElementById('javascriptResults');

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
			rubyAttribute.setAttribute('class', 'languageBox');
			quizAttribute.setAttribute('class', 'hidden');
		}
		else if (count == "5") {
			csharpAttribute.setAttribute('class', 'languageBox');
			quizAttribute.setAttribute('class', 'hidden');
		}
		else {
			javascriptAttribute.setAttribute('class', 'languageBox');
			quizAttribute.setAttribute('class', 'hidden');
		}

		document.getElementById("ageResults").innerHTML = count;

}

function retakeFunction() {
	let quizAttribute = document.getElementById('quiz');
	let rubyAttribute = document.getElementById('rubyResults');
	let csharpAttribute = document.getElementById('csharpResults');
	let javascriptAttribute = document.getElementById('javascriptResults');

	rubyAttribute.setAttribute('class', 'hidden');
	csharpAttribute.setAttribute('class', 'hidden');
	javascriptAttribute.setAttribute('class', 'hidden');
	quizAttribute.setAttribute('class', 'visible');
}