$(function(){
    $('.childnavlist').hide();
    $('.navlist li a').hover(function(){
        $('.childnavlist').show();
        $(this).css('background', '#ba124e').parent().siblings().children().css('background', '#db1856');
        var i = $(this).parent().index();
        $('.childnavlist ul').eq(i).show().siblings('ul').hide();
    });

    $('.childnavlist').hover(function(){
        $(this).show();
    },function(){
        $(this).hide();
        $('.navlist li a').css('background', '#db1856');
    });

    $('.navlist li:first-of-type a').hover(function () {
        $('.childnavlist').hide();
    })
});