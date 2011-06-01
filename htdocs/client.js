$(function() {
	var socket = new io.Socket(null, {port: 8080});
	socket.connect();

	function iosHandleOrientation(event) {
		var orientData = event.accelerationIncludingGravity;
		socket.send(orientData.x + " " + orientData.y + " " + orientData.z );	 
	}

	window.addEventListener("devicemotion", iosHandleOrientation, true);

	socket.on('message', function(obj) {
		data = obj.split(" ");
		$('#data').append("<tr><td>" + parseFloat(data[0]).toFixed(3) + "</td><td>" + parseFloat(data[1]).toFixed(3) + "</td><td>" + parseFloat(data[2]).toFixed(3) + "</td></tr>");

	});
});
