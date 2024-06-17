$(document).ready(function(){
    $('tbody tr').mouseover(function(){
        $(this).addClass("hilite")
    });

    $('tbody tr').mouseout(function(){
        $(this).removeClass("hilite")
    });
});