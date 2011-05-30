$(function() {
	var socket = new io.Socket(null, {port: 8080});
	socket.connect();

	function iosHandleOrientation(event) {
		var orientData = event.accelerationIncludingGravity;
		var accel_scale = 30.0;
		var filter_val = 0.1;
		socket.send(orientData.x + " " + orientData.y + " " + orientData.z );	 
	}	

	window.addEventListener("devicemotion", iosHandleOrientation, true);

	socket.on('message', function(obj) {
		data = obj.split(" ");
		$('#data').append("<tr><td>" + data[0] + "</td><td>"+ data[1] + "</td><td>" +data[2] + "</td></tr>");
	});
});
