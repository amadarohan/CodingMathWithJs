window.onload = function(){
	var canvas = document.getElementById("canvas"),
		context = canvas.getContext("2d"),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight,
		position = vector.create(100,100),
		velocity = vector.create(0,0);

		velocity.setLength(3);
		velocity.setAngle(Math.PI / 6);

	
	update();

	function update(){
		context.clearRect(0,0,width,height);

		position.addTo(velocity);

		context.beginPath();

		context.arc(position.getX(),position.getY(),10,0,Math.PI * 2 , false);
		context.fill();


		requestAnimationFrame(update);
	}		
};

