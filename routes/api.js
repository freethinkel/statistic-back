var express = require('express');
var router = express.Router();
var db = require('../model/index');

/* GET home page. */
router.get('/admin', function(req, res, next) { 	
	db.quests.readAllEntries().then((data) => {
		console.log(data);
		res.send({});
	});
});

router.get('/quests/all', (req, res) => {
	db.quests.readAllEntries().then((data) => {
		console.log(data);
		res.jsonp(data);
	});
});


router.put('/quest', (req, res) => {
	res.type('json');
	console.log(req.headers);
	console.log(req.body);
	if (req.body) {
		db.quests.update(req.body.id, req.body.model).then(data => {
			console.log(data);
			res.jsonp(data);
		});
	}
});

router.post('/delete/quest', (req, res) => {
	console.log(req.body);
	console.log(req.headers);
	res.type('json');
	if (req.body) {
		db.quests.delete(req.body.id).then(data => {
			console.log(data);
			res.jsonp(data);
		});
	}
});

router.post('/quest', (req, res) => {
	res.type('json');   
	console.log(req.body);
	if (req.body) {
		db.quests.create(req.body).then(data => {
			console.log('create quest');
			res.jsonp({result: 'ok'});
		});
	}
});

router.get('/users/list', (req, res) => {
	res.type('json');
	db.users.readAllEntries().then(data => {
		res.jsonp(data);
	});
});

router.post('/users/create', (req, res) => {
	res.jsonp('json');
	db.users.create(req.body).then(data => {
		res.send(data);
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
