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

function getHtml(isHeader) {
    var html;
    if (isHeader)
        html = '<header>'+
            '<div class="headerbox" >'+
                '<img src="../../images/factoryCenter/logo.png" class="logoimg">'+
                '<h3>运营中心</h3>'+
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
        html = '<div class="op_nav fl">'+
            '<div>'+
                '<a href="operationsCenter_index.html">首页</a>'+
            '</div>'+
            '<div>'+
                '<a href="javascript:void(0);">基本资料</a>'+
                '<ul class="op_navList">'+
                    '<li><a href="brandsManagement.html">品牌管理</a></li>'+
                    '<li><a href="category.html">平台类目</a></li>'+
                '</ul>'+
            '</div>'+
            '<div>'+
                '<a href="javascript:void(0);">工厂管理</a>'+
                '<ul class="op_navList">'+
                    '<li><a href="factoryManagement.html">工厂管理</a></li>'+
                '</ul>'+
            '</div>'+
            '<div>'+
                '<a href="javascript:void(0);">店铺管理</a>'+
                '<ul class="op_navList">'+
                '<li><a href="shopManagement.html">店铺管理</a></li>'+
                '</ul>'+
            '</div>'+
            '<div>'+
                '<a href="javascript:void(0);">设计师管理</a>'+
                '<ul class="op_navList">'+
                    '<li><a href="designerManagement.html">设计师管理</a></li>'+
                '</ul>'+
            '</div>'+
            '<div>'+
                '<a href="javascript:void(0);">广告管理</a>'+
                '<ul class="op_navList">'+
                    '<li><a href="ad_adManagement.html">广告管理</a></li>'+
                    '<li><a href="ap_adPositionManagement.html">广告位管理</a></li>'+
                '</ul>'+
            '</div>'+
            '<div>'+
                '<a href="javascript:void(0);">内容管理</a>'+
                '<ul class="op_navList">'+
                    '<li><a href="ct_infoManagement.html">资讯管理</a></li>'+
                    '<li><a href="ct_noticeManagement.html">公告管理</a></li>'+
                    '<li><a href="ct_topicManagement.html">话题管理</a></li>'+
                    '<li><a href="ct_activeManagement.html">活动管理</a></li>'+
                    '<li><a href="ct_commentManagement.html">评论管理</a></li>'+
                '</ul>'+
            '</div>'+
            '<div>'+
                '<a href="javascript:void(0);">用户权限</a>'+
                '<ul class="op_navList">'+
                    '<li><a href="userManagement.html">用户管理</a></li>'+
                    '<li><a href="cm_characterManagement.html">角色管理</a></li>'+
                    '<li><a href="menuManagement.html">菜单管理</a></li>'+
                '</ul>'+
            '</div>'+
        '</div>';
    else
        html = null;

    return html;
}

$(function(){

    var  navHtml = getNavHtml(true);
    //console.log(typeof navHtml)
    $('.op_center').before(navHtml);

    Highly();
    navSwitching();

});

//左边导航切换效果
function navSwitching(){

    var t = $('body').attr('tagert');
    if (t == '' || t == undefined) {
        t = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
    }
    $('.op_navList a[href*="' + t + '"]').addClass('navCurrent');

    $('.op_nav>div:first-of-type a[href*="' + t + '"]').addClass('navCurrent');
}