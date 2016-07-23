$(function () {

    if (document.getElementById('home') == null) {
        // 动态插入header
        var divObj = document.createElement("div");
        divObj.className = 'header';
        var headerHtml = getHtml(true);
        divObj.innerHTML = headerHtml;
        var first = document.body.firstChild;
        document.body.insertBefore(divObj, first);

        // 动态插入footer
        var divObj = document.createElement("div");
        divObj.className = 'footer';
        var headerHtml = getHtml(false);
        divObj.innerHTML = headerHtml;
        document.body.appendChild(divObj);

    }

});

function getHtml(isHeader) {
    var html;
    if (isHeader)
        html = '<div class="header-section main clearfix">'+
            '<h1 class="logo"><a href="javascript:;" style="float:left;">LOGO</a></h1>' +
            '<span class="titleName"></span>'+
            '<ul class="navlist">'+
               
            '</ul>'+
            '<div class="loginicon clearfix">'+
                //用户登录和注册之前
                '<div class="logAndReg">'+
                    '<a href="javascript:;" class="login">登录</a>'+
                    '<i>/</i>'+
                    '<a href="javascript:;" class="register">注册</a>'+
                '</div>'+
                //用户登录成功之后
                '<div class="logAndRegSuccess">' +
                    '<span>Kevin</span>'+
                    '<a href="javascript:;" onclick="bindDropOutEvent();">退出</a>'+
                '</div>'+
                '<a href="javascript:;" class="aboutUs">关于我们</a>'+
            '</div>'+
            '<ul class="personList">' +
                '<li><a href="javascript:;" class="language_mySpecialdesign">我的定制</a></li>'+
                '<li><a href="javascript:;" class="language_myDesign">我的设计</a></li>'+
                '<li><a href="javascript:;" class="">我的退货</a></li>'+
                '<li><a href="javascript:;" class="">商品评价</a></li>'+
                '<li><a href="javascript:;" class="">我的足迹</a></li>'+
            '</ul>'+
        '</div>';
    else
        html = '<div class="infooter">' +
            '<div class="footer_left">' +
                '<dl>' +
                    '<dt class="language_knowMore">了解更多</dt>' +
                    '<dd class="language_privacyAndCookie">隐私声明和Cookie</dd>' +
                    '<dd class="language_clause">使用条款</dd>' +
                '</dl>' +
                '<dl>' +
                    '<dt class="language_information">有关信息</dt>' +
                    '<dd class="language_advertising">广告</dd>' +
                '</dl>' +
            '</div>' +
            '<a class="AppStore clearfix" href="../../apk/iDinBao_iOS_0.0.1.2016.04.18_Alpha.ipa"><img src="../../images/public/inphone.png" alt=""/><p>Available on the</p><span>App  Store</span></a>'+
            '<a class="Android clearfix" href="../../apk/iDinBao_Android_0.0.1.2016.04.18_Alpha.apk"><img src="../../images/public/Android.png" alt=""/><p>Available on</p><span>Android Market</span></a>'+
            '<div class="footer_right">' +
                '<img src="../../images/public/footer_log.png" />' +
            '</div>' +
        '</div>';
    return html;
}

//登录成功后头部个人中心悬浮效果
$(function(){
    $('.logAndRegSuccess span').hover(function(){
        $(this).css('background-color', '#ba123e');
        $('.personList').show();
    },function(){
        $('.personList').hide();
        $(this).css('background-color', '#db1856');
    });

    $('.personList').hover(function(){
        $(this).show();
        $('.logAndRegSuccess span').css('background-color', '#ba123e');
    },function(){
        $('.logAndRegSuccess span').css('background-color', '#db1856');
        $(this).hide();
    })
});