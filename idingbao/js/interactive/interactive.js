    $(function(){
        $('#InteractiveTitleright a').click(function(){
            $(this).addClass('blueA').siblings().removeClass('blueA');
        });
        $('#InteractiveTitleright1 a').click(function(){
            $(this).addClass('redA').siblings().removeClass('redA');
        })
    })