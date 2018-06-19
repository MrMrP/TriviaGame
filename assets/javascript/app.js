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
var quizAnswers;
    qAnswers = [
     "true",
     "c",
     "c",
    "true",
     "d",
     "true",
     "a",
     "true"
];

var userAnswer = $("#quiz").val().trim();

// var userAnswer = newDiv;
// var newDiv;
// var uAnswer = [
//     getAnswer()
// ] 

// function getAnswer(){
//     $("send-button").submit();
//     return;
    
//     // $(document).$("#quiz")  
// };

// var userAnswer = submit();  
// console.log(userAnswer);

// function submit() {
// $("#final").click(function (){
//     $(document).("#quiz")
// console.log(userAnswer);



    console.log(qAnswers);
    console.log(userAnswer)



//User answers will then be compared to the 'answer sheet'. Users will then recieve a pop alert indicate the amount of questions answers correct/incorrect///

// if (qAnswer[i] === uAnswer[i]) {
//     $("rightAnswer").append(rightAnswer++, (++1))}
// else if(qAnswer[i] !== uAnswer[i]) 
//     {$("wrongAnswer").append(wrongAnswer, ++1);
//     $(".results").show();
//     }
