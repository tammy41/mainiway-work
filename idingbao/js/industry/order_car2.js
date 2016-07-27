/***************************************** 说明 ********************************************

需要确定的问题
1、有多少组件？组件很多的话，得分包存储，在预加载的时候，分批加载。
2、命名定义，比如车体颜色目录名称定义、部件目录名称定义。
3、记录，需要跟后台人员确定JSON规则。
4、showCar中的图片为ajax动态加载

******************************************************************************************/

// 起始位置，是否变换，视角个数(多少张视角图)，当前视角
var startX = 0, canMove = false, viewCount = 24, viewIndex = 19;
$(function () {
    // 初始默认加载车型
    loadImg(true, viewIndex);
    //initImg();
});

// 加载图片
function initImg() {
    var url =window.location.href.split('/html/')[0]+'/json/showCar.json';
    $.getJSON(url, function (data) {
        var result = eval('(' + json + ')');
        var html = '';
        // 添加main
        var main = result.main.split(',');
        for (var i = 0; i < main.length; i++) {
            html += '<img src="../../images/industry/carImg/main/' + main[i] + '" style="display:none;position:absolute;" />';
        }
        // 添加颜色
        var colorPath = result.color.path;
        var colorImg = result.color.img.split(',');
        for (var i = 0; i < colorImg.length; i++) {
            html += '<img src="../../images/industry/carImg/component/color/' + colorPath + '/' + colorImg[i] + '" style="display:none;position:absolute;" />';
        }

        // 添加轮毂
        var wheelPath = result.wheel.path;
        var wheelImg = result.wheel.img.split(',');
        for (var i = 0; i < wheelImg.length; i++) {
            html += '<img src="../../images/industry/carImg/component/wheel/' + wheelPath + '/' + wheelImg[i] + '" style="display:none;position:absolute;" />';
        }
        html += '<div style="width:100%;height:100%;position: absolute;"></div>';
        $('#showCar').html(html);

        // 初始默认加载车型
        loadImg(true, viewIndex);
    });
}

// 加载图片，加载顺序为：主图、颜色、轮毂、大灯、刻字
// oldViewIndex：旧视角位置
function loadImg(isFirstTime, oldViewIndex) {
    if (!isFirstTime) {
        oldViewIndex = parseInt(oldViewIndex) < 10 ? '0' + parseInt(oldViewIndex) : oldViewIndex;
        viewIndex = parseInt(viewIndex) < 10 ? '0' + parseInt(viewIndex) : viewIndex;

        // 隐藏旧视角
        $('#showCar img[src*="' + oldViewIndex + '.png"]').css('display', 'none');
        // 隐藏颜色
        $('#showCar img[src*="' + oldViewIndex + '(1).png"]').each(function () {
            $(this).css('display', 'none');
        });
        // 隐藏轮毂
        $('#showCar img[src*="' + oldViewIndex + '(2).png"]').each(function () {
            $(this).css('display', 'none');
        });
    }

    // 显示主图
    $('#showCar img[src*="' + viewIndex + '.png"]').css('display', 'block');
    // 显示颜色
    $('#showCar img[src*="' + viewIndex + '(1).png"]').each(function () {
        $(this).css('display', 'block');
    });
    // 显示轮毂
    $('#showCar img[src*="' + viewIndex + '(2).png"]').each(function () {
        $(this).css('display', 'block');
    });
}

// 更换部件
// img:用来提取部件标志，比如轮毂图片命名为：x(2)。
// _p:部件图片顶级目录，比如轮毂我这里定义为wheel，其中有目录1、2、3，里边存储的是轮毂的图片。
function changeParter(img, _p) {
    // 获取标志
    var p = $(img).attr('src').substring($(img).attr('src').lastIndexOf('/') + 1).split('.')[0];
    var index = p.split('-')[0]; // 部件图片标志位
    var path = p.split('-')[1]; // 部件图片上级目录，这里有目录1、2、3。
    // 更换图片
    $('#showCar img[src*="(' + index + ')"]').each(function () {
        var fileName = $(this).attr('src').substring($(this).attr('src').lastIndexOf('/'));
        $(this).attr('src', '../../images/industry/carImg/component/' + _p + '/' + path + fileName);
    });
}

// 鼠标点击事件
function down(e) {
    if (e.target.parentElement != null && e.target.parentElement.id == 'showCar') {
        startX = e.clientX; // 设置移动初始位置
        canMove = true; // 设置开始移动
    }
}

// 鼠标移动事件
function move(e) {
    // 如果：在移动鼠标、移动位置的是车的图片、移动位置与初始位置不同
    if (canMove == true && e.target.parentElement != null && e.target.parentElement.id == 'showCar' && e.clientX != startX) {
        if (e.clientX < startX && ((startX - e.clientX) / 3 > 0 && (startX - e.clientX) % 3 == 0)) { // 向左每移动3像素，则更换1个视角
            var oldViewIndex = viewIndex;
            viewIndex++; viewIndex = viewIndex == (viewCount + 1) ? 1 : viewIndex;
            loadImg(false, oldViewIndex);
            startX = e.clientX;
        }
        else if (e.clientX > startX && ((e.clientX - startX) / 3 > 0 && (e.clientX - startX) % 3 == 0)) { // 向右每移动3像素，则更换1个视角
            var oldViewIndex = viewIndex;
            viewIndex--; viewIndex = viewIndex == 0 ? viewCount : viewIndex;
            loadImg(false, oldViewIndex);
            startX = e.clientX;
        }
        // 记录视角标志
        $('#test').html(viewIndex);
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


$(function(){
    //点击颜色、轮毂等按钮
    $('.argu a').click(function(){
        $(this).parents('.argu').next('.arguDown').toggle().siblings('.arguDown').hide();
    });

    //点击arguDown下面的选项，arguDown自动收缩上去。
    $('.arguDown a').click(function(){
        $(this).parents('.arguDown').hide();
    })

});