$(document).ready(function(){
    $('#tabSet').tabs({
        show: 'fadeIn',
        hide: 'fadeOut'
    });
});

// Bmi object
var BMI=
{
    // declare object variables for height and weight.
    H: 0,// height object
    W: 0,// weight object
    //method to retieve and store values
    input_values: function()
    {
        //input height from prompt
        BMI.H = prompt("Please enter your height in inches.","");
        //input weight from prompt
        BMI.W = prompt("Please enter your weight in pounds.","");
        
        //call the method within the object that will calculate the two inputs.
        BMI.calc_BMI();
    },
        
    //the method the converts the inputs to values that will be calculated into BMI.
    calc_BMI: function()
    {
        //height will be covered to meters squared for the the BMI calculations.
        meters_sqrd = (BMI.H * 0.0254) ** 2;
        //weight will be convered to kilograms.
        kilos = BMI.W * 0.4536;
        //calculate the BMI 
        BMI_value = (kilos / meters_sqrd).toFixed(2);
        //format the output to the page.
        message="<table width=\"300\" border=\".2\"  ><tr align=\"center\"><td>Weight</td><td>"+BMI.W+"</td></tr>"
        message +="<tr align=\"center\"><td>Height</td><td>"+BMI.H+"</td></tr>"
        message +="<tr align=\"center\"><td>BMI</td><td>"+BMI_value+"</td></tr></table>"
        message +="<tr align=\"center\">"+
        "<input type=\"button\" value=\"Get BMI\" onclick=\"BMI.input_values();\" />"+
        "</tr></table>"
        document.getElementById('boop').innerHTML = message;
    }    


};