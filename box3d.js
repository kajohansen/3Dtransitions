
var toggle = true;
var activeDrawer = true;
var loginHeight = 0;
var loginDiv = document.getElementById('login');

var xAngle = 0;
var yAngle = 0;
var cube = document.getElementById('cube');
var cubeTop = cube.offsetTop;

var pfx = '';


function toggleLogin() {
	if (activeDrawer) {
		if (toggle == true) {
//			activeDrawer = false;
			toggle = false;
			cubeDown();
//			(function animLoop() {
//				downHandle = requestAnimFrame(animLoop);
//				animateDown();
//			})();
		} else {
//			activeDrawer = false;
			toggle = true;
			cubeUp();
//			(function animLoop() {
//				upHandle = requestAnimFrame(animLoop);
//				animateUp();
//			})();
		}
	}
}

function cubeDown() {
	 xAngle -= 45;
	 if (pfx == 'webkit') {
	 	cube.style.webkitTransform = "rotateX("+xAngle+"deg)";
	 } else if (pfx == 'moz') {
	 	cube.style.MozTransform = "rotateX("+xAngle+"deg)";
	 } else if (pfx == 'ms') {
	 	cube.style.msTransform = "rotateX("+xAngle+"deg)";
	 } else {
	 	cube.style.transform = "rotateX("+xAngle+"deg)";
	 }
}
function cubeUp() {
	 xAngle += 45;
	 if (pfx == 'webkit') {
	 	cube.style.webkitTransform = "rotateX("+xAngle+"deg)";	
	 } else if (pfx == 'moz') {
	 	cube.style.MozTransform = "rotateX("+xAngle+"deg)";
	 } else if (pfx == 'ms') {
	 	cube.style.msTransform = "rotateX("+xAngle+"deg)";
	 } else {
	 	cube.style.transform = "rotateX("+xAngle+"deg)";
	 }
}

function checksupport() {
	var props = ['perspectiveProperty', 'OTransform', 'WebkitTransform', 'MozTransform', 'msTransform'];
	var i = 0;
	var support = false;
	while (props[i]) {
		if (props[i] in cube.style) {
			support = true;
			pfx = props[i].replace('Transform','');
			pfx = pfx.toLowerCase();
			break;
		}
		i++;
	}
	return support; 
}
checksupport();