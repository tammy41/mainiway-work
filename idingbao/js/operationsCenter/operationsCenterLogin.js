$(function(){
	
	$('#btn_opbtn,.btn_login').click(function(){
		var username = $('#fcusername').val();
    	var password = $('#fcpassword').val();
		var param={
			"param": '{"ACCOUNT":"' + username + '","PASSWORD":"' + password + '"}'
		}
		if(password=='' || username==''){
			alert('用户名或密码必填')
		}else{
			$.ajax({
				data:param,
				type:'POST',
				dataType:'jsonp',
				contentType: "charset=utf-8;",
	            jsonp: "callback",//jsonp名
				url:'http://10.99.2.65:8803/idinbaooperate/login/checkLogin',
				success:function(res){
					console.log(res)
					if (res.reCode == 2000){window.location.href = "../operationsCenter/operationsCenter_index.html";}
	                else{
	                    $('.fc_loginremind').html(res.reDescr).show()
	                }
	               
				}
			})
		}
		
	})

})