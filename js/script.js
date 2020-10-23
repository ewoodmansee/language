function q1Function() {
	let q1 = document.quiz.q1.value;

	if (q1 === "yes") {
		alert ("yes")
	}
}




/* $(document).ready(function() {
	$("form#questionOne").submit(function() {
	  event.preventDefault();
	  const questionOne= $("input:radio[name=q1]:checked").val();
	  if (q1 === "yes") {
		$("#questionTwo").show();
	  } else if (q1 === "no") {
		$("#questionThree").show();
	  }
	});
  });


/*	if (q2 = "yes") {
		$('#q5').show();
	  } else {
		$('#ruby').show();
	}

	if (q3 = "yes") {
		$('#q4').show();
	  } else {
		$('#javascript').show();
	}

	if (q4 = "yes") {
		$('#ruby').show();
	  } else {
		$('#javascript').show();
	}

	if (q5 = "yes") {
			$('#q4').show();
	  } else {
			$('#csharp').show();
	  }

	}}


// Vintage button for below codes: <input type="button" id="button" value="What language?" onclick="languageFunction();">

//My original attempt below, which does work.

/* function languageFunction() {
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

	if (count > 0 && count < 5) {
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

// Attempt two which worked for a time until I realized that coding out all of the possibilities would be terrible...and for some reason, whenever I try to introduce an 'else if' it promptly breaks. Current form is semi-broken as I tried to include all of the possibilities, but a version of this worked.

/* function languageFunction() {
	let q1 = document.quiz.q1.value;
	let q2 = document.quiz.q2.value;
	let q3 = document.quiz.q3.value;
	let q4 = document.quiz.q4.value;
	let q5 = document.quiz.q5.value;

	if (q1 = "yes" && q2 ="yes" && q3 = "yes" && q4 = "yes" && q5 = "yes") {
		alert("Javascript!")
	} 
	if (q1 = "yes" && q2 ="yes" && q3 = "yes" && q4 = "yes" && q5 = "no") {
		alert("Javascript!")
	} 
	if (q1 = "yes" && q2 ="yes" && q3 = "yes" && q4 = "no" && q5 = "no") {
		alert("Javascript!")
	} 
	if (q1 = "yes" && q2 ="yes" && q3 = "no" && q4 = "no" && q5 = "no") {
		alert("Javascript!")
	} 
	if (q1 = "yes" && q2 ="no" && q3 = "no" && q4 = "no" && q5 = "no") {
		alert("Javascript!")
	} 
	if (q1 = "no" && q2 ="no" && q3 = "no" && q4 = "no" && q5 = "no") {
		alert("Javascript!")
	} 
	if {
		alert("no!")
	}

}
