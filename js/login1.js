window.onload=function(){
	var user = document.getElementById('username'); 
	var psd = document.getElementById('psd');
	var login = document.getElementById('login');
	var conten = document.getElementById('conten');
	var conten2 = document.getElementById('conten2');
	var register = document.getElementById('register');
	var Login = document.getElementById("Login");
	var name_length = 0;
	var password_length = 0;
	var reg = new RegExp("^[0-9]*$");
	user.onfocus = function(){
		conten.style.display="inline";
	};
	user.onblur = function(){
		name_length=this.value.length;
		// alert(name_length);
		// var re=/[^\w\u4e00-\u9fa5]/g;
		
		if(this.value==""){
			conten.innerHTML='<i class="err"></i>不能为空!';
		}
		else if(!reg.test(this.value)){
			conten.innerHTML='<i class="err"></i>学号只可以为数字'; 
			
		}
		else if(name_length != 12){
			conten.innerHTML='<i class="err"></i>学号必须是12位数!';
		}
		else{
			conten.innerHTML='<i class="ok"></i>';
			}
	}
	psd.onfocus = function(){
		if (user.value.length == 0) {
			conten.innerHTML='<i class="err"></i>请先输入学号';  
			// alert("");
			
		}else{
			conten2.style.display="inline";
		}
		
	};
	psd.onblur=function(){
		password_length = this.value.length; 
		var num1= /\s/;//空格判断
		if(this.value==""){
			conten2.style.display="inline";
			conten2.innerHTML='<i class="err"></i>不能为空!';
		}
		else if(num1.test(this.value)){
			conten2.innerHTML='<i class="err"></i>含有空格!';
		}
		else{
			conten2.innerHTML='<i class="OK"></i>';
		}
	};
	// login.onMouseOver = function(){
	// 	// if(booblepsd == 1 && booblenum == 1){
	// 	// 	login.disabled =false;
	// 	// 	// alert("25245");
	// 	// }
	// 	alert("25245");
	// };
	// login.onclick = function(){
		
	// 	{
	// 		alert("登陆成功");
	// 	}	
		
	// };
	Login.onsubmit = function(){		
			var usrename = user.value;
			var password = psd.value;
			if (usrename==="") {
				alert("学号为空,请填写学号。");
				Login.studentnum.focus(); 
				return false;
			}else if (!reg.test(usrename)) {
				alert("学号只可以为数字");
				Login.studentnum.focus(); 
				return false;
			}
			else if (name_length !=12) {
				alert("学号位数有误");
				Login.studentnum.focus();
				return false;
			}
			if (password ==="") {
				alert("密码为空,请输入密码。");
				Login.password.focus(); 
				return false;
			}
			// alert("学号" + username + "登陆成功！");
	};
};