//Select only the <li> tags that are part of the “eventsList” id. 
/*Color the text in the <li>s orange and bold the text (the li containing the hyperlink
will exhibit the default link color and underline but will be bolded –that’s ok – not 
necessary to modify).*/
function getIds(){
    var eventListItems = document.getElementById("eventsList");// create the array from the eventsList id.
    // do I need to create an array or can I just apply the color change?
    //document.getElementById("eventsList").style.color = "orange";
    eventListItems.style.color = "orange";
    eventListItems.style.fontWeight = "bold";
}

window.onload = getIds;