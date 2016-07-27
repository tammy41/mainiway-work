$(function(){
    $('.navlist li a').hover(function(){
        $('.childnavlist').show();
        $(this).css('background', '#ba124e').parent().siblings().children().css('background', '#db1856');
        var i = $(this).parent().index();
        $('.childnavlist ul').eq(i).show().siblings('ul').hide();
    });

});