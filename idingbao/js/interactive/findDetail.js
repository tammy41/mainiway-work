 $(function(){
        //轮播图
        var liLen=$('.box ul li').length;
        var liWidth=$('.box ul li').width();
        $('.next').click(function(){
            $('.prev').removeClass('no')
            var mg=parseInt($('.box ul').css('margin-left'))
            if(!$('.box ul').is(":animated")){
                if(Math.abs(mg)<liLen*liWidth-liWidth){
                    $('.box ul').animate({
                        'margin-left':mg-liWidth
                    })
                }
            }
            //如果到达最后一个，箭头变灰色
            if(Math.abs(mg)>=liLen*liWidth-liWidth*2){
                $(this).addClass('no')
            }

        })

        $('.prev').click(function(){
            $('.next').removeClass('no')
            var mg=parseInt($('.box ul').css('margin-left'))
            if(!$('.box ul').is(":animated")){
                if(mg<0){
                    $('.box ul').animate({
                        'margin-left':mg+liWidth
                    })
                }
            }
            //如果到达第一个，箭头变灰色
            if(Math.abs(mg)<=liWidth){
               $(this).addClass('no') 
            }
        })
    })