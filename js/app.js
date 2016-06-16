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
            correctAnswer: 2     
        }
    ];

var questionNumber = 0;
var correctAnswers = 0;

$(document).ready(function(event){
    $(".main").hide();
    $(".opening-text").show();

    $("body").on('click', '.start-button', function(event){
        $(".main").hide();
        $(".questions-text").show();
        nextQuestion();
    });

    $(".answer-choices").on('click', '.choices', function(event){
        if (questionNumber !== 5) {
        questionNumber++;
        nextQuestion();
        } 
        else {
            $(".main").hide();
            $(".results-text").show();
        }
    }); 



    // on click to submit answer
        // increment question number
        // iterate to next question
        // adjust corrects answers var
});


    // Hide Quiz game and Show Results
    // function hideMain() {
    // }

    // Load next question and answers
    function nextQuestion() {
        $(".question").text(questionsArr[questionNumber].questionText);
        $(".question-number").text("Question " + (questionNumber + 1) + " of 5");
        $(".answer-choices").empty();
        var totalAnswers = 4;
        for (var i = 0; i < totalAnswers; i++) {
            var newAnswerList = "<input class='choices' type='radio' value=" + i + ">" + questionsArr[questionNumber].answerChoices[i] + "<br>";
            $(".answer-choices").append(newAnswerList);
        }
    }

// // Add to question counter and check if right answer
// function questionCounter(){
// }








// Spoiler Alert
// Requirements:
//     Requires the user to answer at least five questions
//     Shows each question one at a time
//     Tells the user each question's number and how many questions remain
//     Prevents the user from skipping questions
//     Gives the user some way to answer each question
//     Compares the user's answer, and the correct answer to determine a score
//     Displays the user's final score once all questions have been answered
//     Allows the user to start a new game once all questions have been answered
//     Uses objects to represent the questions and answers
// Extra:
//     Shows the user their current score as they move through the quiz
//     Shows the user if their response is correct or not when they answer each question
//     Display the correct answer if the user guessed incorrectly
//     Display some information related to the correct answer
//     Instead of a standard multiple choice quiz, build a personality quiz
