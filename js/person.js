window.onload = function  () {

	//后端数据
	var b=JSON.parse(a);
	function adddata(){
		var num = b.Dprice.length ;
		// var money =0;
		$('#stuName').val(b['username']);
		$('#stuNum').val(b['studentnum']);
		if(b.book[0]!=null){
			for (var i =0;i<num; i++) {
			var f=0;
			while(f<50)
			{
				// b.book[i]=b.book[i].replace("&","&amp;");
				b.book[i]=b.book[i].replace("<","&lt;");
				b.book[i]=b.book[i].replace(">","&gt;");
				f++;
			}
			//动态添加dom		
				$('#bookShelf').append('<div id="type'+(i+1)+'" class="bookInfo"><ul> <li id =" bookName'+(i+1)+' " class=" bookName"></id> ' + b.book[i] + '</li> <li id =" bookPr'+(i+1)+' " class="bookPr">' + b.price[i] + '</li>  <li id =" bookD'+(i+1)+' " class="bookD">'+b.Dprice[i]+'</li> </ul></div>');
				// money += b.Dprice[i];
			}
		}
		$('#money').append(	' <div id=" font"><p>总额为:'+ b.total +' RMB</p></div>');

	}
	adddata();
	// Console.log("22");
}