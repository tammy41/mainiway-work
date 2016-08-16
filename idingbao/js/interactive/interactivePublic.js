//头部一些链接以及内容
$(function(){

    $('.logo a').attr('href', '../../index.html');

    $('.personList li:nth-of-type(1) a').attr('href', '../userCenter/usercenter_myCustomMade.html');
    $('.personList li:nth-of-type(2) a').attr('href', '../userCenter/usercenter_myDesign.html');
    $('.personList li:nth-of-type(3) a').attr('href', '../userCenter/usercenter_myReturnGoods.html');
    $('.personList li:nth-of-type(4) a').attr('href', '../userCenter/usercenter_evaluate.html');
    $('.personList li:nth-of-type(5) a').attr('href', '../userCenter/usercenter_myTracks.html');

    $('.loginicon li:nth-of-type(1) a').attr('href', '../userCenter/usercenter_login.html');
    $('.loginicon li:nth-of-type(3) a').attr('href', '../userCenter/usercenter_register.html');
    $('.loginicon li:nth-of-type(4) a').attr('href', '../userCenter/usercenter_index.html');
    $('.loginicon li:nth-of-type(5) a').attr('href', '../industry/shopCart.html');

    $('.navlist').append(
        '<li><a href="../../index.html" class="language_index">首页</a></li>'+
        '<li><a href="../industry/industry.html"  class="language_iDinIndustry">行业</a></li>'+
        '<li><a href="../design/designer.html" class="language_iDinDesign sj">设计</a></li>'+
        '<li><a href="interactive.html" class="language_iDinSave jh">互动</a></li>'
    );

    $('.header-section').after(
        '<div class="childnavlist">'+
            '<div class="w1200">'+
                '<ul class="downList downList_1">'+

                '</ul>'+
                '<ul class="downList downList_2">'+
                    '<li><a href="../industry/list_present.html" class="language_iDinGift">礼品</a></li>'+
                    '<li><a href="../industry/list_car.html" class="language_iDinCar">汽车</a></li>'+
                    '<li><a href="../industry/list_luxury.html" class="language_iDinLuxury">珠宝</a></li>'+
                '</ul>'+
                '<ul class="downList downList_3">'+
                    '<li><a href="../design/designWorks.html" class="language_works">作品</a></li>'+
                    '<li><a href="../design/designer.html" class="language_designers">设计师</a></li>'+
                    '<li><a href="../design/machineDesign.html" class="language_onlineDesign">在线设计</a></li>'+
                '</ul>'+
                '<ul class="downList downList_4">'+
                    '<li><a href="find.html" class="language_find">发现</a></li>'+
                    '<li><a href="community.html" class="language_community">社区</a></li>'+
                    '<li><a href="hit.html" class="language_hit">众创</a></li>'+
                '</ul>'+
            '</div>'+
        '</div>'
    )
});


//头部个人中心效果
$(function(){
    $('.loginicon li:nth-of-type(4)').hover(function(){
        $(this).css('background', '#ba123e');
        $('.personList').show();
    },function(){
        $('.personList').hide();
        $(this).css('background', '#db1856');
    });

    $('.personList').hover(function(){
        $(this).show();
        $('.loginicon li:nth-of-type(4)').css('background', '#ba123e');
    },function(){
        $('.loginicon li:nth-of-type(4)').css('background', '#db1856');
        $(this).hide();
    })
});

//头部导航效果
$(function(){
    $('.navlist li a').hover(function(){
        $(this).css('background', '#ba124e').parent().siblings().children().css('background', '#db1856');
        var i = $(this).parent().index();
        $('.childnavlist ul').eq(i).show().siblings('ul').hide();
    });
});


//阻止事件冒泡
function stopPropagation(e) {

    if (e.stopPropagation)
        e.stopPropagation();
    else
        e.cancelBubble = true;
}

//中英德语言切换效果
function changeLanguage(){

    var imgSrc = ['../../images/public/china.png', '../../images/public/uk.png', '../../images/public/germany.png'];
    var changeImg = $('.i-lanChange img');

    $(document).bind('click',function(){
        $('.languageChange').css('display','none');
    });

    $('.i-lanChange').bind('click',function(e){
        stopPropagation(e);
        $(".languageChange").fadeToggle();
    });

    $('.languageSelect li').click(function(){

        var index = $(this).index();
        console.log(imgSrc[index]);

        changeImg.attr('src', imgSrc[index]);
    });
}

$(function(){

    changeLanguage();

});