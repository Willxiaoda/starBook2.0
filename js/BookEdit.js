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
	var isEditing = false;
	var listName = null;
	var bookEdit = JSON.parse(data);

	//alert(bookEdit.book[0]);

	//遍历循坏
	$('#list').val(bookEdit.BOOKID);
	var i=0;
	if(typeof(bookEdit['book'])!="undefined"){
		for(i = 0;i < bookEdit['book'].length;i++){
			//每循环一次添加一个框
			addItem();
			$('#bookName'+(i+1)).val(bookEdit.book[i]);
			$('#bookPrice'+(i+1)).val(bookEdit.price[i]);
			$('#bookDiscount'+(i+1)).val(bookEdit.Dprice[i]);
			$('#flag'+(i+1)).val(bookEdit.bid[i]);
		}
	}
	//书单名
	$('#bookListName').val(bookEdit.listname);
	//var bookcount = i;
	
	function addItem(){
		//动态添加dom
		$('#bookShelf').append('<div id="book'+(i+1)+'" class="bookInfo"> <span>书名：</span> <input type="text" id="bookName'+(i+1)+'" name="bookName'+(i+1)+'" class="bookName" /> <span>价格：</span> <input type="text" id="bookPrice'+(i+1)+'" name="bookPrice'+(i+1)+'" class="bookPrice" onkeyup="checkNum(this)" /> <span>折后价：</span> <input type="text" id="bookDiscount'+(i+1)+'" name="bookDiscount'+(i+1)+'" class="bookDiscount" onkeyup="checkNum(this)" /> <input type="text" readonly id="delete'+(i+1)+'" name="delete'+(i+1)+'" class="delete" value="删除" /> <input type="text" id="flag'+(i+1)+'"  name="flag'+(i+1)+'" value="new" style="display:none" /></div>');
		if(typeof(bookEdit['book'])=="undefined")return;
		if(i >= bookEdit['book'].length){
			i++;
		}
		var deleteBook = $(".delete");
		var bookInfo = $(".bookInfo");
		//删除按钮触发函数。
		if(typeof(deleteBook.length)=="undefined")return;
		for(var x = 0;x<deleteBook.length;x++){
			(function(x){
				deleteBook[x].onclick = function(){
					 if(confirm("确定删除吗？")){
						bookInfo[x].style = "display:none";
						deleteBook[x].value = "yes";
					}else{
						return;
					}
				}
			})(x) // 闭包
		}//for 循环
	}//addItem结束
	//事件触发
	$('#add').on('click', addItem);
	// $('.edit').on('click',editListName);
}