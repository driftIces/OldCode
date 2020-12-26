//封装动态创建的表格
function createTable(parent, headData,bodyData) {  //parent确定在哪个元素下插入这个表格
	var table = createHead(parent, headData); //调用创建表头函数,接收返回值
	createBody(table, bodyData); //调用创建数据行函数,使用表头函数的返回值
}

//创建表头
function createHead(parent, headData) {
	var table = document.createElement("table");//动态创建table元素
	parent.appendChild(table);//在parent元素下加入table元素
	table.border = "1px";//设置样式
	table.width = "500px";
	table.cellSpacing = 0;
	
	var thead = document.createElement("thead");
	table.appendChild(thead);
	
	//表头只有一行所以不用循环遍历
	var tr = document.createElement("tr");
	thead.appendChild(tr);
	tr.style.height = "50px";
	tr.style.backgroundColor = "lightgray";
	
	//生成表头中的列
	headData.forEach(funtion(item) {  //forEach用于数组遍历,item代表数组的每一项
		var th = document.createElement("th");
		tr.appendChild(th);
		setInnerText(th, item);  //给th之间添加内容
	})
	return table; //将table传递给数据列使用	
}

//创建数据列
function createBody(table, bodyData) {
	var tbody = document.createElement("tbody");
	table.appendChild(tbody);//在table下加入tbody所以要接收createHead的返回值
	tbody.style.textAlign = "center";
	
	//生成数据列
	bodyData.forEach(function(item) {
		//遍历数组以创建数据列的每一行
		tr = docuemnt.createElement("tr");
		tbody.appendChild("tr");
		
		//遍历对象以创建数据列的每一列
		for(var key in item){
			var td = document.createElement("td");
			tbody.appendChild(td);
			setInnerText(td,item[key]);//item[key]获取数组中每一项对象的每一个属性
		}
		//操作行的列
		td = document.createElement("td");
		tr.appendChild(td);
		//创建删除行的超链接
		var link = document.createElement("a");
		link.href = "javascript:void(0)";
		td.appendChild(link);
		setInnerText(link,"删除");
		//给删除按钮注册事件
		link.onclick = linkClick;
	});
	//事件处理函数
	function linkClick(){
		var r = confirm("是否确定删除?");
		if(r){
			var tr = this.parentNode.parentNode; //link的父节点的父节点是tr.
			tbody.removeChild(tr);
		}
	}
}
