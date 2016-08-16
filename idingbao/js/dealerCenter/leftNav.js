//头部加载
$(function(){
    if (document.getElementById('home') == null) {
        // 动态插入header
        var divObj = document.createElement("div");
        divObj.className = 'header';
        var headerHtml = getHtml(true);
        divObj.innerHTML = headerHtml;
        var first = document.body.firstChild;
        document.body.insertBefore(divObj, first);

    }
});


//左边导航加载
$(function(){
    var  navHtml = getNavHtml(true);
    //console.log(typeof navHtml)
    $('.dealerCenter').before(navHtml);
    Highly();
    navSwitching();
});


// 自定义函数---------------------------------------------------------------------------------------------------------------

function getHtml(isHeader) {
    var html;
    if (isHeader)
        html = '<header>'+
            '<div class="headerbox clearfix" >'+
                '<img src="../../images/factoryCenter/logo.png" class="logoimg">'+
                '<h3>经销商中心</h3>'+
                '<a href="javascript:void(0);">退出</a>'+
                '<span>&nbsp;Hi&nbsp;,&nbsp;John</span>'+
                '<span>2016年5月12日 12:30</span>'+
            '</div>'+
        '</header>';
    else
        html = null;

    return html;
}



function getNavHtml(isNav) {
    var html;
    if (isNav)
        html = '<div class="dealerNav fl">'+
            '<div>'+
                '<a href="dealerCenter_index.html">首页</a>'+
            '</div>'+
            '<div>'+
                '<a href="javascript:void(0);">交易管理</a>'+
                '<ul class="comNavList">'+
                '<li><a href="dealerOrder2.html">订单管理</a></li>'+
                '</ul>'+
            '</div>'+
            '<div>'+
                '<a href="javascript:void(0);">客户服务</a>'+
                '<ul class="comNavList">'+
                    '<li><a href="dealerComment.html">试乘试驾</a></li>'+
                    '<li><a href="dealerCharge.html">充电桩管理</a></li>'+
                    '<li><a href="dealerOrder.html">退货管理</a></li>'+
                '</ul>'+
            '</div>'+
            '<div>'+
                '<a href="javascript:void(0);">报表统计</a>'+
                '<ul class="comNavList">'+
                    '<li><a href="dealerSale.html">销售概况</a></li>'+
                '</ul>'+
            '</div>'+
            '<div>'+
                '<a href="javascript:void(0);">基础资料</a>'+
                '<ul class="comNavList">'+
                    '<li><a href="dealerInfo.html">经销商信息</a></li>'+
                    '<li><a href="dealerCenter_SecuritySetting.html">安全设置</a></li>'+
                '</ul>'+
            '</div>'+
        '</div>';
    else
        html = null;

    return html;
}