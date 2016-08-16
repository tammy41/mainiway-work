//高级搜索显示和隐藏
$(function(){

    Highly();

    $('.high-btn').click(function(){

        if($('.highSearch').is(':hidden')){
            $('.highSearch').show();
            Highly();
        }else{
            $('.highSearch').hide();
            Highly();
        }

    });

    $('.closeSearch-btn').click(function(){
        $('.highSearch').hide();
        Highly();
    });

});




//下拉菜单
$(function(){

    $(document).bind('click',function(){
        $('.dropDown').hide();
    });

    $('.status').click(function(e){
        stopPropagation(e);
        var dd = $(this).next('.dropDown');
        if(dd.is(':hidden')){
            dd.show();
        }else{
            dd.hide();
        }

    });

    $('.dropDown li').click(function(){
        var Text = $(this).text();
        var tt= $(this).parent().prev('.status');
        tt.html(Text);
        $(this).parent().hide();
    })
});



// 自定义函数-------------------------------------------------------------------------------------------------------------------------------

//左边导航和主体高度一致
function Highly(){
    var h1 = $('.dealerCenter').height();
    var h2 = $('.dealerNav').height();
    console.log(h1)
    //console.log(h2)
    if(h1>=h2){
        $('.dealerNav').css('height',h1+30);
    }else{
        $('.dealerCenter').css('height',h2-30);
    }
}

//左边导航切换效果
function navSwitching(){
    var t = $('body').attr('tagert');
    if (t == '' || t == undefined) {
        t = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
    }
    $('.comNavList a[href*="' + t + '"]').addClass('navCurrent');

    $('.dealerNav>div:first-of-type a[href*="' + t + '"]').addClass('navCurrent');
}

//阻止事件冒泡
function stopPropagation(e) {

    if (e.stopPropagation)
        e.stopPropagation();
    else
        e.cancelBubble = true;
}