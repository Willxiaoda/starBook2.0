window.onload = function(){
	//解释数据
	var b=JSON.parse(book);
	//加载后端数据
	if(typeof(b.book)!="undefined"){
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
			var bookCountLi = document.createElement('li');
			var f=0;
			while(f<50)
			{
				// b.book[i]=b.book[i].replace("&","&amp;");
				b.book[i]=b.book[i].replace("<","&lt;");
				b.book[i]=b.book[i].replace(">","&gt;");
				f++;
			}
			//li内容
			bookNameLi.innerHTML = "<pre>"+b.book[i]+"</pre>";
			bookPriceLi.innerHTML = b.price[i];
			bookDiscount.innerHTML = b.Dprice[i];
			bookCountLi.innerHTML = b.booknum[i];
			//input类型
			ul.appendChild(bookNameLi);
			ul.appendChild(bookPriceLi);
			ul.appendChild(bookDiscount);
			ul.appendChild(bookCountLi);
			outDiv.appendChild(ul);
			bookShelf.appendChild(outDiv);
		}
	}
	var totalMoney = document.getElementById('totalMoney');
	totalMoney.value = b.total;
	//加上书名
	$('#title_left').html(b.listname);
}