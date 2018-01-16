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
window.onload = function(){
		var bookcount = 2;
		var isEditing = false;
		var listName = null;

		function addItem(){
			//动态添加dom
			$('#bookShelf').append('<div id="book'+bookcount+'" class="bookInfo"> <span>书名：</span> <input type="text" id="bookName'+bookcount+'" name="bookName'+bookcount+'" class="bookName" /> <span>价格：</span> <input type="text" id="bookPrice'+bookcount+'" name="bookPrice'+bookcount+'" class="bookPrice" onkeyup="checkNum(this)" /> <span>折后价：</span> <input type="text" id="bookDiscount'+bookcount+'" name="bookDiscount'+bookcount+'" class="bookDiscount" onkeyup="checkNum(this)" /> <input type="text" id="flag'+bookcount+'" name="flag'+bookcount+'" style="display:none" /></div>');
			bookcount++;
			// alert(bookcount);
		}

		function removeItem(){
			// alert("绑定测试");
			if(bookcount == 1){
				alert('没有可以删除的啦！');
				return;
			}
			bookcount--;
			$('div#book'+bookcount).remove();
		}

		function clickEdit(){
			isEditing = false;
			editListName();
		}
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
		$('#title_left').on('click',clickEdit)
	}