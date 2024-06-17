function currentDate(){
    // create an empty date object named today.
    var today = new Date();
    // save the int value of the date
    var date = today.getDate();
    // save the year
    var year = today.getFullYear();
    // create an array with all twelve months.
    var monthsArray = ["January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "Semptember",
    "Octorber",
    "November",
    "December"];
    // Save the current getMonth value(0 to 11).
    var monthIndex = today.getMonth();
    // Use the index values to save the string of the array.
    var month = monthsArray[monthIndex];
    var theDate = month+" "+date+", "+year;
    return theDate;
}

function daysTillXmas(){
    //get current date
    var today = new Date();

    //save the date for christmas
    var xmas = new Date(today.getFullYear(), 11, 25);

    // find and save the difference of time from christmas
    var timeDiff = xmas.getTime() - today.getTime();
    // find and save the time into days
    var daysleft = Math.round(timeDiff / (1000 * 3600 * 24));

    return daysleft;
}