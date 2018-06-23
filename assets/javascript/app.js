//On PageLoad display will be be shown the Starting page which will have a "Lets Get Started Button" that will initialize the game//
$("document").ready(function(){
    $(".trivia").hide();
    $("#time-left").hide();

//Function for countdown Time used for duration of game//

var number = 30;
var intervalId;
// to make countdown start once Start BUtton is clicked// 
$("#startButton").on("click", run);
     function run() 
     {
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
    }

    //  The decrement function.
    function decrement() {
    //  Decrease number by one.
    number--;

    //  Show the number in the #show-number tag.
    $("#time-left").html("<h2>" + number + "</h2>");
    //  Once number hits zero...
      if (number === 0) {
     //  ...run the stop function.
        stop();
    //  Alert the user that time is up.
        alert("Time Up!");
      }
    }

    //  The stop function
    function stop() {

      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
    }

    //  Execute the run function.
    run();
// getAnswer()
    

//Upon clicking the "Lets Get Started" Button. Page will change and display the question form for players to submit answers ///

$("#startButton").click(function (){
    $(".jumbotron").hide();
    $(".trivia").show();
    $("#time-left").show();

$("#send-button").click(function (){
    event.preventDefault();   

});
}); 
});   

//Allow user to select the answer of their choice and upon clikcing the submit button will store the answers in an array//
var quizAnswers  = [
     "true",
     "C",
     "C",
    "true",
     "D",
     "true",
     "A",
     "true"
];

var userAnswers = [];

function getAnswer(){

    var rightAnswers = 0;
    var wrongAnswers = 0;

    //event.preventDefault();
    var questionOne = 
    document.querySelector('input[name = "q1"]:checked').value;
    userAnswers.push(questionOne);
    if (quizAnswers[0] == userAnswers[0]) {
        rightAnswers++;
    } else {
        wrongAnswers++;
    }
    

    var questionTwo = 
    document.querySelector('input[name = "q2"]:checked').value;
    userAnswers.push(questionTwo);
    if (quizAnswers[1] == userAnswers[1]) {
        rightAnswers++;
    } else {
        wrongAnswers++;
    }

    var questionThree = 
    document.querySelector('input[name = "q3"]:checked').value;
    userAnswers.push(questionThree);
    if (quizAnswers[2] == userAnswers[2]) {
        rightAnswers++;
    } else {
        wrongAnswers++;
    }

    var questionFour = 
    document.querySelector('input[name = "q4"]:checked').value;
    userAnswers.push(questionFour);
    if (quizAnswers[3] == userAnswers[3]) {
        rightAnswers++;
    } else {
        wrongAnswers++;
    }

    var questionFive = 
    document.querySelector('input[name = "q5"]:checked').value;
    userAnswers.push(questionFive);
    if (quizAnswers[4] == userAnswers[4]) {
        rightAnswers++;
    } else {
        wrongAnswers++;
    }

    var questionSix = 
    document.querySelector('input[name = "q6"]:checked').value;
    userAnswers.push(questionSix);
    if (quizAnswers[5] == userAnswers[5]) {
        rightAnswers++;
    } else {
        wrongAnswers++;
    }

    var questionSeven = 
    document.querySelector('input[name = "q7"]:checked').value;
    userAnswers.push(questionSeven);
    if (quizAnswers[6] == userAnswers[6]) {
        rightAnswers++;
    } else {
        wrongAnswers++;

    }

    var questionEight = 
    document.querySelector('input[name = "q8"]:checked').value;
    userAnswers.push(questionEight);
    if (quizAnswers[7] == userAnswers[7]) {
        rightAnswers++;
    } else {
        wrongAnswers++;
    }
   



    // $("#a").val().trim();
    // if (questionOne.value != null && questionOne.value != undefined)
    // {
        
    // } else {
    //     userAnswers.push("");
    // }

console.log(userAnswers);
console.log(rightAnswers,wrongAnswers);
alert("You got: " + rightAnswers + " answers right" + "\nYou got: " + wrongAnswers + " answers wrong");

    // $(document).$("#quiz")  
};

 

// function CheckAnswers(quizAnswers, userAnswers, rightAnswers, wrongAnswers) {

// for (var i= 0; i < quizAnswers.length; i++) {

//     if (quizAnswers[i] === userAnswers[i]) {
//         rightAnswers++;
//     } else {
//         wrongAnswers++;
//     }}}
        
        // $(".results").show();
    // }
// }}

// var userAnswer = submit();  
// console.log(userAnswer);

// function submit() {
// $("#final").click(function (){
//     $(document).("#quiz")
// console.log(userAnswer);
