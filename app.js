var quizes = {
    html: [{
            question: "What does HTML stand for?",
            answer: {
                a: "Home Tool Markup Language",
                b: "Hyper Text Markup Language",
                c: "Hyperlinks and Text Markup Language"
            },
            correctAnswer: "b"
        },
        {
            question: "Who is making the Web standards?",
            answer: {
                a: "World Wide Web Consortium",
                b: "Mozilla",
                c: "Microsoft"
            },
            correctAnswer: "a"
        },
        {
            question: "Choose the correct HTML element for the largest heading:",
            answer: {
                a: "h6",
                b: "heading",
                c: "h1"
            },
            correctAnswer: "c"
        },
        {
            question: "What is the correct HTML element for inserting a line break?",
            answer: {
                a: "break",
                b: "br",
                c: "lb"
            },
            correctAnswer: "b"
        }
    ]
}
var total_html_questions = quizes.html.length;
var marksPerQuestion = 5;
var my_name;
var rollNo;
var email;
document.getElementById("total-ques-start").innerHTML = total_html_questions;
document.getElementById("total-marks-start").innerHTML = total_html_questions * marksPerQuestion;

function startQuiz(startBtn) {
    my_name = document.getElementById("name");
    rollNo = document.getElementById("rollNo");
    email = document.getElementById("email");

    if (
        my_name.value == ""
    ) {
        alert("Please enter your full name");
        my_name.focus();
    } else if (
        rollNo.value == ""
    ) {
        alert("Please enter your roll number");
        rollNo.focus();
    } else if (
        email.value == ""
    ) {
        alert("Please enter your email");
        email.focus();
    } else {
        startBtn.parentNode.parentNode.parentNode.parentNode.setAttribute("class", "hidden");
        alert("When Quiz starts do not reload the page.")
        var quiz = document.getElementById("quiz");
        quiz.setAttribute("class", "visible");
        document.getElementById("std-name").innerHTML = my_name.value;
        document.getElementById("total-ques").innerHTML = total_html_questions;
        var btn = document.getElementById("cont-sub");
        checkAns(btn);
    }
}

// function getRandomInt(max) {
//     return Math.floor(Math.random() * Math.floor(max));
// }

var asked_questions = [];
var question_no = 0;

function checkAns(btn) {
    var question = document.getElementById("question");
    var a = document.getElementById("a");
    var b = document.getElementById("b");
    var c = document.getElementById("c");
    var a_label = document.getElementById("a-label");
    var b_label = document.getElementById("b-label");
    var c_label = document.getElementById("c-label");
    if (
        question_no >= 1 && question_no <= total_html_questions
    ) {
        checkResult();
    }

    if (question_no == "") {
        question_no = 1;
    } else {
        question_no = question_no + 1
    }

    if (
        btn.innerHTML == "Continue"
    ) {
        if (
            question_no <= total_html_questions
        ) {
            document.getElementById("question-no").innerHTML = question_no;
            question.innerHTML = quizes.html[question_no - 1].question;
            a.value = a_label.innerHTML = quizes.html[question_no - 1].answer.a;
            b.value = b_label.innerHTML = quizes.html[question_no - 1].answer.b;
            c.value = c_label.innerHTML = quizes.html[question_no - 1].answer.c;
            if (
                question_no >= total_html_questions
            ) {
                btn.innerHTML = "Submit"

            }
        }
    } else if (
        btn.innerHTML == "Submit"
    ) {
        var quiz = document.getElementById("quiz");
        quiz.setAttribute("class", "hidden");
        calculteResult();
        document.getElementById("result").setAttribute("class", "visible");
        document.getElementById("std-name-result").innerHTML = my_name.value;
    }
}

function checkResult() {
    var answers = document.getElementsByName("ans");
    for (
        var i = 0; i < answers.length; i++
    ) {
        if (
            answers[i].checked
        ) {
            var ans = answers[i].id
            asked_questions.push(ans);
            answers[i].checked = false;

        }
    }
}

function calculteResult() {
    var counter = 0;
    for (
        var i = 0; i < total_html_questions; i++
    ) {
        if (
            asked_questions[i] == quizes.html[i].correctAnswer
        ) {
            counter = counter + 1;
        }
    }
    var total_marks = total_html_questions * marksPerQuestion;
    var result = marksPerQuestion * counter;
    var percentage = (result / total_marks) * 100;
    document.getElementById("c-ans").innerHTML = counter;
    document.getElementById("marks").innerHTML = result;
    document.getElementById("percentage").innerHTML = percentage;
}