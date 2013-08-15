/* ***** Widget Div ***** */
var widgetDiv = document.createElement("div");
widgetDiv.style.position = "absolute";
widgetDiv.style.width = window.innerWidth + "px";
widgetDiv.style.height = window.innerHeight + "px";
widgetDiv.style.zIndex = 500;
widgetDiv.style.left = "0px";
widgetDiv.style.top = "0px";
/* widgetDiv.style.border = "2px solid black"; */
/* ---------------------- */

/* ***** SVG circle ***** */
var svgElement = document.createElementNS("http://www.w3.org/2000/svg","svg");
svgElement.style.position = "absolute";
var svgCircle = document.createElementNS("http://www.w3.org/2000/svg","circle");
svgCircle.setAttribute("fill", "#FFFFFF");
svgCircle.setAttribute("stroke", "#F7941E");
svgCircle.setAttribute("stroke-miterlimit", 10);
svgCircle.setAttribute("r", 8);
svgElement.appendChild(svgCircle);
/* ---------------------- */

/* ***** Widget Animate Up Div ***** */
var widgetAnimateUpDiv = document.createElement("div");
widgetAnimateUpDiv.setAttribute("class", "widget_options");
widgetAnimateUpDiv.setAttribute("id", "widgetAnimateUpOption");
widgetAnimateUpDiv.style.position = "absolute";
widgetAnimateUpDiv.style.width = "100px";
widgetAnimateUpDiv.style.height ="20px";
widgetAnimateUpDiv.style.padding ="3px";
widgetAnimateUpDiv.style.zIndex = 510;
widgetAnimateUpDiv.style.cursor = "default";
widgetAnimateUpDiv.style.opacity = 0;
widgetAnimateUpDiv.style.fontFamily = "Strait, sans-serif";
widgetAnimateUpDiv.style.fontSize = "11pt";
widgetAnimateUpDiv.style.textAlign = "center";
widgetAnimateUpDiv.style.color = "white";
widgetAnimateUpDiv.style.border = "2px solid #333";
widgetAnimateUpDiv.style.backgroundColor = "#999";
widgetAnimateUpDiv.style.webkitTransition = "opacity 1s ease 0.1s";
widgetAnimateUpDiv.style.webkitUserSelect = "none";
widgetAnimateUpDiv.style.borderRadius = "10px";
widgetAnimateUpDiv.innerHTML = "Animate Up";
document.getElementsByTagName("body")[0].appendChild(widgetAnimateUpDiv);
/* ---------------------- */

/* ***** Widget Animate Right Div ***** */
var widgetAnimateRightDiv = document.createElement("div");
widgetAnimateRightDiv.setAttribute("class", "widget_options");
widgetAnimateRightDiv.setAttribute("id", "widgetAnimateRightOption");
widgetAnimateRightDiv.style.position = "absolute";
widgetAnimateRightDiv.style.width = "100px";
widgetAnimateRightDiv.style.height ="20px";
widgetAnimateRightDiv.style.padding ="3px";
widgetAnimateRightDiv.style.zIndex = 520;
widgetAnimateRightDiv.style.cursor = "default";
widgetAnimateRightDiv.style.opacity = 0;
widgetAnimateRightDiv.style.fontFamily = "Strait, sans-serif";
widgetAnimateRightDiv.style.fontSize = "11pt";
widgetAnimateRightDiv.style.textAlign = "center";
widgetAnimateRightDiv.style.color = "white";
widgetAnimateRightDiv.style.border = "2px solid #333";
widgetAnimateRightDiv.style.backgroundColor = "#999";
widgetAnimateRightDiv.style.webkitTransition = "opacity 1s ease 0.1s";
widgetAnimateRightDiv.style.webkitUserSelect = "none";
widgetAnimateRightDiv.style.borderRadius = "10px";
widgetAnimateRightDiv.innerHTML = "Animate Right";
document.getElementsByTagName("body")[0].appendChild(widgetAnimateRightDiv);
/* ---------------------- */

/* ***** Widget Animate Down Div ***** */
var widgetAnimateDownDiv = document.createElement("div");
widgetAnimateDownDiv.setAttribute("class", "widget_options");
widgetAnimateDownDiv.setAttribute("id", "widgetAnimateDownOption");
widgetAnimateDownDiv.style.position = "absolute";
widgetAnimateDownDiv.style.width = "100px";
widgetAnimateDownDiv.style.height ="20px";
widgetAnimateDownDiv.style.padding ="3px";
widgetAnimateDownDiv.style.zIndex = 530;
widgetAnimateDownDiv.style.cursor = "default";
widgetAnimateDownDiv.style.opacity = 0;
widgetAnimateDownDiv.style.fontFamily = "Strait, sans-serif";
widgetAnimateDownDiv.style.color = "white";
widgetAnimateDownDiv.style.fontSize = "11pt";
widgetAnimateDownDiv.style.textAlign = "center";
widgetAnimateDownDiv.style.border = "2px solid #333";
widgetAnimateDownDiv.style.backgroundColor = "#999";
widgetAnimateDownDiv.style.webkitTransition = "opacity 1s ease 0.1s";
widgetAnimateDownDiv.style.webkitUserSelect = "none";
widgetAnimateDownDiv.style.borderRadius = "10px";
widgetAnimateDownDiv.innerHTML = "Animate Down";
document.getElementsByTagName("body")[0].appendChild(widgetAnimateDownDiv);
/* ---------------------- */

/* ***** Widget Animate Left Div ***** */
var widgetAnimateLeftDiv = document.createElement("div");
widgetAnimateLeftDiv.setAttribute("class", "widget_options");
widgetAnimateLeftDiv.setAttribute("id", "widgetAnimateLeftOption");
widgetAnimateLeftDiv.style.position = "absolute";
widgetAnimateLeftDiv.style.width = "100px";
widgetAnimateLeftDiv.style.height ="20px";
widgetAnimateLeftDiv.style.padding ="3px";
widgetAnimateLeftDiv.style.zIndex = 540;
widgetAnimateLeftDiv.style.cursor = "default";
widgetAnimateLeftDiv.style.opacity = 0;
widgetAnimateLeftDiv.style.fontFamily = "Strait, sans-serif";
widgetAnimateLeftDiv.style.fontSize = "11pt";
widgetAnimateLeftDiv.style.textAlign = "center";
widgetAnimateLeftDiv.style.color = "white";
widgetAnimateLeftDiv.style.border = "2px solid #333";
widgetAnimateLeftDiv.style.backgroundColor = "#999";
widgetAnimateLeftDiv.style.webkitTransition = "opacity 1s ease 0.1s";
widgetAnimateLeftDiv.style.webkitUserSelect = "none";
widgetAnimateLeftDiv.style.borderRadius = "10px";
widgetAnimateLeftDiv.innerHTML = "Animate Left";
document.getElementsByTagName("body")[0].appendChild(widgetAnimateLeftDiv);
/* ---------------------- */















