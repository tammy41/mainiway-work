

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
            dd.show();
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
  

// 限制字数
        function words_deal() {
    		$(".zinumber").text($(".textare1").val().length);
		}
		function words_deal2() {
    		$(".zinumber2").text($(".textare2").val().length);
		}