var express = require('express');
var router = express.Router();
var db = require('../model/index');
db.init();


/* GET home page. */
router.get('/admin', function(req, res, next) { 	
	db.quests.readAllEntries().then((data) => {
		console.log(data);
		res.send({});
	});
});

router.get('quests/all', (req, res) => {
	db.quests.readAllEntries().then((data) => {
		console.log(data);
		res.send({});
	});
});


router.post('/login', (req, res) => {
	res.type('json');   
	console.log(req.body);
	if ((req.body.login === 'admin' && req.body.password === 'admin') || req.body.token === 'NASd7n81' ) {
		let data = {
			token: 'NASd7n81',
			data: []
		}; 
		res.jsonp(data);
	} else {
		res.status(500).send({ error: 'not valid' });
	}
});

module.exports = router;
