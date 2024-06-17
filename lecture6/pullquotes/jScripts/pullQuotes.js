//I think this goes here...
$(document).ready(function(){//A shortcut method is $(function() {});
    //this doesnt work...yet
    $('span.pq').each(function(){
        var quote = $(this).clone();
        quote.removeClass('pq');
        quote.addClass('boxit');
        $(this).before(quote);
    })
    $('a[href^="http://"]').addClass('outLink');// create the class of outLink for the <a> tags
});
