function animate(element, target, callback) {
	//判断是否开启了定时器,开启则清除
	if(element.timerId) {
		clearInterval(element.timerId);
	}
	//让每个执行动画的元素记录自己的计时器
	element.timerId = setInterval(function(){
		var current = element.offsetLeft;//当前坐标
		var step = 10; //步进
		//如果当前位置current>target则设置step为负数,因为往回走
		if (current > target) {
			step = - Math.abs(step);
		}
		
		if (Math.abs(current - target) <= Math.abs(step)) {
			element.style.left = target + "px";
			clearInterval(element.timerId);
			if(callback){ //设置回调函数
				callback();
			}
			return;
		}
		current += step;
		element.style.left = current + "px";
	},20);
	
}
