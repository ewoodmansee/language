function q1Function() {
	let q1 = document.quiz.q1.value;
	let box1Attribute = document.getElementById('boxq1');
	let box2Attribute = document.getElementById('boxq2');
	let box3Attribute = document.getElementById('boxq3');

		if (q1 == "yes") {
            box2Attribute.setAttribute('class', 'block');
            box1Attribute.setAttribute('class', 'hidden');
        }
        else if (q1 == "no") {
            box3Attribute.setAttribute('class', 'block');
            box1Attribute.setAttribute('class', 'hidden');
        }
    }

function q2Function() {
    let q2 = document.quiz.q2.value;
    let box4Attribute = document.getElementById('boxq4');
    let box2Attribute = document.getElementById('boxq2');
    let box5Attribute = document.getElementById('boxq5');
    
        if (q2 == "yes") {
            box4Attribute.setAttribute('class', 'languageBox');
            box2Attribute.setAttribute('class', 'hidden');
        }
        else if (q2 == "no") {
            box5Attribute.setAttribute('class', 'languageBox');
            box2Attribute.setAttribute('class', 'hidden');
        }
    }

function q3Function() {
    let q3 = document.quiz.q3.value;
    let box3Attribute = document.getElementById('boxq3');
    let box2Attribute = document.getElementById('boxq2');
    let box5Attribute = document.getElementById('boxq5');
    
        if (q3 == "yes") {
            rubyAttribute.setAttribute('class', 'languageBox');
            box3Attribute.setAttribute('class', 'hidden');
        }
        else if (q3 == "no") {
            box5Attribute.setAttribute('class', 'languageBox');
            box3Attribute.setAttribute('class', 'hidden');
        }
    }
            
function q4Function() {
    let q4 = document.quiz.q4.value;
    let box4Attribute = document.getElementById('boxq4');
    let csharpAttribute = document.getElementById('csharpResults');
    let javascriptAttribute = document.getElementById('javascriptResults');
        
        if (q3 == "yes") {
            javascriptAttribute.setAttribute('class', 'languageBox');
            box4Attribute.setAttribute('class', 'hidden');
        }
        else if (q3 == "no") {
            csharpAttribute.setAttribute('class', 'languageBox');
            box4Attribute.setAttribute('class', 'hidden');
        }
    }

function q5Function() {
    let q5 = document.quiz.q5.value;
    let box5Attribute = document.getElementById('boxq5');
    let csharpAttribute = document.getElementById('csharpResults');
    let javascriptAttribute = document.getElementById('javascriptResults');

        if (q5 == "yes") {
            javascriptAttribute.setAttribute('class', 'languageBox');
            box5Attribute.setAttribute('class', 'hidden');
        }
        else if (q5 == "no") {
            csharpAttribute.setAttribute('class', 'languageBox');
            box5Attribute.setAttribute('class', 'hidden');
        }
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