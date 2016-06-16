$(document).ready(function(event){
    // displays opening section
    $(".main").hide();
    $(".opening-text").show();

    // displays questions section
    $("body").on('click', '.start-button', function(event){
        $(".main").hide();
        $(".questions-text").show();
        nextQuestion();
    });

    // changes to next question
    $(".answer-choices").on('click', '.choices', function(event){
        checkAnswer();
        // before last question
        if (questionNumber !== 4) {
            // iterate to next question and display
            questionNumber++;
            nextQuestion();
        } 
        // on last question - displays results
        else {
            $(".main").hide();
            $(".results-text").show();
            $(".score").text("You got " + answersCorrect + " correct!");
        }
    }); 

    // replay game
    $("body").on('click', '.play-again', function(event){
        questionNumber = 0;
        answersCorrect = 0;
        $(".main").hide();
        $(".questions-text").show();
        nextQuestion();
    });

});

// variables
var questionNumber = 0;
var answersCorrect = 0;
var totalAnswers = 4;

// functions
function nextQuestion() {
    // prints question texts
    $(".question").text(questionsArr[questionNumber].questionText);
    // prints question number
    $(".question-number").text("Question " + (questionNumber + 1) + " of 5");
    // deletes existing answer choices and prints new choices
    $(".answer-choices").empty();
    for (var i = 0; i < totalAnswers; i++) {
        var newAnswerList = "<input class='choices' name='choices' type='radio' value=" + i + ">" + questionsArr[questionNumber].answerChoices[i] + "<br>";
        $(".answer-choices").append(newAnswerList);
    }
}

function checkAnswer() {
    var userAnswer = $('.answer-choices').find('input[name=choices]:checked').val();
    if (userAnswer == questionsArr[questionNumber].correctAnswer) {
        answersCorrect += 1;
    }
}

// questions array
var questionsArr = [
// question 1 
    {
        questionText: "What location didn’t Walter and Jesse not cook in?",
        answerChoices: ["A laundromat", "The high school lab", "An RV", "People’s homes"],
        correctAnswer: 1
    },
// question 2
    {
        questionText: "Who killed Gus?",
        answerChoices: ["Jesse", "Hector", "Walter jr.", "Saul"],
        correctAnswer: 1
    },
// question 3
    {
        questionText: "What writer is quoted in the small book Hank finds in Walters bathroom?",
        answerChoices: ["Walt Whitman", "George R.R Martin", "Jayden Smith", "Edgar Allan Poe"],
        correctAnswer: 0
    },
// question 4
    {
        questionText: "How does Walter know Jesse?",
        answerChoices: ["Met him at a riding go-karts", "Former racquetball partners", "Skylar’s former lover", "Walter was his chemistry teacher"],
        correctAnswer: 3
    },
// question 5
    {
        questionText: "What is Jesse’s favorite word?",
        answerChoices: ["Noodles!", "B*tch!", "Dawg", "Zoinks!"],
        correctAnswer: 1   
    }
];

function rightAnswer() {
    $("#yeah")[0].volume = 0.3;
    $("#yeah")[0].load();
    $("#yeah")[0].play();
};

// Extra:
//     Shows the user their current score as they move through the quiz
//     Shows the user if their response is correct or not when they answer each question
//     Display the correct answer if the user guessed incorrectly
//     Display some information related to the correct answer
//     Instead of a standard multiple choice quiz, build a personality quiz
