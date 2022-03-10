window.onload = function(){
	var canvas = document.getElementById("canvas"),
		context = canvas.getContext("2d"),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight,

		centerX = width / 2,
		centerY = height / 2,
		//radius = 200,
		xRadius = 200,
		yRadius = 350,
		//angle = 0,
		xAngle = 0,
		yAngle = 0,
		//speed = .01,
		xSpeed = .01,
		ySpeed = .0131,
		x,y;

	render();

	function render(){
		context.clearRect(0, 0, width, height);
		
		//x = centerX + Math.cos(angle) * radius;
		//y = centerY + Math.sin(angle) * radius;
		
		//x = centerX + Math.cos(angle) * xRadius;
		//y = centerY + Math.sin(angle) * yRadius;

		x = centerX + Math.cos(xAngle) * xRadius;
		y = centerY + Math.sin(yAngle) * yRadius;

		context.beginPath();
		context.arc(x , y, 10, 0, Math.PI * 2 , false);
		//context.fillRect(x,y,1,1); 
		context.fill();

		//angle += speed;
		xAngle += xSpeed;
		yAngle += ySpeed;

		requestAnimationFrame(render);
	}



};