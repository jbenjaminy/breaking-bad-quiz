$(document).ready(function(event){
    // DISPLAYS OPENING SECTION
    $(".main").hide();
    $(".opening-text").show();

    // DISPLAYS QUESTIONS SECTION
    $("body").on('click', '.start-button', function(event){
        $(".main").hide();
        $(".questions-text").show();
        nextQuestion();
    });

    // CHANGES TO NEXT QUESTION
    $(".answer-choices").on('click', '.choices', function(event){
        checkAnswer();
        // before last question
        if (questionNumber !== 4) {
            // iterate to next question and display
            questionNumber++;
            nextQuestion();
        } else {
            // on last question - displays results & plays sound clip
            $(".main").hide();
            $(".results-text").show();
            $(".score").text("You got " + answersCorrect + " correct!");
            soundClip();
        }
    }); 

    // REPLAY GAME
    $("body").on('click', '.play-again', function(event){
        questionNumber = 0;
        answersCorrect = 0;
        $(".main").hide();
        $(".questions-text").show();
        nextQuestion();
    });


/*---------- VARIABLES ----------*/

    var questionNumber = 0;
    var answersCorrect = 0;
    var totalAnswers = 4;

     // QUESTIONS ARRAY
    var questionsArr = [
    // question 1 
        {
            questionText: "Walt and Jesse cooked in all of these locations, except:",
            answerChoices: ["A laundromat", "The high-school lab", "Jesse's RV", "Random people’s homes"],
            correctAnswer: 1
        },
    // question 2
        {
            questionText: "Who killed Gus?",
            answerChoices: ["Jesse Pinkman", "Hector Salamanca", "Walter Jr.", "Saul Goodman"],
            correctAnswer: 1
        },
    // question 3
        {
            questionText: "Which writer did Gale Boetticher quote in his lab notebook?",
            answerChoices: ["Walt Whitman", "George RR Martin", "Jaden Smith", "Edgar Allan Poe"],
            correctAnswer: 0
        },
    // question 4
        {
            questionText: "How did Walt know Jesse?",
            answerChoices: ["Met him riding go-karts", "Former racquetball partners", "Skylar had an affair with Jesse", "Walt was Jesse's teacher"],
            correctAnswer: 3
        },
    // question 5
        {
            questionText: "What is Jesse’s favorite word?",
            answerChoices: ["Noodles!", "B*tch!", "Dawg", "Zoinks!"],
            correctAnswer: 1   
        }
    ];


/*---------- FUNCTIONS ----------*/
    
    // DISPLAY NEXT QUESTION 
    function nextQuestion() {
        // prints question texts
        $(".question").text(questionsArr[questionNumber].questionText);
        // prints question number
        $(".question-number").text("Question " + (questionNumber + 1) + " of 5");
        // deletes existing answer choices and prints new choices
        $(".answer-choices").empty();
        for (var i = 0; i < totalAnswers; i++) {
            var newAnswerList = "<input class='choices' name='choices' type='radio' value=" + i + ">" + " " + questionsArr[questionNumber].answerChoices[i] + "<br>";
            $(".answer-choices").append(newAnswerList);
        }
    };

    // CHECKS IF ANSWER IS CORRECT
    function checkAnswer() {
        var userAnswer = $('.answer-choices').find('input[name=choices]:checked').val();
        if (userAnswer == questionsArr[questionNumber].correctAnswer) {
            answersCorrect += 1;
            soundClip2();
        }
    };

    // SOUND CLIPS
    function soundClip() {
        $("#yeah")[0].volume = 0.4;
        $("#yeah")[0].load();
        $("#yeah")[0].play();
    };

    function soundClip2() {
        if (questionNumber < 4) {        
            $("#right")[0].volume = 1.0;
            $("#right")[0].load();
            $("#right")[0].play();
        }
    };   
});