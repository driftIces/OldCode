;(function(window, undefined){
	var that;
	
	function Game() {  //创建一个游戏逻辑对象,包括食物对象与蛇对象
		this.food = new Food();
		this.snake = new Snake();
		this.map = map;
		
		that = this;
	}
	Game.prototype.start = function(map) {
		this.food.render(this.map);
		this.snake.render(this.map);
		
		//通过定时器让蛇不断移动
		runSnake();
		//通过键盘控制蛇的方向
		bindKey();
	};
	
	
	
	function runSnake() {
		var timerId = setInterval(function() {
			this.snake.move(this.food, this.map);
			this.snake.render(this.map);
			
			//当蛇移动到游戏边界结束
			var maxX = this.map.offsetWidth / this.snake.width;
			var maxY = this.map.offsetHeight / this.snake.height;
			var headX = this.snake.body[0].x;
			var headY = this.snake.body[0].y;
			if(headX < 0 || headX >= maxX) {
				alert("Game Over");
				clearInterval(timerId);
			}
			if(headY < 0 || headY >= maxY) {
				alert("Game Over");
				clearInterval(timerId);
			}
			
		}.bind(that),150);
	}
	
	function bindKey() {
		document.addEventListener("keydown", function(e) {
			switch (e.keyCode) {
				case 37:
				this.snake.direction = "left";
				break;
				
				case 38:
				this.snake.direction = "top";
				break;
				
				case 39:
				this.snake.direction = "right";
				break;
				
				case 40:
				this.snake.direction = "bottom";
				break;
			}
		}.bind(that),false)
	}
	window.Game = Game;
})(window, undefined)

var map = document.getElementById("map");
var game = new Game(map);
game.start();
