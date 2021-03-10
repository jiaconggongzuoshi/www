$('#login-button').click(function (event) {
	var userName=document.getElementById("userName").value;  
    var pwd=document.getElementById("pwd").value;
    if(userName=="susu" &&  pwd=="susu"){
    	$('#h').text("点我进入");
		event.preventDefault();
		$('form').fadeOut(500);
		$('.wrapper').addClass('form-success');
		setTimeout(function(){location.href="BirthdayCake.html";},4000);
	}
	else{
		alert("用户名或密码不正确！");
	}
});
