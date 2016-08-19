//左边导航和主体高度一致
function Highly(){
    var h1 = $('.op_center').height();
    var h2 = $('.op_nav').height();
    if(h1>=h2){
        $('.op_nav').css('height',h1+30);
    }else{
        $('.op_center').css('height',h2-30);
    }
}


// 获取url上的id值，用来传入当前页面
 function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
}


function initAjax(href,param,callback1,callback2,callback3){
    $.ajax({
        data:param,
        type:'POST',
        dataType:'jsonp',
        contentType:"charset=utf-8;",
        jsonp: "callback",//jsonp名
        url:href,
        success:function(res){
            console.log(res)
            if(callback1){callback1(res)}
            if(callback2){callback2(res)}
            if(callback3){callback3()}
        }
    })
}


function addEvent(){
    //高级搜索显示和隐藏
    $(function(){

        $('.high-btn').click(function(){

            if($('.highSearch').is(':hidden')){
                $('.highSearch').show();
                Highly();
            }else{
                $('.highSearch').hide();
                Highly();
            }

            Highly();

        });

        $('.closeSearch-btn').click(function(){
            $('.highSearch').hide();
            Highly();
        });

        Highly();

    });


    //阻止事件冒泡
    function stopPropagation(e) {

        if (e.stopPropagation)
            e.stopPropagation();
        else
            e.cancelBubble = true;
    }



    //下拉菜单
    $(function(){

        $(document).bind('click',function(){
            $('.dropDown').hide();
        });

        $('.op_status').click(function(e){
            stopPropagation(e);
            var dd = $(this).next('.dropDown');
            if(dd.is(':hidden')){
                dd.parents('.op_select').siblings('.op_select').children('.dropDown').hide();
                dd.show().parents('li').siblings('li').find('.dropDown').hide();
            }else{
                dd.hide();
            }

        });


        $('.dropDown li').click(function(){
            var Text = $(this).text();
            var tt= $(this).parent().prev('.op_status');
            tt.html(Text);
            $(this).parent().hide();
        })
    });


}