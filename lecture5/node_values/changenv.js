/*Select the3rd list item in the second list
Change the link text to “NFL Website”
Change the URL to www.nfl.com. Test your changed 
link to be sure it works*/
function changeNV(){
    var ulistItems = document.getElementsByTagName("ul");// get list of ul tags
    var lis = ulistItems[1].getElementsByTagName('li');// get list of the li tags

    var link = lis[2].getElementsByTagName("a"); // get the a tag from the list
    link[0].childNodes[0].nodeValue = "NFL Website";
    link[0].href = "https://www.nfl.com";
    
    var nv = link[0].childNodes[0].nodeValue ; 
}
window.onload = changeNV;