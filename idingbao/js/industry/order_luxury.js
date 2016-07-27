$(function () {
    $('.imgcontainer span').on('mouseover', function () {
        var i = $(this).index() + 1;
        $('.imgzoom>img').attr('src', '../../images/industry/luxury_pic' + i + '.jpg');
    });
});

$(function () {
    // 钻石左右滑动
    $('.slider-wrap .right').click(function () {
        var mleft = parseInt($('.slider').css('margin-left'));
        var len = $('.slider li').length;
        var n = mleft - 480;
        if (len * 96 + mleft > 480) {
            $('.slider').animate({
                'margin-left': n
            }, 300)
        }

    });
    $('.slider-wrap .left').click(function () {
        var mleft = parseInt($('.slider').css('margin-left'));
        var n = mleft + 480;
        if (mleft < 0) {
            $('.slider').animate({
                'margin-left': n
            }, 300)
        }
    })


    // 条件筛选
    $('.filter').click(function () {
        $(this).toggleClass('open');
        $('.conditions').toggle()
    });

    $('.argu a').click(function () {
        $(this).parent().next('.abs').toggle();
    });
});

/***************************************** 说明 ********************************************

 需要确定的问题
 1、有多少组件？组件很多的话，得分包存储，在预加载的时候，分批加载。
 2、命名定义，比如车体颜色目录名称定义、部件目录名称定义。
 3、记录，需要跟后台人员确定JSON规则。
 4、showLuxury中的图片为ajax动态加载

 ******************************************************************************************/

// 起始位置，是否变换，视角个数(多少张视角图)，当前视角
var startX = 0, canMove = false, viewCount = 3, viewIndex = 1, currentColor = 1, currentRing = 1;
$(function () {
    // 初始默认加载车型
    //initImg();
});

function changeColor(c) {
    currentColor = c;
    changeImg();
}
function changeRing(r) {
    currentRing = r;
    changeImg();
}

// 加载图片
function initImg() {
    var url = window.location.href.split('/html/')[0]+'/json/showRing.json';
    $.getJSON(url, function (data) {
        var result = data;//eval('(' + json + ')');
        var html = [];
        var imgs = data.img.split(',');
        for (var i = 0; i < imgs.length; i++) {
            html.push('<img src="../../images/industry/luxuryImg/' + data.path + '/' + imgs[i] + '" style="display:none;position:absolute;" />');
        }

        html.push('<div style="width:100%;height:100%;position: absolute;"></div>');
        $('#showLuxury').html(html.join(' '));

        // 初始默认加载车型
        loadImg(true, viewIndex);
    });
}

// 加载图片，加载顺序为：主图、颜色、轮毂、大灯、刻字
// oldViewIndex：旧视角位置
function loadImg(isFirstTime, oldViewIndex) {
    if (!isFirstTime) {
        // 隐藏旧视角
        $('#showLuxury img[src*="' + oldViewIndex + '.jpg"]').css('display', 'none');
    }
    // 显示主图
    $('#showLuxury img[src*="' + viewIndex + '.jpg"]').css('display', 'block');
}

function changeImg() {
    // 更换图片
    $('#showLuxury img').each(function () {
        var fileName = $(this).attr('src').substring($(this).attr('src').lastIndexOf('/'));
        $(this).attr('src', '../../images/industry/luxuryImg/' + currentColor + '/' + currentRing + fileName);
    });
}

// 鼠标点击事件
function down(e) {
    if (e.target.parentElement != null && e.target.parentElement.id == 'showLuxury') {
        startX = e.clientX; // 设置移动初始位置
        canMove = true; // 设置开始移动
    }
}

// 鼠标移动事件
function move(e) {
    // 如果：在移动鼠标、移动位置的是车的图片、移动位置与初始位置不同
    if (canMove == true && e.target.parentElement != null && e.target.parentElement.id == 'showLuxury' && e.clientX != startX) {
        if (e.clientX < startX && ((startX - e.clientX) / 5 > 0 && (startX - e.clientX) % 5 == 0)) { // 向左每移动3像素，则更换1个视角
            var oldViewIndex = viewIndex;
            viewIndex++; viewIndex = viewIndex == (viewCount + 1) ? 1 : viewIndex;
            loadImg(false, oldViewIndex);
            startX = e.clientX;
        }
        else if (e.clientX > startX && ((e.clientX - startX) / 5 > 0 && (e.clientX - startX) % 5 == 0)) { // 向右每移动3像素，则更换1个视角
            var oldViewIndex = viewIndex;
            viewIndex--; viewIndex = viewIndex == 0 ? viewCount : viewIndex;
            loadImg(false, oldViewIndex);
            startX = e.clientX;
        }
    }
}

// 鼠标放开事件
function up(e) {
    canMove = false; // 取消开始移动
}
// 监听事件
document.addEventListener('mousedown', down);
document.addEventListener('mousemove', move);
document.addEventListener('mouseup', up);

//点击颜色、戒托等按钮
$(function(){
    $('.argu a').click(function(){
        $(this).parents('.argu').next('.arguDown').toggle().siblings('.arguDown').hide();
    });
    /*$('.abs .ds li').click(function(){
        $('.abs').css('display', 'none');
    })*/
});