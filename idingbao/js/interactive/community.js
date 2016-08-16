
$(function(){
	 // 导航
    $('.nav li').hover(function(){
        $(this).addClass('on').siblings().removeClass('on')
    });

    // 分享
    $(document).bind('click',function(){
        $('.sharesList').css('display','none');
    });
    $('.icons i').click(function(e){
        stopPropagation(e);
        $(this).toggleClass('on').next('.sharesList').toggle().parents('.list>li').siblings('li').find('.sharesList').hide();
    })
});
