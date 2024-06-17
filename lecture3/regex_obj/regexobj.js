function checkEmail(address){
    //check user input for a valid email and report success or failure.
    //var testString = "www.john44@example.com";// for testing.
    // emailReg variable to check if its valid
    var emailReg = /^\w[-._\w]*\w@\w[._\w]*\w\.\w{2,8}$/;

    // compare variables
    if(!address.match(emailReg)){
        var fail = "Sorry, that is not a validly formatted email address.";
        return fail;// return the fail string.
    }else
        var succes = "Nice job, the email address you submitted was "+ address;
        return succes;//return the success string.
}

function checkPhone(number){
    //check user input for a valid phone number(with area code) and report success or failure.
    //var testString = "111-222-1234";// for testing.
    // emailReg variable to check if its valid
    var phoneReg = /^\(?(\d{3})\)?[ -.](\d{3})[ -.](\d{4})$/;

    // compare variables
    if(!number.match(phoneReg)){
        var fail = "Sorry, that is not a validly formatted phone number.";
        return fail;// return the fail string.
    }else
        var succes = "Nice job, the phone number you submitted was "+ number;
        return succes;//return the success string.
}