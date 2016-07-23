/*内容居中*/
$(function () {

    var imgSrc = ['images/public/china.png', 'images/public/uk.png', 'images/public/germany.png'];
    var changeImg = $('.i-lanChange img');

    //地区和语言切换
    function stopPropagation(e) {
        if (e.stopPropagation)
            e.stopPropagation();
        else
            e.cancelBubble = true;
    }

    $(document).bind('click',function(){
        $('.languageChange').css('display','none');
    });

    //中英文切换
    $('.i-lanChange').bind('click',function(e){
        stopPropagation(e);
        $(".languageChange").fadeToggle();
    });

    $('.languageSelect li').click(function(){

        var index = $(this).index();
        console.log(imgSrc[index]);

        changeImg.attr('src', imgSrc[index]);
    });

    //点击行业跳出来的也居中显示
    var offsetHeight = $('.indexLink').offset().top+60+"px";

    $('.product').css('top', offsetHeight);


    $(document).click(function(){
        $('.product').css('display', 'none');
    });

    $('.f-one').click(function(e){
        stopPropagation(e);
        $('.product').fadeToggle();
    })
});
