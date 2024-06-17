/*Select the second list item in the second list on the page.
    Apply a color of #900, and bold the text.
    Output the nodeValue of the contents of this list item to the
    page using the innerHTML property.*/
    function getNValue(){
        var ulistItems = document.getElementsByTagName("ul");
        var lis = ulistItems[1].getElementsByTagName('li');
        
        var listTwo = lis[1];//stores the second Item of list 2. 
        listTwo.style.color = "#900";
        listTwo.style.fontWeight = "bold";
       
        var nv = lis[1].childNodes[0].nodeValue;// this gets the text of the list 2 item?
        var lastP = document.querySelector("body > p:last-child");
        lastP.innerHTML = nv;
    }
    window.onload = getNValue;