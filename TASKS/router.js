
var getMethods = require('./get');
var postMethods = require('./post');

function route(pathName, req, res) {

	if(getMethods[pathName]) {
		getMethods[pathName](req, res);
	}

	if (postMethods[pathName]){
		postMethods[pathName](req, res);
	}
}

exports.route = route;