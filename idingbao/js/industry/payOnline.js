$(function () {

    window.onload = function () {
        //var ck1 = document.getElementById('fullpayment'),
        //ck2 = document.getElementById('earnestmoney');
        //var lbl1 = document.getElementById('lbl_fullpayment'),
        //    lbl2 = document.getElementById('lbl_earnestmoney');
        //ck1.onclick = function (e) {
        //    lbl2.style.color = '#ccc';
        //    lbl2.className = '';
        //    lbl1.style.color = '#198ee0';
        //    lbl1.className = 'checked';
        //}
        //ck2.onclick = function (e) {
        //    lbl2.style.color = '#198ee0';
        //    lbl2.className = 'checked';
        //    lbl1.style.color = '#ccc';
        //    lbl1.className = '';
        //}

        //$('#payment').find('input');
        var payment = $('#payment');
        $('input', payment).on('click', function () {
            $('input[checked="checked"]', payment).attr('checked', false);
            $(this, payment).attr('checked', true);
            $('.checked').css('color', '#ccc').removeClass('checked');
            $(this).next().css('color', '#198ee0').addClass('checked');
        });


        //labels = document.getElementById('payment').getElementsByTagName('label');
        //radios = document.getElementById('payment').getElementsByTagName('input');
        //for (i = 0, j = labels.length ; i < j ; i++) {
        //    labels[i].onclick = function () {
        //        if (this.className == '') {
        //            for (k = 0, l = labels.length ; k < l ; k++) {
        //                labels[k].className = '';
        //                radios[k].checked = false;
        //                labels[k].style.color = '#198ee0';
        //            }
        //            this.className = 'checked';
        //            labels[i].siblings().style.color = '#ccc';
        //            try {
        //                document.getElementById(this.name).checked = true;
        //            } catch (e) { }
        //        }
        //    }
        //}
    };
    var payment_obj = { 'Fullpayment': '付全款', 'earnestmoney': '先付定金' };

    $('.payList li:first-of-type input').attr('checked', true);
    $('.payList li input').click(function () {
        //$(this).children('input').attr('checked', true).parent().siblings().children('input').attr('checked', false);
        //var i = $(this).parent().index();
        $(this).attr('checked', true).parent().siblings().children('input').attr('checked', false);
        $(this).attr

    })
});
$(function () {
    $('#lbl_earnestmoney').click(function () {
        $('#storepay').show();
        $('#onlinepay').hide();
    })
    $('#lbl_fullpayment').click(function () {
        $('#onlinepay').show();
        $('#storepay').hide();
    })
})


//点击门店按钮跳弹出框
$(function () {
    $('.restorepay_btn').click(function () {
        $('.storepay').show();
    });
    $(".payclose").click(function () {
        $(".storepay").hide();
    });
})
//点击在线付款按钮跳弹出框
$(function () {
    $('.gorepay_btn').click(function () {
        $('.onlinepaytip').show();
    });
    $(".payclose").click(function () {
        $(".onlinepaytip").hide();
    });
})

