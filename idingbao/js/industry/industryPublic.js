//头尾部一些链接以及内容
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
    $('.loginicon li:nth-of-type(5) a').attr('href', 'shopCart.html');


    $('.navlist').append(
        '<li><a href="../../index.html" class="language_index">首页</a></li>'+
        '<li><a href="industry.html"  class="language_iDinIndustry hy">行业</a></li>'+
        '<li><a href="../design/designer.html" class="language_iDinDesign">设计</a></li>'+
        '<li><a href="../interactive/interactive.html" class="language_iDinSave">互动</a></li>'
    );

    $('.header-section').after(
        '<div class="childnavlist">'+
            '<div class="w1200">'+
            '<ul class="downList downList_1">'+

            '</ul>'+
                '<ul class="downList downList_2">'+
                '<li><a href="list_present.html" class="language_iDinGift">礼品</a></li>'+
                '<li><a href="list_car.html" class="language_iDinCar">汽车</a></li>'+
                '<li><a href="list_luxury.html" class="language_iDinLuxury">珠宝</a></li>'+
            '</ul>'+
            '<ul class="downList downList_3">'+
                '<li><a href="../design/designWorks.html" class="language_works">作品</a></li>'+
                '<li><a href="../design/designer.html" class="language_designers">设计师</a></li>'+
                '<li><a href="../design/machineDesign.html" class="language_onlineDesign">在线设计</a></li>'+
            '</ul>'+
            '<ul class="downList downList_4">'+
                '<li><a href="../interactive/find.html" class="language_find">发现</a></li>'+
                '<li><a href="../interactive/community.html" class="language_community">社区</a></li>'+
                '<li><a href="../interactive/hit.html" class="language_hit">众创</a></li>'+
            '</ul>'+
        '</div>'+
    '</div>'
    )

});


//头部个人中心效果
$(function(){
    $('.loginicon li:nth-of-type(4) a').hover(function(){
        $(this).css('background-color', '#ba123e');
        $('.personList').show();
    },function(){
        $('.personList').hide();
        $(this).css('background-color', '#db1856');
    });

    $('.personList').hover(function(){
        $(this).show();
        $('.loginicon li:nth-of-type(4) a').css('background-color', '#ba123e');
    },function(){
        $('.loginicon li:nth-of-type(4) a').css('background-color', '#db1856');
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
        changeImg.attr('src', imgSrc[index]);
    });

    // 汽车图片语言切换
    $('.Cn').click(function(){
        $('div.show .show_car').eq(0).prop('src','../../images/industry/car_show1.jpg')
    });

    $('.En').click(function(){
        $('div.show .show_car').eq(0).prop('src','../../images/industry/car_show1_1.jpg')
    })
}

$(function(){

    changeLanguage();

});


//order_car.html、order_luxury.html、order_present.html公用js部分开始------提交订单部分效果
$(function () {
    // 点击确认定制
    $('.language_confirmOrder').on('click', function () {
        $(this).hide();
        $('.language_joinShopCart').show();
        var colorIndex = $('div[t="selectColor"]')[0];
        if (colorIndex != undefined) {
            colorIndex = $(colorIndex).attr('v');
        }
        $('.chooseOrder').hide(0, function () {
            $('.completeOrder').show(0);
        });
    });

    $('.language_joinShopCart').on('click', function () {
        window.location.href = 'shopCart.html';
    });

    $('.Language_back').on('click', function (e) {
        $('.completeOrder').hide(0);
        $('.language_joinShopCart').hide(0);
        $('.language_confirmOrder').show(0);
        $('.chooseOrder').show();
    });

    $('.colorblue').on('click', function () {
        changeColor('colorblue', 1);
    });

    $('.colorgreen').on('click', function () {
        changeColor('colorgreen', 2);
    });

});

function changeColor(cs, v) {
    $($('div[t="selectColor"]')[0]).attr('v', v);
    $($('div[t="selectColor"]')[0]).html($('.' + cs).find('div')[1].innerHTML);
}
function addNum(isAdd) {
    var t = $($('.num').find('input')[0]);
    if (t.val() == '') {
        t.val('1');
    } else {
        var reg = /^\+?[1-9][0-9]*$/;
        if (!reg.test(t.val())) return;
        if (t.val() == 1 && !isAdd) {
            return;
        } else {
            t.val(parseInt(t.val()) + (isAdd ? 1 : -1));
        }
    }
}
function checkNum() {
    var t = $($('.num').find('input')[0]);
    var reg = /^\+?[1-9][0-9]*$/;
    if (!reg.test(t.val())) {
        t.addClass('error');
    } else {
        t.removeClass('error');
    }
}
//order_car.html、order_luxury.html、order_present.html公用js部分结束------提交订单部分效果
