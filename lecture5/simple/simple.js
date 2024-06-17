//apply a #FF0000(red) color to the text of the first paragraph of the file.
/*apply a #00FF00 (green) color to the second list item on the page, bold the
 text, and increase the font size to 1.1em.*/

 function getItems(){
    var pItems = document.getElementsByTagName("p");// create array for the p tags.
    var listItems = document.getElementsByTagName("li");// creates array for the li tags.

    pItems[0].style.color = "red";
    listItems[1].style.color = "green";
    listItems[1].style.fontWeight = "bold";
 }

 window.onload = getItems;