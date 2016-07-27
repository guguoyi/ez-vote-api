var router = require('./router');

function start() {
    var http = require('http');

    var url = require('url');

	function onRequest(req, res) {
		
		var pathname = url.parse(req.url).pathname;

		console.log(pathname.substring(1) + '----request method----');
		
		router.route(pathname.substring(1), req, res);
	}

	http.createServer(onRequest).listen(8888);
	console.log("Server has started");
}

exports.start = start;