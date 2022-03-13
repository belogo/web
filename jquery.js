$(document).ready(function(){
    let c = 0;
    $('.counter').text(c);

    $('#inc').click(function(){
        c++;
        $('.counter').text(c);
    });
    $('#dec').click(function(){
        c--;
        $('.counter').text(c);
    });
});