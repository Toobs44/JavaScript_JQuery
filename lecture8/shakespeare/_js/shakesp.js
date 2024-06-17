$(document).ready(function(){
    $('#links img').each(function(){
        var strtImg = $(this).attr('src');
        var hvrImg = new Image();
        var imgExt = /(\.\w{3,4}$)/;
        hvrImg.src=strtImg.replace(imgExt,'_ovr$1'); //$1 refers to the 1st parameter of replace() - imgExt, in this case 
        $(this).hover(
            function(){
                $(this).attr('src',hvrImg.src);
            },
            function(){
                $(this).attr('src',strtImg);
            }
        )// end hover
    }) // end each
});