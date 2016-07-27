//<!--  宽高  -->
            var config = {
                width: 680, 
                height: 300,
                params: { enableDebugging:"1" }
                
            };
            //<!-- 禁用右键  -->
            config.params["disableContextMenu"] = true;
            var u = new UnityObject2(config);

            jQuery(function() {

                var $missingScreen = jQuery("#unityPlayer").find(".missing");
                var $brokenScreen = jQuery("#unityPlayer").find(".broken");
                $missingScreen.hide();
                $brokenScreen.hide();
                
                u.observeProgress(function (progress) {
                    switch(progress.pluginStatus) {
                        case "broken":
                            $brokenScreen.find("a").click(function (e) {
                                e.stopPropagation();
                                e.preventDefault();
                                u.installPlugin();
                                return false;
                            });
                            $brokenScreen.show();
                        break;
                        case "missing":
                            $missingScreen.find("a").click(function (e) {
                                e.stopPropagation();
                                e.preventDefault();
                                u.installPlugin();
                                return false;
                            });
                            $missingScreen.show();
                        break;
                        case "installed":
                            $missingScreen.remove();
                        break;
                        case "first":
                        break;
                    }
                });
                u.initPlugin(jQuery("#unityPlayer")[0], "web.unity3d");
            });
            //<!-- JavaScript 调用 Unity的脚本  (脚本名:Main Camera   方法名:setFileURL  参数：http://www.xne110.tk/BMWModel.unity3d)-->
            //<!-- 加载车体 -->
            function downloadBody(){
                alert(u.getUnity());
            
                //alert(u.getUnity().SendMessage("Main Camera","setHttpURL","http://www.xne110.tk/BMWModel.unity3d"));
                u.getUnity().SendMessage("Main Camera","downloadBody","http://www.xne110.tk/web.WebPlayer.unity3d");
            }
            //<!-- 更换轮毂 -->
            function downloadWheelHub(url){
                u.getUnity().SendMessage("Main Camera","downloadWheelHub",url);
            }
            //<!-- 车体颜色替换(颜色为16进制) -->
            function colorReplacement(color){
                u.getUnity().SendMessage("Main Camera","colorReplacement",color);
            }
            
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