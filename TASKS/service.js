var mongoDao = require('./mongodao');

function addChoiceServer(choices) {
	mongoDao.addChoices(choices);
}


function getChoices(res) {
	return mongoDao.getChoices(res);
}



exports.addChoiceServer = addChoiceServer;
exports.getChoicesServer = getChoices;