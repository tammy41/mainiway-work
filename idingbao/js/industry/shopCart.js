$(function () {
    // 全选
    $('.conTitle input[type="checkbox"],.bilMoney input[type="checkbox"]').click(function () {
        var t = this;
        $('input[tag="son"]').each(function () {
            this.checked = t.checked;
        });
        $('.bilMoney input[type="checkbox"]')[0].checked = this.checked;
        $('.conTitle input[type="checkbox"]')[0].checked = this.checked;
        totalPrice();
    });

    // 单个选
    $('input[tag="son"]').each(function () {
        $(this).on('change', function (cbx) {
            totalPrice();
            isCheckAll();
        });
    });

    // 加数量
    $(".addQuantity").click(function () {
        var t = $(this).prev();
        t.val(parseInt(t.val()) + 1);
        setPrice(t);
    });

    // 减数量
    $(".deleteQuantity").click(function () {
        var t = $(this).next();
        if (t.val() > 1) {
            t.val(parseInt(t.val()) - 1);
            setPrice(t);
        }
    });
});

// 是否勾选全选
function isCheckAll() {
    var t = 0;
    var c = $('input[tag="son"]');
    c.each(function () {
        if (this.checked == true) t++;
    });
    if (t == c.length) {
        $('.bilMoney input[type="checkbox"]')[0].checked = true;
        $('.conTitle input[type="checkbox"]')[0].checked = true;
    } else {
        $('.bilMoney input[type="checkbox"]')[0].checked = false;
        $('.conTitle input[type="checkbox"]')[0].checked = false;
    }
}

// 计算总价和总数
function totalPrice() {
    var c = 0, total = 0;
    $('input[id*="gl_"]').each(function () {
        if (this.checked == true) {
            var index = this.id.split('_')[1];
            c = parseInt(c) + parseInt($('#quantity_' + index).val());
            total = (parseFloat(total) + parseFloat($('#totalPrice_' + index).text())).toFixed(2);
        }
    });
    if (total != undefined) {
        $('.total_Price').text(total);
        $('.quantity').text(c);
    }
}

// 小计
function setPrice(t) {
    var index = t[0].id.split('_')[1];
    var singlePrice = parseFloat($('#singlePrice_' + index).text()).toFixed(2);
    var count = parseInt($('#quantity_' + index).val());
    $('#totalPrice_' + index).text((singlePrice * count).toFixed(2));

    totalPrice();
}

//头部标题
$(function () {
    $('.titleName').html('');
    $('.titleName').append('<span class="language_shopCart"></span>');
});


//优惠券弹出框
$(function () {
    $('.cp_shopcard').click(function () {     
        var type = $('.cardpopbox').css("display");
        if (type == "none") {
            $(".cardpopbox").show();
        }
        else if (type == "block") {
            $(".cardpopbox").hide();
        }
        
    })
});

$(function () {
    $('.cp_btn').click(function () {
        $(this).text("已领取");
        $(this).css("background-color", "grey");
    })
})
