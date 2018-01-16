	function turnOn(eid){
			if (confirm("你确定删除么？")) {
				// alert(data['i'].id);
				// var tmp = data[i].id;
				
				window.location.href="superdeletelist.html?listID="+ eid +"   ";

			}
			else{
				return false;
			}			
		}
	window.onload=function(){
		//解释数据
		var data = JSON.parse(num);
		//获取发布class

		//获取关闭按钮id
		var close = document.getElementById("close");
		//获取遮罩层id
		var mask = document.getElementById('mask');
		// alert(data[0].id);
		for(var i = 0; i < data.length; i++){
			//获取书架祖父节点
			var content = document.getElementById('content');
			//创建一个父div
			var outDiv = document.createElement('div');
			outDiv.id = 'List' + i;//设置div的ID
			outDiv.className = 'bookList';//设置div的class
			var ul= document.createElement('ul');//创建一个ul
			//创建4个li标签
			var bookNameLi = document.createElement('li');//书名
			var bookLink = document.createElement('li');//链接
			var Delete = document.createElement('li');//删除
			var Compile = document.createElement('li');//编辑
			var inputCheck = document.createElement('li');//提交
			var a = document.createElement("a");
			var input = document.createElement("input");

			//内容并在li中添加a标签
			bookNameLi.innerHTML = "<a href='superbookCollect.html?listID="+data[i].id+"'> "+ data[i].listname + "</a> ";
			if(data[i].listhref!=""){
				bookLink.innerHTML = "<a id='linkhref"+i+"' href='"+app+"/Home/Student/choosebook.html?listID="+ data[i].listhref +"'>链接:"+server+app+"/Home/Student/choosebook.html?listID="+ data[i].listhref + "</a>";
			}
			else{
				bookLink.innerHTML = "<a id='linkhref"+i+"' href=''>链接: </a>";
			}
			// href='deletelist.php?listID="+data[i].id+"'
			var id = data[i].id;
			// alert(id);
			Delete.innerHTML = "<span id='del"+(i+1)+"'  onclick ='turnOn("+id+")'> 删除</span> ";
			Compile.innerHTML = "<a href='superBookEdit.html?listID="+data[i].id+"'>编辑</a>";
			inputCheck.innerHTML = "";
			//li所带属性
			bookNameLi.id = 'book'+(i+1);
			bookLink.id = 'link'+(i+1);
			Compile.id = 'edit' + (i+1);
			inputCheck.id = 'sends'+(i+1);
			bookNameLi.className = 'book';
			bookLink.className  = 'link';
			Compile.className = 'edit';
			inputCheck.className = 'sends';
			//input
			input.className = 'send';
			input.type= 'button';
			input.name = 'send' + (i+1);
			input.id= 'send' + (i+1);
			input.value = '发布';
			inputCheck.appendChild(input);
			//在删除哪里放个id自增
			Delete.id = 'delete' + (i+1);
			//在ul中添加Li
			ul.appendChild(bookNameLi);
			ul.appendChild(bookLink);
			ul.appendChild(Delete);
			ul.appendChild(Compile);
			ul.appendChild(inputCheck);
			outDiv.appendChild(ul);
			content.appendChild(outDiv);
		}
		// console.log(data);
		// for(i=0;i<data.length;i++){
			// var del = document.getElementById("del"+(i+1)+"");
			// console.log(data[i].id);
			// var id = data[i].id;
		
		//D_触发遮罩层
		var send = $(".send");
		// 发布触发 方法1闭包
		for(var i = 0; i < data.length; i++){
			(function(i){
				send[i].onclick=function(){
					$.ajax({ 
					    type: "POST", 	
						url: "newhref.html",
						data: {
							listID: data[i]['id'],
						},
						dataType: "json",
						success: function(da) {
							mask.style.display = 'block';
							if(document.body.clientHeight>window.screen.height){
								mask.style.height = document.body.clientHeight +"px";
							}
							// alert(document.body.clientHeight);
							$("#booListUrl").attr("href",app+"/Home/Student/choosebook.html?listID="+da);
							$("#booListUrl").html(server+app+"/Home/Student/choosebook.html?listID="+da);
							$("#linkhref"+i).attr("href",app+"/Home/Student/choosebook.html?listID="+da);
							$("#linkhref"+i).html("链接："+server+app+"/Home/Student/choosebook.html?listID="+da);
						},
						error: function(jqXHR){     
						   alert("发生错误：" + jqXHR.status);  
						},     
					});
					
						// alert(i);
				}
			})(i)
		}
		
		// 方法2
		// for(var i=0;i < data.length; i++){
		// 	send[i].index=i;
		// 	send[i].onclick=function(){
		// 		alert(this.index)
		// 	}
		// }

		//关闭遮罩层
		close.onclick = function(){
			mask.style.display = 'none';
		}

		//复制到粘贴板的函数。
		var copy = document.getElementById("copy");
		copy.onclick = function(){
			var Url2=document.getElementById("booListUrl");
			Url2.select(); // 选择对象
			document.execCommand("Copy"); // 执行浏览器复制命令
			alert("已复制好，可贴粘。");
 	 //       	document.execCommand("Copy"); //执行浏览器复制命令
		}
	}//window onload 结束。