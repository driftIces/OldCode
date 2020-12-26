;(function(window, undefined) {
	var _position = "absolute"; //设置食物脱标,可以移动
	var _div = null; //设置全局变量让random也可以访问render中创建的div
	var _map = null;
	var elements = [];
	
	function Food(options) {  //创建食物的构造函数(对象)
		options = options || {};//防止未传参数而出错
		this.width = options.width || 20;
		this.height = options.height || 20;
		this.x = options.x || 0;
		this.y = options.y || 0;
		this.color = options.color || "red";
	}
	
	Food.prototype.render = function(map) {  //增加Food的原型对象
		remove();
		
		div = document.createElement("div");
		map.appendChild(div);
		_div = div;
		_map = map;
		//将元素加入数组便于删除
		elements.push(div);
		
		//随机设置x和y的值
		this.x = Tool.getRandom(0, _map.offsetWidth / this.width - 1) * this.width;
		this.y = Tool.getRandom(0, _map.offsetHeight / this.height - 1) * this.height;
		
		div.style.position = _position;
		div.style.left = this.x + "px";
		div.style.top = this.y  + "px";
		div.style.width = this.width + "px";
		div.style.height = this.height + "px";
		div.style.backgroundColor = this.color;
	}
	
	function remove() {
		for(var i = elements.length - 1; i >= 0; i--) {
			elements[i].parentNode.removeChild(elements[i]);
			elements.splice(i, 1);
		}
	}
	
	
	//将Food的对象暴露给全局
	window.Food = Food;
})(window, undefined)

////测试
//var map = document.getElementById("map");
//var food = new Food();
//food.render(map);
//food.random();
