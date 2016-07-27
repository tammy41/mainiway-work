//头部标题
$(function(){
    $('.titleName').html('');
    $('.titleName').append('<span class="language_billing"></span>');
});


$(function () {

    //地址选择效果
    $('.address div:eq(0) input').attr("checked", true);
    $('.address div:eq(0)').css({
        'border': '1px solid #2f9de8',
        'box-shadow': '0 0 10px 2px rgba(20, 144, 231, .15)'
    });

    $(".address input[type='checkbox']").click(function () {

        $(this).attr("checked", true).parent().siblings().children().attr("checked", false);
        $(this).parent('div').css({
            'border': '1px solid #2f9de8',
            'box-shadow': '0 0 10px 3px rgba(20, 144, 231, .15)'
        }).siblings('div').css({
            'border': '1px solid #d1d1d1',
            'box-shadow': 'none'
        })
    });

    //点击删除按钮，删除地址
    $('.delete').click(function () {
        $(this).parent('.address div').css('display', 'none');
    });

    $('.selectAddress').click(function (e) {
        stopPropagation(e);
    });

    var a = 0;
    //支付方式选择
    $('.onlinePay').click(function(){
        a = 1;
        //console.log(a)
        $('.selectAddress').hide();

        $(this).css({
            'border': '1px solid #2f9de8',
            'color': '#2f9de8',
            'box-shadow': '0 0 10px 3px rgba(20, 144, 231, .15)'
        }).siblings().css({
            'border': '1px solid #d1d1d1',
            'color': '#777',
            'box-shadow': 'none'
        });


    });

    $(document).bind('click',function(){
        $('.selectAddress').css('display','none');
    });
    $('.selectAddress').hide();
    $('.outlinePay').click(function (e) {
        a = 2;
        //console.log(a)
        stopPropagation(e);

        $('.selectAddress').toggle();

        $(this).css({
            'border': '1px solid #2f9de8',
            'color': '#2f9de8',
            'box-shadow': '0 0 10px 3px rgba(20, 144, 231, .15)'
        }).siblings().css({
            'border': '1px solid #d1d1d1',
            'color': '#777',
            'box-shadow': 'none'
        });

        $('.selectAddress').css({
            'display': 'block'
        });

    });

    $('.selectAddress ul li').click(function(){
        a = 2;
        $('.selectAddress').css('display', 'none');
    });

    $('.submitOrder').bind('click',function(){

        if(a==0){
            alert("请选择支付方式")
        }else if(a==1){
            $(this).attr('href','payOnline.html');
        }else if(a==2){
            $(this).attr('href', 'outLinesuccess.html');
        }

    });
});

//弹窗效果
//定制详情
$(function(){
	$("#check_Custom_details").click(function(){
		$(".Custom_details").show();
	});
	$(".addAddress").click(function(){
		$(".Add_receipt_address").show();
	});
	$("#Dealer_details").click(function(){
		$(".Select_dealer").show();
	});
	$(".closebtn").click(function(){
		$(".Popup").hide();
	})
})
