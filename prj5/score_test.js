function DevScore()
{
        //The questions asked to the students.
    var questions = ["Aims Community College offers a Full Stack Web Developer Certificate.",
    "Full Stack means you know front end languages such as HTML, CSS, and Javascript as well as a back end stack such as PHP/MySQL and how to make it all to work together.",
    "The C++ language can be run in a browser.",
    "JavaScript is a strongly and statically typed language.",
    "Boolean, String, and Integer are variable types that are supported in JavaScript."];

    // the correct answers for the questions
    var answerKeys = ["T","T","F","F","T"];

    //store answers in a variable.
    // is that what really is happening here?
    // what is this for?
    var sAnswers = new Array(questions.length);
    //use a score variable to keep track of correct answers
    var score = 0;
    for(var i = 0; i < questions.length; i++)
    {
        var response = prompt(questions[i]);// is this storing the users answer

        // check if in the right format otherwise reset question.
        if(response == "" || response == null)
        {
            alert("Please answer with T or F");
            i--;
            continue;
        }

        // increase score when is right.
        if(response.toUpperCase() == answerKeys[i])
            {
                score++;
            }
    }
    // get a percentage by multiplying the 'score' with 
    var percentage = (score / answerKeys.length) * 100;

    // return the percetage
    return percentage;
}