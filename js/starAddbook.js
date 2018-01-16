function checkNum(obj){
			//先把非数字的都替换掉，除了数字和.
			obj.value = obj.value.replace(/[^\d.]/g,"");
			//必须保证第一个为数字而不是.
			obj.value = obj.value.replace(/^\./g,"");
			//保证只有出现一个.而没有多个.
			obj.value = obj.value.replace(/\.{2,}/g,".");
			//保证.只出现一次，而不能出现两次以上
			obj.value = obj.value.replace(".","$#$").replace(/\./g,"").replace("$#$",".");
		}
$(document).ready(function(){
	// 记录增加的book+bookcount=id
	// 学院数据
	var school='[{"name":"\u7ba1\u7406\u5b66\u9662","subordinate":"1,2,3,4,5,6"},{"name":"\u7535\u6c14\u5de5\u7a0b\u5b66\u9662","subordinate":"7,8,9,10,29"},{"name":"\u6c7d\u8f66\u4e0e\u4ea4\u901a\u5de5\u7a0b\u5b66\u9662","subordinate":"11,12,13,14"},{"name":"\u7535\u5b50\u4fe1\u606f\u5de5\u7a0b\u5b66\u9662","subordinate":"19,20,21"},{"name":"\u8ba1\u7b97\u673a\u5de5\u7a0b\u5b66\u9662","subordinate":"22,23,24,25,26,27"},{"name":"\u4e2d\u5174\u901a\u4fe1\u5de5\u7a0b\u5b66\u9662","subordinate":"28"},{"name":"\u73e0\u5b9d\u5b66\u9662","subordinate":"30,31,35,36"},{"name":"\u56fd\u9645\u5546\u5b66\u9662","subordinate":"32,33,34,46"},{"name":"\u5916\u56fd\u8bed\u5b66\u9662","subordinate":"37,38"},{"name":"\u7ecf\u6d4e\u5b66\u9662","subordinate":"39,40,41,42,43"},{"name":"\u571f\u6728\u5de5\u7a0b\u5b66\u9662","subordinate":"44"},{"name":"\u5efa\u7b51\u5b66\u9662","subordinate":"45"},{"name":"\u673a\u68b0\u5de5\u7a0b\u5b66\u9662","subordinate":"15,16,17,18"}]';
	// 专业数据
	var major='{"1":{"name":"\u5de5\u5546\u7ba1\u7406\u4e13\u4e1a","id":"101"},"2":{"name":"\u4eba\u529b\u8d44\u6e90\u7ba1\u7406\u4e13\u4e1a","id":"102"},"3":{"name":"\u4f1a\u8ba1\u5b66\u4e13\u4e1a","id":"103"},"4":{"name":"\u8d22\u52a1\u7ba1\u7406\u4e13\u4e1a","id":"104"},"5":{"name":"\u5e02\u573a\u8425\u9500\u4e13\u4e1a","id":"105"},"6":{"name":"\u7535\u5b50\u5546\u52a1\u4e13\u4e1a","id":"106"},"7":{"name":"\u7535\u6c14\u5de5\u7a0b\u53ca\u5176\u81ea\u52a8\u5316\u4e13\u4e1a(\u7535\u6c14\u5de5\u7a0b\u65b9\u5411)","id":"201"},"8":{"name":"\u7535\u6c14\u5de5\u7a0b\u53ca\u5176\u81ea\u52a8\u5316\u4e13\u4e1a(\u8f93\u7535\u7ebf\u8def\u5de5\u7a0b)","id":"202"},"9":{"name":"\u4ea4\u901a\u5de5\u7a0b","id":"203"},"10":{"name":"\u7535\u6c14\u5de5\u7a0b\u53ca\u5176\u81ea\u52a8\u5316\u4e13\u4e1a(\u7535\u529b\u914d\u8425\u6280\u672f\u4e0e\u7ba1\u7406\u65b9\u5411)","id":"204"},"11":{"name":"\u8f66\u8f86\u5de5\u7a0b\u4e13\u4e1a","id":"301"},"12":{"name":"\u6c7d\u8f66\u670d\u52a1\u5de5\u7a0b\u4e13\u4e1a","id":"302"},"13":{"name":"\u7269\u6d41\u5de5\u7a0b\u4e13\u4e1a","id":"303"},"14":{"name":"\u4ea4\u901a\u5de5\u7a0b\u4e13\u4e1a","id":"304"},"15":{"name":"\u673a\u68b0\u5de5\u7a0b\u4e13\u4e1a","id":"401"},"16":{"name":"\u673a\u68b0\u5de5\u7a0b\u4e13\u4e1a\uff08\u521b\u65b0\u73ed\uff09","id":"402"},"17":{"name":"\u673a\u68b0\u7535\u5b50\u5de5\u7a0b\u4e13\u4e1a","id":"403"},"18":{"name":"\u5de5\u4e1a\u8bbe\u8ba1\u4e13\u4e1a","id":"404"},"19":{"name":"\u7535\u5b50\u4fe1\u606f\u5de5\u7a0b\u4e13\u4e1a","id":"501"},"20":{"name":"\u81ea\u52a8\u5316\u4e13\u4e1a","id":"502"},"21":{"name":"\u901a\u4fe1\u5de5\u7a0b\u4e13\u4e1a","id":"503"},"22":{"name":"\u8ba1\u7b97\u673a\u79d1\u5b66\u4e0e\u6280\u672f\u4e13\u4e1a\uff08\u4ea4\u4e92\u6280\u672f\uff09","id":"1301"},"23":{"name":"\u8ba1\u7b97\u673a\u79d1\u5b66\u4e0e\u6280\u672f\u4e13\u4e1a\uff08\u5d4c\u5165\u5f0f\uff09","id":"1302"},"24":{"name":"\u4fe1\u606f\u4e0e\u8ba1\u7b97\u79d1\u5b66\u4e13\u4e1a\uff08\u5546\u4e1a\u5206\u6790\u65b9\u5411\uff09","id":"1303"},"25":{"name":"\u8f6f\u4ef6\u5de5\u7a0b\u4e13\u4e1a","id":"1304"},"26":{"name":"\u7f51\u7edc\u5de5\u7a0b\uff08\u7269\u8054\u7f51\u5e94\u7528\u6280\u672f\u65b9\u5411\uff09","id":"1305"},"27":{"name":"\u7f51\u7edc\u5de5\u7a0b\uff08\u7f51\u7edc\u8bbe\u8ba1\u4e0e\u5b89\u5168\u65b9\u5411\uff09","id":"1306"},"28":{"name":"\u901a\u4fe1\u5de5\u7a0b\u4e13\u4e1a","id":"601"},"29":{"name":"\u65b0\u80fd\u6e90\u79d1\u5b66\u4e0e\u5de5\u7a0b\u4e13\u4e1a","id":"205"},"30":{"name":"\u4ea7\u54c1\u8bbe\u8ba1\u4e13\u4e1a","id":"701"},"31":{"name":"\u670d\u88c5\u4e0e\u670d\u9970\u8bbe\u8ba1\u4e13\u4e1a","id":"702"},"32":{"name":"\u56fd\u9645\u7ecf\u6d4e\u4e0e\u8d38\u6613\u4e13\u4e1a(\u56fd\u9645\u73ed)","id":"801"},"33":{"name":"\u4f1a\u8ba1\u5b66\u4e13\u4e1a(\u53cc\u8bed\u73ed)","id":"802"},"34":{"name":"\u56fd\u9645\u7ecf\u6d4e\u4e0e\u8d38\u6613\u4e13\u4e1a(\u53cc\u8bed\u73ed)","id":"803"},"35":{"name":"\u5b9d\u77f3\u53ca\u6750\u6599\u5de5\u827a\u5b66\u4e13\u4e1a","id":"703"},"36":{"name":"\u5b9d\u77f3\u53ca\u6750\u6599\u5de5\u827a\u5b66\u4e13\u4e1a(\u4e2d\u5916\u5408\u4f5c)","id":"704"},"37":{"name":"\u82f1\u8bed\u4e13\u4e1a","id":"901"},"38":{"name":"\u65e5\u8bed\u4e13\u4e1a","id":"902"},"39":{"name":"\u56fd\u9645\u7ecf\u6d4e\u4e0e\u8d38\u6613\u4e13\u4e1a","id":"1001"},"40":{"name":"\u91d1\u878d\u5de5\u7a0b\u4e13\u4e1a","id":"1002"},"41":{"name":"\u91d1\u878d\u5de5\u7a0b\u4e13\u4e1a(\u78b3\u91d1\u878d)","id":"1003"},"42":{"name":"\u7ecf\u6d4e\u7edf\u8ba1\u5b66\u4e13\u4e1a","id":"1004"},"43":{"name":"\u7a0e\u6536\u5b66\u4e13\u4e1a","id":"1005"},"44":{"name":"\u571f\u6728\u5de5\u7a0b\u4e13\u4e1a","id":"1101"},"45":{"name":"\u5efa\u7b51\u5b66\u4e13\u4e1a","id":"1201"},"46":{"name":"\u4f1a\u8ba1\u5b66\u4e13\u4e1a(\u56fd\u9645\u73ed)","id":"804"}}';
	var bookcount = 2;
	// 记录当前书单名的状态
	var isEditing = false;
	var listName = null;
	//二级联动列表。
	//$150是用来解决同一页面jQuery多个版本或和其他js库冲突方法
	// $150是jq版本为1.5,功能实现要求要使用不同的jq库（html中有定义）
	// 添加书单
	function addItem(){
		//动态添加dom
		// $('#bookShelf').append('<div id="book'+bookcount+'" class="bookInfo"> <span>书名：</span> <input type="text" id="bookName'+bookcount+'" name="bookName'+bookcount+'" class="bookName" list="bookList" /> <span>价格：</span> <input type="text" id="bookPrice'+bookcount+'" name="bookPrice'+bookcount+'" class="bookPrice" onkeyup="checkNum(this)" /> <span>折后价：</span> <input type="text" id="bookDiscount'+bookcount+'" name="bookDiscount'+bookcount+'" class="bookDiscount" onkeyup="checkNum(this)" /> <input type="text" id="flag'+bookcount+'" name="flag'+bookcount+'" style="display:none" /></div>');
		$('#bookShelf').append('<div id="book'+bookcount+'" class="bookInfo"></div>');
		$('#book'+bookcount).append('<span>书名：</span> <input type="text" id="bookName'+bookcount+'" name="bookName'+bookcount+'" class="bookName" list="bookList" />');
		$('#book'+bookcount).append('<span>价格：</span> <input type="text" id="bookPrice'+bookcount+'" name="bookPrice'+bookcount+'" class="bookPrice" onkeyup="checkNum(this)" />');
		$('#book'+bookcount).append('<span>折后价：</span> <input type="text" id="bookDiscount'+bookcount+'" name="bookDiscount'+bookcount+'" class="bookDiscount" onkeyup="checkNum(this)" />');
		$('#book'+bookcount).append('<input type="text" id="flag'+bookcount+'" name="flag'+bookcount+'" style="display:none" />');
		bookcount++;
		// alert(bookcount);
	}

	// 删除书单
	function removeItem(){
		// alert("绑定测试");
		if(bookcount == 1){
			alert('没有可以删除的啦！');
			return;
		}
		bookcount--;
		$('div#book'+bookcount).remove();
	}

	// 单击书名更改内容
	function clickEdit(){
		isEditing = false;
		editListName();
	}

	// 点击编辑书单按钮
	function editListName(){
		if(isEditing){
			$('.edit').html('编辑书单名字');
			$('#title_left').attr("readonly",true);
			$('#title_left').css("border","none");
			isEditing = false;
		}else{
			$('.edit').html('保存书单名字');
			$('#title_left').attr("readonly",false);
			$('#title_left').css("border","1px solid #000");
			isEditing = true;
		}
	}
	$('#add').on('click', addItem);
	$('#delete').on('click', removeItem);
	$('.edit').on('click',editListName);
	$('#title_left').on('click',clickEdit);
	$("#grade").change(function(){
		if($("#grade").val()!='0'&&$("#major").val()!='0'){
			ajax();
		}
	});

	// 通过数据添加学院信息
	school=jQuery.parseJSON(school);
	major=jQuery.parseJSON(major);
	var schooldata='<option value="0">--请选择学院--</option>';
	for (var i = 0; i < school.length; i++) {
		schooldata=schooldata+'<option value="'+(i+1)+'">'+school[i].name+'</option>';
	}
	$("#school").html(schooldata);
	$("#school").change(function(){
		$("#major").children().remove();
		var data='<option value="0">--请选择专业--</option>';
		if($("#school").val()=='0'){
			//不进行别的操作
		}
		else{
			for (var f = 0; f < school.length; f++) {
				if ($("#school").val()==(f+1)) 
				{
					arr=school[f].subordinate.split(","); 
					for (var q = 0; q < arr.length; q++) {
						data=data+'<option value="'+major[arr[q]].id+'">'+major[arr[q]].name+'</option>';
					};
				};
			};
		}
		// else if($("#school").val()=='1'){
		// 	$("#major").children().remove();
		// 	var data="";
		// 	var data='<option value="0">--请选择专业--</option>'+'<option value="101">软件工程</option>'+'<option value="2">网络工程</option>'+'<option value="3">计算机科学与技术</option>';
			
		// }
		// else if($("#school").val()=='2'){
		// 	$("#major").children().remove();
		// 	var data='<option value="0">--请选择专业--</option>'+'<option value="102">会计学专业（双语班）</option>'+'<option value="2">市场营销专业</option>'+'<option value="3"> 国际经济与贸易专业（双语班）</option>';
			
		// }
		// else if($("#school").val()=='3'){
		// 	$("#major").children().remove();
		// 	var data='<option value="0">--请选择专业--</option>'+'<option value="103">土木工程</option>'+'<option value="2">交通工程</option>';
			
		// }
		$("#major").html(data);
	});
	$("#major").change(function(){
		if($("#grade").val()!='0'&&$("#major").val()!='0'){
			ajax();
		}
	});
	function ajax(){
		$.ajax({ 
			    type: "POST", 	
				url: "listdata.html",
				data: {
					listID:""+$("#grade").val()+$("#major").val(),
				},
				dataType: "json",
				success: function(data) {
					while(bookcount != 1){removeItem();}
					for(i = 0;i < data['book'].length;i++){
						//每循环一次添加一个框
						addItem();
						$('#bookName'+(i+1)).val(data.book[i]);
						$('#bookPrice'+(i+1)).val(data.price[i]);
						$('#bookDiscount'+(i+1)).val(data.Dprice[i]);
						$('#flag'+(i+1)).val();
					}
					// removeItem();
				},
				error: function(jqXHR){     
				   alert("发生错误：" + jqXHR.status);  
				},     
			});
	}
	//遍历循坏//新增的修改页面数据方法
	// $('#list').val(bookEdit.BOOKID);
	// var i=0;
	// if(typeof(bookEdit['book'])!="undefined"){
	// 	for(i = 0;i < bookEdit['book'].length;i++){
	// 		//每循环一次添加一个框
	// 		addItem();
	// 		$('#bookName'+(i+1)).val(bookEdit.book[i]);
	// 		$('#bookPrice'+(i+1)).val(bookEdit.price[i]);
	// 		$('#bookDiscount'+(i+1)).val(bookEdit.Dprice[i]);
	// 		$('#flag'+(i+1)).val(bookEdit.bid[i]);
	// 	}
	// }
});