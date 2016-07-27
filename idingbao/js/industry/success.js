$(function(){

    $('.oL').css('display', 'none');

    $(document).ready(function(){
        //console.log(1)
        setTimeout(function () {
            $(".uL").hide();
        }, 1500);

        setTimeout(function(){
            $('.oL').show();
        }, 1500);

    });

});