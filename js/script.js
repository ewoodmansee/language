function languageFunction() {
	let q1 = document.quiz.q1.value;
	let q2 = document.quiz.q2.value;
	let q3 = document.quiz.q3.value;
	let q4 = document.quiz.q4.value;
	let q5 = document.quiz.q5.value;

	if (q1 = "yes" && q2 ="yes" && q3 = "yes" && q4 = "yes" && q5 = "yes") {
		alert("Javascript!")
	} 
	if (q1 = "yes" && q2 ="yes" && q3 = "yes" && q4 = "yes" && q5 = "no") {
		alert("Javascript?")
	} 
	if (q1 = "yes" && q2 ="yes" && q3 = "yes" && q4 = "no" && q5 = "no") {
		alert("C#?")
	} 
	if (q1 = "yes" && q2 ="yes" && q3 = "no" && q4 = "no" && q5 = "no") {
		alert("C#.")
	} 
	if (q1 = "yes" && q2 ="no" && q3 = "no" && q4 = "no" && q5 = "no") {
		alert("Ruby?")
	} 
	else (q1 = "no" && q2 ="no" && q3 = "no" && q4 = "no" && q5 = "no") {
		alert("Ruby?")
	} 

}