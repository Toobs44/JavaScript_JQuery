/*
    select the last <li> element on the page
    change the text color to #900.
    bold the text.
*/
function getSelect(){
    var ulistItems = document.getElementsByTagName("ul");// create an array of both ul tags
    var list = ulistItems[1].getElementsByTagName("li");// create an array of the li tags in the second ul
    list[3].style.color = "#900";// change the color of the 4th list tag
    list[3].style.fontWeight = "bold";// bold the text of the 4th list tag
}

window.onload = getSelect;