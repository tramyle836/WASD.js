// WASP
function WASD() {

	// Player 1
	var player1;
	this.map = function map(key) {
		player1 = key;
	}

	// UP
	this.UP = function moveme(fun) {
		$(document).keydown(function(e) {
			if(e.keyCode == '87'){
				fun(player1);
			}
		});
	}

	// LEFT
	this.LEFT = function moveme(fun) {
		$(document).keydown(function(e) {
			if(e.keyCode == '65'){
				fun(player1);
			}
		});
	}

	// DOWN
	this.DOWN = function moveme(fun) {
		$(document).keydown(function(e) {
			if(e.keyCode == '83'){
				fun(player1);
			}
		});
	}

	// RIGHT
	this.RIGHT = function moveme(fun) {
		$(document).keydown(function(e) {
			if(e.keyCode == '68'){
				fun(player1);
			}
		});
	}

	// Locate
	this.locate = function locate() {
		var query = $(player1);
		var position = query.position();
		var location = {
			top: position.top,
			bottom: position.bottom,
			left: position.left,
			right: position.right,
		};
		return location;
	}

}
var wasd = new WASD();
