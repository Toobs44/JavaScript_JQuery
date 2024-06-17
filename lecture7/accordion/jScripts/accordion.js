$(function(){
    $('#main_content div').hide();//add a class for easy reference.
    $('.hilite').click(
        function(){
            $(this).next('div').toggle();
            $(this).toggleClass('close');
        }
       /* function(){
            $(this).next('div').hide();
        }*/
    );//end of toggle.*/
});//end of function.