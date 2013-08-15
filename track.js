
function fadeWidget() {
	document.getElementsByTagName("body")[0].removeChild(widgetDiv);
	widgetAnimateUpDiv.style.opacity = 0;
	widgetAnimateRightDiv.style.opacity = 0;
	widgetAnimateDownDiv.style.opacity = 0;
	widgetAnimateLeftDiv.style.opacity = 0;
	KAVars.widgetON = false;
	setTimeout(function() {
		_.each(_.range(0, widgetList.length, 1), function (item) {
			this[item].style.left = "-1000px";
		}, widgetList);
	}, 750);
	KAVars.dcIndex = 8;
}

function toggleWidget() {
	event.preventDefault();
	if (!KAVars.widgetON) {
		svgCircle.setAttribute("cx", KAVars.cursorPosX);
		svgCircle.setAttribute("cy", KAVars.cursorPosY);
		document.getElementsByTagName("body")[0].appendChild(widgetDiv);
		
		widgetDiv.addEventListener('mouseup', toggleWidget, false);
		
		widgetAnimateUpDiv.style.left = (new Number(KAVars.cursorPosX) - 50) + "px";
		widgetAnimateUpDiv.style.top = KAVars.cursorPosY - 75 + "px";
		widgetAnimateUpDiv.style.opacity = .7;
		
		widgetAnimateRightDiv.style.left = (new Number(KAVars.cursorPosX) + 50) + "px";
		widgetAnimateRightDiv.style.top = (new Number(KAVars.cursorPosY) - 15) + "px";
		widgetAnimateRightDiv.style.opacity = .7;
		
		widgetAnimateDownDiv.style.left = (new Number(KAVars.cursorPosX) - 50) + "px";
		widgetAnimateDownDiv.style.top = KAVars.cursorPosY + 50 + "px";
		widgetAnimateDownDiv.style.opacity = .7;
		
		widgetAnimateLeftDiv.style.left = (new Number(KAVars.cursorPosX) - 150) + "px";
		widgetAnimateLeftDiv.style.top = KAVars.cursorPosY -15 + "px";
		widgetAnimateLeftDiv.style.opacity = .7;
		
		widgetDiv.appendChild(svgElement);
		KAVars.widgetON = true;
		drawCircle();
	} else {
		cancelAnimFrame(KAVars.dcHandle);
		fadeWidget();
	}
		
}

function drawCircle() {
	(function animLoop() {
		KAVars.dcHandle = requestAnimFrame(animLoop);
		KAVars.dcIndex += 0.3;
		if (KAVars.dcIndex < 20)
			svgCircle.setAttribute("r", KAVars.dcIndex);
		else
			cancelAnimFrame(KAVars.dcHandle);
	})();
}	

function toggleHover(event) {
	if (!KAVars.ldHover) {
		event.target.style.backgroundColor = "#F7941E";
		event.target.style.border = "2px solid aqua";
		KAVars.ldHover = true;
	} else {
		event.target.style.backgroundColor = "#999";
		event.target.style.border = "2px solid #333";
		KAVars.ldHover = false;
	}
}

function animateCube(event) {
	if (KAVars.widgetON) {
		fadeWidget();
	}
	if (event.target.id == "widgetAnimateUpOption") {
		cubeUp();
	}
	if (event.target.id == "widgetAnimateRightOption") {
		cubeRight();
	}
	if (event.target.id == "widgetAnimateDownOption") {
		cubeDown();
	}
	if (event.target.id == "widgetAnimateLeftOption") {
		cubeLeft();
	}
}

document.getElementById('main').addEventListener('mousedown', function(event) {
	toggleWidget(event);
}, false);
document.getElementById('widgetAnimateUpOption').addEventListener('mouseup', function(event) {
	if (KAVars.widgetON) {
		animateCube(event);
	}
}, false);
document.getElementById('widgetAnimateRightOption').addEventListener('mouseup', function(event) {
	if (KAVars.widgetON) {
		animateCube(event);
	}
}, false);
document.getElementById('widgetAnimateDownOption').addEventListener('mouseup', function(event) {
	if (KAVars.widgetON) {
		animateCube(event);
	}
}, false);
document.getElementById('widgetAnimateLeftOption').addEventListener('mouseup', function(event){
	if (KAVars.widgetON) {
		animateCube(event);
	}
}, false);

var widgetList = document.getElementsByClassName("widget_options");
console.log(widgetList.length);

_.each(_.range(0, widgetList.length, 1), function (item) {
	this[item].addEventListener('mouseover', toggleHover, false);
}, widgetList);

_.each(_.range(0, widgetList.length, 1), function (item) {
	this[item].addEventListener('mouseout', toggleHover, false);
}, widgetList);


function displayMousePos(event) {
	if (event) {
		KAVars.cursorPosX = event.clientX;
		KAVars.cursorPosY = event.clientY;
		/* Layout debug */
		KAVars.posXdiv.innerText = event.clientX;
		KAVars.posYdiv.innerText = event.clientY;
	}
}

function displayWindowSize() {
	KAVars.winWidthDiv.innerText = window.innerWidth;
	KAVars.winHeightDiv.innerText = window.innerHeight;
}

window.requestAnimFrame = (function() {
  return window.requestAnimationFrame ||
         window.webkitRequestAnimationFrame ||
         window.mozRequestAnimationFrame ||
         window.oRequestAnimationFrame ||
         window.msRequestAnimationFrame ||
         function(/* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {
           return window.setTimeout(callback, 1000/60);
         };
})();

window.cancelAnimFrame = (function() {
  return window.cancelAnimationFrame ||
         window.webkitCancelAnimationFrame ||
         window.mozCancelAnimationFrame ||
         window.oCancelAnimationFrame ||
         window.msCancelAnimationFrame ||
         window.clearTimeout;
})();

document.onmousemove = displayMousePos;
window.onresize = displayWindowSize;
displayWindowSize();
displayMousePos();
