
var counter = 1;
var score = 0;
var value;
var span = document.getElementsByClassName("option");
var radio = document.getElementsByName("selection");
var resultbtn = document.getElementById("result");
var displayres = document.getElementById("displayres");
var button2 = document.getElementById("button2");











var question = {
    one: {
        qone: "How can you get the total number of arguments passed to a function?",

        options: ["Using args.length property", "Using arguments.length property", "None of the above"]
    },
    two: {
        qtwo: "Which of the following function of String object splits a String object into an array of strings by separating the string into substrings?",

        options: ["search()", "replace()", "split()"]
    },
    three: {
        qthree: "How do you create a function in JavaScript?",

        options: ["function myFunction()", "function:myFunction()", " function = myFunction()"]
    },
    four: {
        qfour: "Where is the correct place to insert a JavaScript?",

        options: ["The body section", "The head section", "Both"]
    },
    five: {
        qfive: "The external JavaScript file must contain the 'script' tag.",

        options: ["true", "false", "none of them"]
    },
    six: {
        qsix: "How do you write 'Hello World' in an alert box?",

        options: ["alert('Hello World');", "alertBox('Hello World');", "msg('Hello World');"]
    },
    seven: {
        qseven: "How do you call a function named 'myFunction'?",

        options: ["myFunction()", "call myFunction()", "call function myFunction()"]
    },
    eight: {
        qeight: "How to write an IF statement in JavaScript?",

        options: ["if i = 5", "if (i == 5)", "if i = 5 then"]
    },
    nine: {
        qnine: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",

        options: ["if i =! 5 then", "if (i != 5)", "if (i ! 5)"]
    },
    ten: {
        qten: "How does a WHILE loop start?",

        options: ["while (i <= 10; i++)", "while i = 1 to 10", "while (i <= 10)"]
    },
    eleven: {
        qeleven: "How can you add a comment in a JavaScript?",

        options: ["/!This is a comment-->!/", "//This is a comment", "'This is a comment"]
    },
    twelve: {
        qtwelve: "How do you round the number 7.25, to the nearest integer?",

        options: ["Math.round(7.25)", "rnd(7.25)", "round(7.25)"]
    },
    thirteen: {
        qthirteen: "Which event occurs when the user clicks on an HTML element?",

        options: ["onclick", "onmouseover", "onchange"]
    },
    forteen: {
        qforteen: "How do you declare a JavaScript variable?",

        options: ["variable carName;", "var carName;", "v carName;"]
    },
    fifteen: {
        qfifteen: "Which operator is used to assign a value to a variable?",

        options: ["==", "=", "==="]
    }

}


function getvalue() {
    var z = 0;
    value = undefined;
    for (var i = 0; i < radio.length; i++) {

        if (radio[i].checked) {
            value = radio[i].value;
            value = parseInt(value);
        }
    }
}

function retake() {
    counter = 1;
    score = 0;
    location.reload();
}











// function stop() {
//     timerheading.style.display = "none";
//     clearInterval(x);
// }





function start() {
document.getElementById("insdivid").style.display="none";
    // incre++;
    button2.style.display = "block";
    for (var i = 0; i < radio.length; i++) {
        document.getElementsByClassName("radio")[i].style.display = "inline";
        if (radio[i].checked) {
            radio[i].checked = false;
        }
    }
    if (counter === 1) {
        document.getElementById("main").innerHTML = question.one.qone;
        document.getElementById("button").innerHTML = "Next";
        for (var i = 0; i < span.length; i++) {
            span[i].innerHTML = question.one.options[i];
        }

        // if(value===0){
        //     score=score+5
        //     console.log(score);

        // }
        // if(incre===2){
        //     return counter++;
        //     console.log(counter);
        // }
        return counter++;

    }

    if (counter === 2) {


        console.log(counter);
        if (value === 1) {
            score = score + 5
            console.log(score);
        }
        document.getElementById("main").innerHTML = question.two.qtwo;
        for (var i = 0; i < span.length; i++) {
            span[i].innerHTML = question.two.options[i];
        }
        //  if(value===1){
        //         score=score+5
        //         console.log(score);

        //     }
        return counter++;

    }



    if (counter === 3) {
        console.log(counter);
        if (value === 2) {
            score = score + 5
            console.log(score);
        }
        document.getElementById("main").innerHTML = question.three.qthree;
        for (var i = 0; i < span.length; i++) {
            span[i].innerHTML = question.three.options[i];
        }
        //  if(value===1){
        //         score=score+5
        //         console.log(score);

        //     }
        return counter++;
    }



    if (counter === 4) {
        console.log(counter);
        if (value === 0) {
            score = score + 5
            console.log(score);
        }
        document.getElementById("main").innerHTML = question.four.qfour;
        for (var i = 0; i < span.length; i++) {
            span[i].innerHTML = question.four.options[i];
        }
        //  if(value===1){
        //         score=score+5
        //         console.log(score);

        //     }
        return counter++;

    }



    if (counter === 5) {
        console.log(counter);
        if (value === 2) {
            score = score + 5
            console.log(score);
        }
        document.getElementById("main").innerHTML = question.five.qfive;
        for (var i = 0; i < span.length; i++) {
            span[i].innerHTML = question.five.options[i];
        }
        //  if(value===1){
        //         score=score+5
        //         console.log(score);

        //     }
        return counter++;

    }
    if (counter === 6) {
        console.log(counter);
        if (value === 1) {
            score = score + 5
            console.log(score);
        }
        document.getElementById("main").innerHTML = question.six.qsix;
        for (var i = 0; i < span.length; i++) {
            span[i].innerHTML = question.six.options[i];
        }
        //  if(value===1){
        //         score=score+5
        //         console.log(score);

        //     }
        return counter++;

    }
    if (counter === 7) {
        console.log(counter);
        if (value === 0) {
            score = score + 5
            console.log(score);
        }
        document.getElementById("main").innerHTML = question.seven.qseven;
        for (var i = 0; i < span.length; i++) {
            span[i].innerHTML = question.seven.options[i];
        }
        //  if(value===1){
        //         score=score+5
        //         console.log(score);

        //     }
        return counter++;

    }
    if (counter === 8) {
        console.log(counter);
        if (value === 0) {
            score = score + 5
            console.log(score);
        }
        document.getElementById("main").innerHTML = question.eight.qeight;
        for (var i = 0; i < span.length; i++) {
            span[i].innerHTML = question.eight.options[i];
        }
        //  if(value===1){
        //         score=score+5
        //         console.log(score);

        //     }
        return counter++;

    }
    if (counter === 9) {
        console.log(counter);
        if (value === 1) {
            score = score + 5
            console.log(score);
        }
        document.getElementById("main").innerHTML = question.nine.qnine;
        for (var i = 0; i < span.length; i++) {
            span[i].innerHTML = question.nine.options[i];
        }
        //  if(value===1){
        //         score=score+5
        //         console.log(score);

        //     }
        return counter++;

    }
    if (counter === 10) {
        console.log(counter);
        if (value === 1) {
            score = score + 5
            console.log(score);
        }
        document.getElementById("main").innerHTML = question.ten.qten;
        for (var i = 0; i < span.length; i++) {
            span[i].innerHTML = question.ten.options[i];
        }
        //  if(value===1){
        //         score=score+5
        //         console.log(score);

        //     }
        return counter++;

    }
    if (counter === 11) {
        console.log(counter);
        if (value === 2) {
            score = score + 5
            console.log(score);
        }
        document.getElementById("main").innerHTML = question.eleven.qeleven;
        for (var i = 0; i < span.length; i++) {
            span[i].innerHTML = question.eleven.options[i];
        }
        //  if(value===1){
        //         score=score+5
        //         console.log(score);

        //     }
        return counter++;

    }
    if (counter === 12) {
        console.log(counter);
        if (value === 1) {
            score = score + 5
            console.log(score);
        }
        document.getElementById("main").innerHTML = question.twelve.qtwelve;
        for (var i = 0; i < span.length; i++) {
            span[i].innerHTML = question.twelve.options[i];
        }
        //  if(value===1){
        //         score=score+5
        //         console.log(score);

        //     }
        return counter++;

    }
    if (counter === 13) {
        console.log(counter);
        if (value === 0) {
            score = score + 5
            console.log(score);
        }
        document.getElementById("main").innerHTML = question.thirteen.qthirteen;
        for (var i = 0; i < span.length; i++) {
            span[i].innerHTML = question.thirteen.options[i];
        }
        //  if(value===1){
        //         score=score+5
        //         console.log(score);

        //     }
        return counter++;

    }
    if (counter === 14) {
        console.log(counter);
        if (value === 0) {
            score = score + 5
            console.log(score);
        }
        document.getElementById("main").innerHTML = question.forteen.qforteen;
        for (var i = 0; i < span.length; i++) {
            span[i].innerHTML = question.forteen.options[i];
        }
        //  if(value===1){
        //         score=score+5
        //         console.log(score);

        //     }
        return counter++;

    }
    if (counter === 15) {
        console.log(counter);
        if (value === 1) {
            score = score + 5
            console.log(score);
        }
        document.getElementById("main").innerHTML = question.fifteen.qfifteen;
        for (var i = 0; i < span.length; i++) {
            span[i].innerHTML = question.fifteen.options[i];
        }
        document.getElementById("button").style.display = "none";
        button2.style.display = "none";
        resultbtn.style.display = "block";
        //  if(value===1){
        //         score=score+5
        //         console.log(score);

        //     }

    }
}


function finalresult() {
    clearInterval(abc);
    resultbtn.style.display = "none";
    document.getElementById("button2").style.display = "block";

    for (var i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            value = radio[i].value;
            value = parseInt(value);
        }
    }
    if (value === 1) {
        score = score + 5
        console.log(score);
    }
    score = (score / 75) * 100;
    score = score.toFixed(2);
    if (score >= 65) {
        displayres.innerHTML = "Congratulations!" + "<br>" + "You are passed" + "<br>" + "Your Score is " + score + "%" + "<br>" + "Your total time is " + timerheading.innerHTML;
    }
    else if (score < 65) {
        displayres.innerHTML = "Try Again!" + "<br>" + "You are failed" + "<br>" + "Your Score is " + score + "%" + "<br>" + "Your total time is " + timerheading.innerHTML;
    }
    displayres.style.display = "block";
    document.getElementById("main").style.display = "none";
    for (var i = 0; i < radio.length; i++) {
        document.getElementsByClassName("radio")[i].style.display = "none";

    }
    for (var i = 0; i < span.length; i++) {
        span[i].style.display = "none";
    }
    timerheading.innerHTML = "00:00:00</h1>"

}



var user = document.getElementById("username");
var pass = document.getElementById("password");

function signup() {
    if (user.value != "" && pass.value != "") {
        localStorage.setItem("username", user.value);
        localStorage.setItem("password", pass.value);
        output.innerHTML = "Sign Up Successfully"
        user.value = "";
        pass.value = "";
        window.location.href = "signin/signin.html";
    }
    else {
        user.value = "";
        pass.value = "";
        output.innerHTML = "Please Enter Both Field"
    }
}
var loginuser = document.getElementById("loginusername");
var loginpass = document.getElementById("loginpassword");
var output = document.getElementById("output");
var localuser;
var localpassword;
function signin() {
    localuser = localStorage.getItem("username");
    localpassword = localStorage.getItem("password");


    if (localuser == loginuser.value && localpassword == loginpass.value) {

        window.location.href = "../index/index.html";
        localuser = "";
        localpassword = "";
    }

    else {
        output.innerHTML = "Login Unsuccessful";
        loginuser.value = "";
        loginpass.value = "";
    }
}


var sec = document.getElementById("sec");
var min = document.getElementById("min");
var hr = document.getElementById("hour");
var timerheading = document.getElementById("timerheading");
var second = 0;
var minute = 0;
var hour = 0;

var timer = 0;
function stopwatch() {
    timer++;
    if (timer == 1) {
        setInterval(abc, 1000);
    }
}


function abc() {
    second++;

    if (second < 10) {
        sec.innerHTML = "0" + second;
    }
    if (second >= 10) {
        sec.innerHTML = second;
    }
    if (second == 59) {
        sec.innerHTML = "00";
        second = 0;
        minute++;

        if (minute < 10) {
            min.innerHTML = '0' + minute;
        }

        if (minute >= 10) {
            min.innerHTML = minute;
        }
        if (minute == 59) {
            sec.innerHTML = "00";
            minute = 0;
            hour++;
            if (hour < 10) {
                hr.innerHTML = '0' + hour;
            }

            if (hour >= 10) {
                hr.innerHTML = hour;
            }
        }
    }
}


