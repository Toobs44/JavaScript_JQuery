function randomQuote(){
    mtQuotes=["The political and commercial morals of the United States are not merely food for laughter, they are an entire banquet.",
    "Every one is a moon, and has a dark side which he never shows to anybody.",
    "The man who does not read good books has no advantage over the man who can't read them.",
    "Grief can take care of itself, but to get the full value of a joy you must have somebody to divide it with.",
    "I've suffered a great many catastrophies in my life. Most of them never happened."]
    //use a random method with math.floor * 5 to get a number from 0 to 4.
    // use the random number as a index for the array
    var randNum = Math.random() * 5;
    var index = Math.floor(randNum);
    var quote = mtQuotes[index];
    return quote;
}