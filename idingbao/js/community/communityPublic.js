$(function(){
    $('.logo a').attr('href', '../../index.html');

    $('.loginicon li:nth-of-type(1) a').attr('href', '../userCenter/usercenter_login.html');
    $('.loginicon li:nth-of-type(3) a').attr('href', '../userCenter/usercenter_register.html');
    $('.loginicon li:nth-of-type(4) a').attr('href', '../userCenter/usercenter_index.html');
    $('.loginicon li:nth-of-type(5) a').attr('href', '../industry/shopCart.html');

    $('.personList li:nth-of-type(1) a').attr('href', '../userCenter/usercenter_myCustomMade.html');
    $('.personList li:nth-of-type(2) a').attr('href', '../userCenter/usercenter_myDesign.html');
    $('.personList li:nth-of-type(3) a').attr('href', '../userCenter/usercenter_myReturnGoods.html');
    $('.personList li:nth-of-type(4) a').attr('href', '../userCenter/usercenter_evaluate.html');
    $('.personList li:nth-of-type(5) a').attr('href', '../userCenter/usercenter_myTracks.html');

    $('.logo').after(
        '<div class="centerName fl"></div>'+
        '<div class="personalNav fl"></div>'
    )
});

//头部导航部分
$(function(){
    $('.centerName').append(
        '<span>社区<span>'
    );

    $('.personalNav').append(
        '<a href="community_index.html" class="language_index">首页</a>\
        <a href="community_consultingList.html" class="">资讯</a>\
        <a href="community_topicList.html" class="">话题</a>\
        <a href="community_activityList.html" class="">活动</a>'
    );
});

//个人中心头部导航效果
/*function navSwitching(){
 var t = $('body').attr('tagert');
 if (t == '' || t == undefined) {
 t = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
 }
 $('.personalNav a[href*="' + t + '"]').addClass('navCurrent');

 $('.personalNav>a:first-of-type[href*="' + t + '"]').addClass('navCurrent');
 }*/

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