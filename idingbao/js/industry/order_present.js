$(function () {
    $('.imgcontainer span').on('mouseover', function () {
        var i = $(this).index()+1;
        $('.imgzoom>img').attr('src', '../../images/industry/present_pic' + i + '.jpg');
    });

    $('.Language_productDetail').on('click', function () {

    });
    $('.Language_ServicePolicy').on('click', function () {

    });
    $('.Language_UserEvaluation').on('click', function () {

    });

});

//点击颜色、刻字等按钮
$(function(){
    $('.argu>div:nth-of-type(2)').click(function(){
        $(this).parents('.argu').next('.arguDown').toggle().siblings('.arguDown').hide();
    });

    $('.arguDown .color').click(function(){
        $(this).parents('.arguDown').hide();
    })
});