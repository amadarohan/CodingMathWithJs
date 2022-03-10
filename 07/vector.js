var vector = {
	_x : 1,
	_y : 0,

	create: function(x,y){
		var obj = Object.create(this);
		obj.setX(x);
		obj.setY(y);
		return obj;
	},

	setX: function(value){
		this._x;
	},

	getX: function(){
		return this._x;
	},

	setY: function(value){
		this._y;
	},

	getY: function(){
		return this._y;
	},

	setAngle: function (angle){
		var length = this.getLength();
		this._x = Math.cos(angle) * length;
		this._y = Math.sin(angle) * length;
	},

	getAngle: function(){
		return Math.atan2(this._y, this._x);
	},

	setLength : function(length){
		var angle = this.getLength();
		this._x = Math.cos(angle) * length;
		this._y = Math.sin(angle) * length;
	},

	getLength: function(){
		return Math.sqrt(this._x * this._x + this._y * this._y);
	},

	add:function(v2){
		return vector.create(this._x + v2.getX(), this._y + v2.getY());
	},

	subtract:function(v2){
		return vector.create(this._x - v2.getX(), this._y - v2.getY());
	},

	multiply:function(value){
		return vector.create(this._x * value, this._y * value);
	},

	divide:function(value){
		return vector.create(this._x / value, this._y / value);
	},

	addTo: function (v2){
		this._x += v2.getX();
		this._y += v2.getY();
	},

	subtractFrom: function (v2){
		this._x -= v2.getX();
		this._y -= v2.getY();
	},


	multiplyBy: function (value){
		this._x *= value;
		this._y *= value;
	},


	divideBy: function (value){
		this._x /= value;
		this._y /= value;
	},

}