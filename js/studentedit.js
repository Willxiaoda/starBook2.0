window.onload = function(){
	var b=JSON.parse(book);
	var stuName = document.getElementById('stuName');
	var stuNum = document.getElementById('stuNum');
	stuName.value = b.username;
	stuNum.value = b.studentnum;
	for(var i = 0; i < b.book.length; i++){
		//获取书架祖父节点
		var bookShelf = document.getElementById('bookShelf');
		//创建一个父div
		var outDiv = document.createElement('div');
		outDiv.id = 'book' + i;//设置div的ID
		outDiv.className = 'bookList';//设置div的class
		var ul= document.createElement('ul');//创建一个ul
		//创建4个li标签
		var bookNameLi = document.createElement('li');
		var bookPriceLi = document.createElement('li');
		var bookDiscount = document.createElement('li');
		var inputLi = document.createElement('li');
		var inputCheck = document.createElement('input');
		//input类型
		inputCheck.type = 'checkbox';
		//input name
		inputCheck.name = 'checkbox' + (i+1);
		inputCheck.id = 'checkbox' + (i+1);
		//添加
		inputLi.appendChild(inputCheck);
		ul.appendChild(bookNameLi);
		ul.appendChild(bookPriceLi);
		ul.appendChild(bookDiscount);
		ul.appendChild(inputLi);
		outDiv.appendChild(ul);
		bookShelf.appendChild(outDiv);
		var f=0;
		while(f<50)
		{
			// b.book[i]=b.book[i].replace("&","&amp;");
			b.book[i]=b.book[i].replace("<","&lt;");
			b.book[i]=b.book[i].replace(">","&gt;");
			f++;
		}
		//接受后端数据
		bookNameLi.innerHTML = b.book[i];
		bookPriceLi.innerHTML = b.price[i];
		bookDiscount.innerHTML = b.Dprice[i];
		//接受书本id数据
		inputCheck.value = b.bid[i];
		if(b.sure[i] == "yes"){
			inputCheck.checked = 'checked';
		}

	}
}