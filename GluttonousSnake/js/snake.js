;(function(window, undefined) {
	var _position = "absolute";
	var elements = [];
	
	function Snake(options) {  //创建一个蛇对象
		options = options || {};
		this.width = options.width || 20;
		this.height = options.height || 20;
		this.direction = options.direction || "right";
		this.body = [  //设置蛇头和蛇身的位置和颜色
			{x: 3, y: 2, color: "red"},
			{x: 2, y: 2, color: "blue"},
			{x: 1, y: 2, color: "blue"}
		];
	}
	
	Snake.prototype.render = function(map) {
		remove();//移除之前的蛇
		
		this.body.forEach(function(item) {
			//由于forEach方法中新开了一个function作用域,所以this指向window
			var div = document.createElement("div");
			map.appendChild(div);
			//记录创建好的蛇,便于删除
			elements.push(div);
			
			div.style.position = _position;
			div.style.left = item.x * this.width + "px";
			div.style.top = item.y * this.height + "px";
			div.style.width = this.width + "px";
			div.style.height = this.height + "px";
			div.style.backgroundColor = item.color;
		}.bind(this))  //通过bind改变this指向
	}
	
	//定义一个私有的删除函数
	function remove() {
		for (var i = elements.length - 1; i >= 0; i--) { //forEach不能修改数组的元素
			var item = elements[i];
			//从界面中把div移除
			item.parentNode.removeChild(item);
			//从数组中把元素移除
			elements.splice(i, 1);
		}
	}
	
	Snake.prototype.move = function(food, map) {
		for (var i = this.body.length - 1; i > 0; i--) {//将蛇身的后一节移动到前一节
			this.body[i].x = this.body[i - 1].x;
			this.body[i].y = this.body[i - 1].y;
		}
		//蛇头的位置由方向决定this.body[0]
		var head = this.body[0];
		switch (this.direction) {
			case "right":
			this.body[0].x += 1;
			break;
			
			case "left":
			this.body[0].x -= 1;
			break;
			
			case "top":
			this.body[0].y -= 1;
			break;
			
			case "bottom":
			this.body[0].y += 1;
			break;
		}
		
		//判断蛇头是否与食物的坐标重合
		var headX = head.x * this.width;
		var headY = head.y * this.height;
		console.log(headY);
		if (headX === food.x && headY === food.y) {
			//获取蛇的最后一节，让蛇增加一节
			var last = this.body[this.body.length - 1];
			this.body.push({
				x: last.x,
				y: last.y,
				color: last.color
			})
			food.render(map);
		}
		
	};
	
	window.Snake = Snake;
})(window, undefined)

//测试
//var snake = new Snake();
//snake.move();
//snake.render(map);