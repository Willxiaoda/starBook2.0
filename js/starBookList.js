window.onload = function(){
	//form标签id
	var juMent = document.getElementById('juMent');
	//姓名框id
	var stuName = document.getElementById('stuName');
	//学号id
	var stuNum = document.getElementById('stuNum');
	//是否为中文
	var re =/[\u4e00-\u9fa5]/;

	var b=JSON.parse(book);

	//表单提交数据前判断
	juMent.onsubmit = function(){
		if (stuName.value == "") {
			alert('名字不能为空');
			return false;
		}
		else if(!re.test(stuName.value)){
			alert('名字只能为中文');
			return false;
		}
		else if(stuNum.value.length!=12){
			alert('请您输入12位学号');
			return false;
		}
		else if(isNaN(Number(stuNum.value))){
			alert('学号只能为数字');
			return false;
		}
		else{
			return confirm('确定提交吗？提交后只能联系班委修改。');
;
		}
	}

	/*动态样板
	<div id="book1" class="bookList">
		<ul>
			<li>大学生心理健康</li>
			<li>13.88</li>
			<li>10.55</li>
			<li><input type="checkbox" name="checkbox1" id="check1" /></li>
		</ul>
	</div>*/

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
			var inputLi = document.createElement('li');
			var inputCheck = document.createElement('input');
			//li内容
			var f=0;
			while(f<50)
			{
				// b.book[i]=b.book[i].replace("&","&amp;");
				b.book[i]=b.book[i].replace("<","&lt;");
				b.book[i]=b.book[i].replace(">","&gt;");
				f++;
			}
			bookNameLi.innerHTML = "<pre>"+b.book[i]+"</pre>";
			// bookNameLi.innerHTML = b.book[i];
			bookPriceLi.innerHTML = b.price[i];
			bookDiscount.innerHTML = b.Dprice[i];
			//input类型
			inputCheck.type = 'checkbox';
			//input name
			inputCheck.name = 'checkbox' + i;
			inputCheck.id = 'checkbox' + i;
			inputCheck.className = 'check';
			//接受书本id数据
			inputCheck.value = b.bid[i];
			//添加
			inputLi.appendChild(inputCheck);
			ul.appendChild(bookNameLi);
			ul.appendChild(bookPriceLi);
			ul.appendChild(bookDiscount);
			ul.appendChild(inputLi);
			outDiv.appendChild(ul);
			bookShelf.appendChild(outDiv);
		}
	}
	//加上书名
	var title_left = document.getElementById('title_left');
	title_left.innerHTML=b.listname;

	//页面js计算价格
	//获取每一个复选框的className
	var check = document.getElementsByClassName('check');
	//获取每一行的bookList
	var bookList = document.getElementsByClassName('bookList');
	//获取价格框id
	var selectTotal = document.getElementById('selectTotal');
	//计算函数
	function getTotal(){
		var price = 0;
		for(var j = 0;j<bookList.length;j++){
			// alert(bookList[j].getElementsByTagName('li')[3].getElementsByTagName('input')[0].checked);
			//遍历每一行中的第四个li标签里面的第一个input标签是否勾选
			if(bookList[j].getElementsByTagName('li')[3].getElementsByTagName('input')[0].checked){
				//每一行中的第三个li标签的值累加上去
				price += parseFloat(bookList[j].getElementsByTagName('li')[2].innerHTML)
			}

		}
		//保留两位小数进行赋值
		selectTotal.value = price.toFixed(2);
	}
	//每个复选框的点击事件
	for(var i = 0;i < check.length;i++){
		check[i].onclick = function(){
			getTotal();
		}
	}
}