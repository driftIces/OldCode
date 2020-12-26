var a = true || false && true;
console.log(a);//涉及逻辑运算符,优先顺序为!>&&>||
var b = 3,c = "3";
console.log(b==c);// ==不判断数据类型只判断内容，===即判断数据类型也判断内容

var d = "456abc";
d = Number(d);/* 强制转换成Number;parseInt与parseFloat也可以实现强制转换成数据类型。
Number、parseFloat会保留小数，而parseInt只保留整数;不能转换都返回NaN;
parseInt遇到数字与非数字会一直解析到遇到第一个非数字为止*/

d = +d;/*隐式转换，其他可以实现的还有-、*、/,但加号必须写在前面,否则就是起连接符作用而不是转换*/

var e = 123;
e = e.toString();/* 强制转换成String类型;String(e)也可以直接强制转换。 */

(b > e?b : e) > a? (b > e?b : e): a; /* 三元运算符三个值的运用 */

//100到999水仙花数计算：百位上数的立方+十位上数的立方+个位上数的立方=这个数自己
var count = 0;
for(int i=100;i<=999;i++){
	var bai = Math.floor(i/100);//得到百位数，floor是向下取整
	var shi = Math.floor(i%100/10);//
	var ge = Math.floor(i%10);
	var he = Math.pow(bai,3) + Math.pow(shi,3) + Math.pow(ge,3);
	if(he==i){
		console.log(i);
		count++;
	}
}
console.log(count);


//求出1到100的质数
for(var n=1;n<=100;n++){ //固定第一个1-100的数n
	for(var m=2;m<=n-1;m++){   //然后利用第二个n-1个数依次去除以n
		if(n % m==0){ /*如果n模以m等于零则打断/跳出第二层循环,然后去第一层循环执行n++,再来第二层循环执行m=2;m<n-1.
			                         因为这时第二层循环已经结束了，所以m还是从2开始*/
			break;
		}
	}
	if(m==n){/* 这是因为n模以了小于他的数依旧没有被break打断下面的代码、跳到第一层循环,
		                而一直运行下来、退出第二层循环时因为最后一次m++的原因，m肯定等于n */
		console.log("这是一个质数"+m);
	}
}


//冒泡排序 first
var arr = [15,78,64,71,19,8,6,99,178,190],w = 0,n = 0;
for(var i = 0; i< arr.length-1; i++){ //外层循环确定排序的次数，因为5个数最多需要排4次，所以arr.length-1
	for(var j = 0; j < arr.length-1; j++){ //内层循环确定一趟排序中两两交换的次数
		if(arr[j] > arr[j+1]){   //如果下标为j的数字大于下标为j+1的数字，则执行交换操作
			var tmp = arr[j];   //定义一个临时变量用于实现数据的交换
			arr[j] = arr[j+1];
			arr[j+1] = tmp;
		}
		n++;
	}
	w++;
}
console.log("排序后的数组为"+arr+"内循环次数为"+n+"外循环次数为"+w);


//冒泡排序 second
var arr = [15,78,64,71,19,8,6,99,178,190],w = 0,n = 0;
for(var i = 0; i< arr.length - 1; i++){
	for(int j = 1; j< arr.length - i; j++){ //设置内层循环步数随i而改变，因为每经过一个循环最后一个值都能确定
		if(arr[j] > arr[j+1]){
			var tmp = arr[j];
			arr[j] = arr[j+1];
			arr[j+1] = tmp;
		}
		n++;
	}
	w++;
}
console.log("排序后的数组为"+arr+"内循环次数为"+n+"外循环次数为"+w);

//冒泡排序 three
var arr = [15,78,64,71,19,8,6,99,178,190],w = 0,n = 0;
for(var i = 0; i< arr.length-1; i++){
	var isSort = true;  //假设排序已完成，设置在外层循环里可以反复给isSort赋值true
	for(int j = 1; j< arr.length - i; j++){
		if(arr[j] > arr[j+1]){
			isSort = false; //进入if时证明排序未完成
			var tmp = arr[j];
			arr[j] = arr[j+1];
			arr[j+1] = tmp;
		}
		n++;
	}
	w++;
	if(isSort){
		break; //当运行到这一步说明未进入if而把isSort的true值带过来了，说明数组已排好序，break立即退出循环
	}
}
console.log("排序后的数组为"+arr+"内循环次数为"+n+"外循环次数为"+w);



//输入某年某月某日，判断这一天是一年中的第几天
function getDays(year,month,day){
	var days = day;   //初始化days为day,不用判断一月
	var months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	for(var i = 0;i < month - 1; i++){ //数组下标决定i<month-1;数组下标为2包括了三月,所以不能取等
		days += months[i];            //之前的月的天数累加,因为初始化了所以不用考虑日,只需要用日加月
	}
	if(month > 2 && getRn(year)){  //如果是闰年则天数+1
		days++;
	}
	 return days;
}

function getRn(year){  //闰年：能被4整除但不能被100整除,或者可以被400整除
	if((year % 4===0 && year % 100!==0)||year % 400===0){
		return true;  //是闰年
	}
	return false;
}

//斐波那数列的第n个数…  1 1 2 3 5 8 13 21
function getF(n){
	var n1 = 1;
	var n2 = 2;
	var sum = 0;
	for(var i = 3; i <= n; i++){ //循环从3开始因为前两个数n1,n2已经定义好了
		sum = n1 + n2;  //可知规律是第三个数等于前两个数之和
		n1 = n2;        //n1往后挪一位
		n2 = sum;       //n2往后挪一位等于sum。
	}
	return n2;
}

//递归解决斐波那数列的第n个数…  1 1 2 3 5 8 13 21
function getDF(n){   
	if(n == 1 || n ==2){  //返回1是结束条件
		return 1;
	}
	return getDF(n-1) + getDF(n-2); /*第n个数是n-1 + n-2 的和;
	                                 *getDF(n-1)调用getDF(n-2)+getDF(n-3)直到n=2或n=1
	                                 *getDF(n-2)调用getDF(n-3)+getDF(n-4)直到n=2或n=1
	                                 */
}

//递归解决n个整数的和
function getSum(n){
	if(n === 1){
		return 1;  //这个返回值由下一个return里的n接收.
	}	
	return n + getSum(n-1);  //getSum(n-1) = n-1 + getSum(n-2);依此类推.
}

//递归求一个数各个位数之和
function getSum(n){
	if(n<10){
		return n;
	}
	return n % 10 + getSum(parseInt(n/10));
}

function getResult(a,b,fn){   //fn函数作为getResult函数的参数
	return fn(a,b);    //a,b为fn赋值的实参
}
console.log(9,6,function(a,b){  //定义匿名函数对应fn,a,b为fn的形参
	return a + b;
});


//面向对象继承
function mix(a,b){
	for(var k in b){ //k是对象的属性名
		a[i] = b[i];//对象a得到对象b的属性
	}
}
var a = {name:"张三";};
var b = {age:18;};
mix(a,b);//将a,b复制一份传递给mix函数


//DOM操作面向过程
var div = document.createElement("div");//创建一个div标签
document.body.appendChild("div");  //将div加入到html页面中
div.style.border="1px dashed red";//设置div的属性样式

//DOM操作面向对象★★
function divTag() {
	this.DOM = document.createElement("div");  //this表示当前new的对象创建一个div标签
	this.append = function(node) {   //node调用时赋值
		node.appendChild(this.DOM); //将div加到当前new的对象的节点为node的子节点中，
	};
	this.stly = function(tagname,value){
		this.DOM.style[tagname] = value;  //设置div的属性样式，使用style[tagname]表示style接收到的属性名
	};
}

var divTag = new divTag();
divTag.append(document.body);
divTag.stly("border","1px solid skyblue");

//美女画廊图片切换，结合html使用
var imagegallery = document.getElementById("imagegallery");
var links = imagegallery.getElementsByTagName("a");//获取画廊下所有的a元素
for(var i = 0,len = links.length; i < len; i++){
	links[i].onclick = function() {    //给每一个a元素注册事件
		var img = document.getElementById("images");//放在注册事件里面只有当点击事件发生时才去获取img,des节约带宽.
	    var des = document.getElementById("des");
		img.src = this.href;    //切换图片;this表示触发事件的对象,事件源,如果用links[i],循环早已结束.
		des.innerText = this.value;//切换文字
	}
}


//随机选择一种类型
var btn = document.getElementById("btn");  //获取按钮元素
btn.onclick = function() {
	var  sel = document.getElementById("sel");  
	var opt = sel.getElementsByTagName("option");
	var index = getRandom(1, opt.length - 1);
	opt[index].selected = true;
};


//实现checkbox的全选及反选,要求子checkbox与父checkbox选中状态保持一致
var farCheckbox = document.getElementById("farCheckbox");//获取父checkbox的元素
var chiCheckboxs = document.querySelectorAll("#farCheckbox input[type=checkbox]");/*获取id为farCheckbox下属性为
	                                                                         input[type=checkbox]的元素,就是子checkbox*/
farCheckbox.onclick = function() {  //给父checkbox注册事件
    for (var i = 0, len = chiCheckboxs.length; i < len; i++) {
    	chiCheckboxs[i].checked = this.checked;    //设置父checkbox和子checkbox状态一致,this是事件处理程序的当前对象,就是farCheckbox
    }
};

//如果有一个子checkbox未选中,父checkbox状态也随之改变
var i = 0,len = chiCheckboxs.length;
for (; i < len; i++) {  //循环获取子checkbox
	  chiCheckboxs[i].onclick = funtion() {   //给每一个子checkbox注册事件
	  	var isChecked = true;    //假设所有的子checkbox已选中
	  	for(i = 0;i < len; i++){   //循环获取每一个checkbox的当前状态,如果有一个未选中则跳出循环
	  		if(!chiCheckboxs[i].checked){  //把子checkbox与isChecked的状态通过代码逻辑建立连接
	  		isChecked = false;
	  		break;
	     	}
     	}
	  	farCheckbox = isChecked;   //把父checkbox设置为isChecked,就是与子checkbox状态建立连接
	  };
}

//实现子checkbox的反选
var btn = document.getElementById("btn");//获取反选的按钮元素
btn.onclick = function() {
	for (i = 0; i < len; i++) {
		chiCheckboxs[i] = !chiCheckboxs[i].checked;//跟选中之前的状态相反
	}
	var isChecked = true;    //假设所有的子checkbox已选中
	  	for(i = 0;i < len; i++){   //循环获取每一个checkbox的当前状态,如果有一个未选中则跳出循环
	  		if(!chiCheckboxs[i].checked){  //把子checkbox与isChecked的状态通过代码逻辑建立连接
	  		isChecked = false;
	  		break;
	     	}
     	}
	  	farCheckbox = isChecked;   //把父checkbox设置为isChecked,就是与子checkbox状态建立连接
};


//开关灯
var btn = document.getElementById("btn");
btn.onclick = function() {
	var isOpen = true;
	if(isOpen){
		document.body.style.backgroundColor = 'black';
		this.value = '开灯';
		isOpen = false;
	}else{
		document.body.style.backgroundColor = '';
		this.value = '关灯';
		isOpen = true;
	}
};


//模拟DOM文档结构
function Node(options){  //没有实参的形参是undefined
	//设置默认值
	options = options || {};
	this.id = options.id || "";
	this.className = options.className || "";
	this.nodeName = options.nodeName || "";
	this.nodeType = options.nodeType || 1;
	this.nodeValue = options.nodeValue || null;
	//设置一个属性记录子元素
	this.children = [];
}

//html元素
var html = new Node({
	nodeName: "HTML"
});
var head = new Node({
	nodeName:"HEAD"
});
html.chilren.push(head);
