
var toggle = true;
var activeDrawer = true;
var loginHeight = 0;
var loginDiv = document.getElementById('login');

var xAngle = 0;
var yAngle = 0;
var cube = document.getElementById('cube');
var cubeTop = cube.offsetTop;

var pfx = '';

function cubeUp() {
	xAngle += 90;
	if (!KAVars.cubeAnimating) {
		KAVars.cubeAnimating = true;
		if (pfx == 'webkit') {
			cube.style.webkitTransform = "rotateX("+xAngle+"deg)";	
			console.log(cube.style.webkitTransform);
		} else if (pfx == 'moz') {
			cube.style.MozTransform = "rotateX("+xAngle+"deg)";
		} else if (pfx == 'ms') {
			cube.style.msTransform = "rotateX("+xAngle+"deg)";
		} else {
			cube.style.transform = "rotateX("+xAngle+"deg)";
		}
		setTimeout(function() {
			 KAVars.cubeAnimating = false;
		}, 2500);
	}
}

function cubeDown() {
	xAngle -= 90;
	if (!KAVars.cubeAnimating) {
		KAVars.cubeAnimating = true;
		if (pfx == 'webkit') {
			cube.style.webkitTransform = "rotateX("+xAngle+"deg)";
			console.log(cube.style.webkitTransform);
		} else if (pfx == 'moz') {
			cube.style.MozTransform = "rotateX("+xAngle+"deg)";
		} else if (pfx == 'ms') {
			cube.style.msTransform = "rotateX("+xAngle+"deg)";
		} else {
			cube.style.transform = "rotateX("+xAngle+"deg)";
		}
		setTimeout(function() {
		 KAVars.cubeAnimating = false;
		}, 2500);
	}
}

function cubeLeft() {
	yAngle += 90;
 	if (!KAVars.cubeAnimating) {
		KAVars.cubeAnimating = true;
		if (pfx == 'webkit') {
			cube.style.webkitTransform = "rotateY("+yAngle+"deg)";
			console.log(cube.style.webkitTransform);	
		} else if (pfx == 'moz') {
			cube.style.MozTransform = "rotateY("+yAngle+"deg)";
		} else if (pfx == 'ms') {
			cube.style.msTransform = "rotateY("+yAngle+"deg)";
		} else {
			cube.style.transform = "rotateY("+yAngle+"deg)";
		}
		setTimeout(function() {
			 KAVars.cubeAnimating = false;
		}, 2500);
	}
}
function cubeRight() {
	yAngle -= 90;
	if (!KAVars.cubeAnimating) {
		KAVars.cubeAnimating = true;
		if (pfx == 'webkit') {
			cube.style.webkitTransform = "rotateY("+yAngle+"deg)";
			console.log(cube.style.webkitTransform);	
		} else if (pfx == 'moz') {
			cube.style.MozTransform = "rotateY("+yAngle+"deg)";
		} else if (pfx == 'ms') {
			cube.style.msTransform = "rotateY("+yAngle+"deg)";
		} else {
			cube.style.transform = "rotateY("+yAngle+"deg)";
		}
		setTimeout(function() {
			 KAVars.cubeAnimating = false;
		}, 2500);
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