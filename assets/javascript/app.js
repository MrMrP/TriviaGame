//On PageLoad display will be be shown the Starting page which will have a "Lets Get Started Button" that will initialize the game//
$("document").ready(function(){
    $(".trivia").hide();
    $("#time-left").hide();

//Function for countdown Time used for duration of game//
getAnswer()
    

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

var userAnswer = newDiv;
var newDiv;
var uAnswer = [
    getAnswer()
] 

function getAnswer(){
    $("send-button").submit();
    return;
    // $(document).$("#quiz")  
};

// var userAnswer = submit();  
// console.log(userAnswer);

// function submit() {
// $("#final").click(function (){
//     $(document).("#quiz")
// console.log(userAnswer);



    console.log(qAnswers);
    console.log(userAnswer)



//User answers will then be compared to the 'answer sheet'. Users will then recieve a pop alert indicate the amount of questions answers correct/incorrect///

