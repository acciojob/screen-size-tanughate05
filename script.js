//your JS code here. If required.
function getSize(){
	var Width = document.documentElement.clientWidth;
	var Height = document.documentElement.clientHeight;

	document.getElementById('sizeInfo').innerHTML = "<h1>Width: " + Width + " and  Height: " + Height + "</h1>";
}
