window.onload=function(){
	var user = document.getElementById('username'); 
	var studentnum = document.getElementById('studentnum');
	var Register = document.getElementById('Registers');
	var conten = document.getElementById('conten');
	var psd = document.getElementById('password');
	var name_length = 0;
	var password_length = 0;
	var reg = new RegExp("^[0-9]*$");

	user.onfocus = function(){
		conten.style.visibility="visible";
	};
	user.onblur = function(){
		name_length=this.value.length;
		// alert(name_length);
		// var re=/[^\w\u4e00-\u9fa5]/g;
		var re =/[\u4e00-\u9fa5]/;
;		// var re = /[0-9]/;
		if(this.value==""){
			conten.innerHTML='<i class="err"></i>不能为空!';
		}
		else if(!re.test(this.value)){
			conten.innerHTML='<i class="err"></i>姓名只可以为中文'; 
		}
		else if(name_length <2){
			conten.innerHTML='<i class="err"></i>请确认名字是否正确';
		}
		else
			conten.innerHTML='<i class="ok"></i>  ';
	}
	studentnum.onfocus = function(){
		if (user.value.length == 0) {
			conten.innerHTML='<i class="err"></i>请先输入姓名'; 
			
			
		}else{
			conten2.style.visibility="visible";

		}
		
	};
	studentnum.onblur=function(){
		stuNuml = this.value.length; 
		// var num1= /\s/;//空格判断
		// var re = /[0-9]/;
		if(this.value==""){
			conten2.style.visibility="visible";
			conten2.innerHTML='<i>不能为空!</i>';
		}
		else if(!reg.test(this.value)){
			conten2.innerHTML='<i class="err"></i>学号只可以为数字!';
		}
		else if (stuNuml != 12) {
						conten2.innerHTML='<i class="err"></i>学号位数错误!';
		}
		else{
			conten2.innerHTML='<i class="OK"></i> ';
		}
	};
	psd.onfocus = function(){
		// if(this.value==""){
			conten3.style.visibility="visible";
			// conten3.innerHTML='<i class="err"></i>不能为空!';
			// alert("88");
		// }
	};
	psd.onblur = function(){
		// conten3.style.display="none";
		// alert(password_length);
		password_length = this.value.length;
		// alert(password_length);
		if (this.value==="") {
			conten3.innerHTML='<i class="err"></i>不能为空!';
		}
		else if ( password_length > 16 ||password_length<6) {
			conten3.innerHTML='<i class="err"></i>密码长度应为6-16位!';
		}
		else
		{
			conten3.innerHTML='<i class="err"></i> ';

		}
		// var num1= /\s/;//空格判断
		// if (num1.test(this.value)) {
		// 	conten3.innerHTML='<i class="err"></i>密码含有空格!'
		// };
	}
	// console.log(Register)
	Registers.onsubmit = function(){		
			var username = user.value;
			var stuNum = studentnum.value;
			var password = psd.value;
			password_length= password.length;
			name_length = studentnum.value.length;
			var name_d =/[\u4e00-\u9fa5]/;
			if (username ==="") {
				alert("姓名为空");
				Register.username.focus();
				return false;
			}
			else if (!name_d.test(username)) {
				alert("姓名只可以为中文");
				Register.username.focus();
				return false;
			}
			if (stuNum ==="") {
				alert("学号为空,请填写学号。");
				Register.studentnum.focus(); 
				return false;
			}else if (!reg.test(stuNum)) {
				alert("学号只可以为数字");
				Register.studentnum.focus(); 
				return false;
			}
			else if (name_length !=12) {
				alert("学号位数有误");
				Register.studentnum.focus();
				return false;
			}
			if (password ==="") {
				alert("密码为空,请输入密码。");
				Register.password.focus(); 
				return false;
			}
			else if (password_length<6) {
				alert("密码长度过短！");
				Register.password.focus();
				return false;
			}else if (password_length>16) {
				alert("密码长度过长！");
				Register.password.focus();
				return false;
			}
			// alert("学号" + username + "登陆成功！");
	};
};