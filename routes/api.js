var express = require('express');
var router = express.Router();
var db = require('../model/index');
var token = 'FGe5qNfTkV';
let uData = {
	login: 'admin',
	password: 'admin'
}


/* GET home page. */
router.get('/admin', function(req, res, next) { 	
	db.quests.readAllEntries().then((data) => {
		console.log(data);
		res.send({});
	});
});

router.get('/quests/all', (req, res) => {
	db.quests.readAllEntries().then((data) => {
		// console.log(data);
		if (req.headers.authorization && req.headers.authorization === token) {
			res.jsonp(data);
		} else {
			let uData = data.map(item => { item.solution = ''; return item});
			console.log(uData);
			res.jsonp(uData);
		}
	});
});


router.put('/quest', (req, res) => {
	res.type('json');
	console.log(req.headers);
	console.log(req.body);
	if (req.body && req.headers.authorization && req.headers.authorization === token) {
		db.quests.update(req.body.id, req.body.model).then(data => {
			console.log(data);
			res.jsonp(data);
		});
	} else {
		res.error('not valid');
	}
});

router.post('/delete/quest', (req, res) => {
	console.log(req.body);
	console.log(req.headers);
	res.type('json');
	if (req.body && req.headers.authorization && req.headers.authorization === token) {
		db.quests.delete(req.body.id).then(data => {
			console.log(data);
			res.jsonp(data);
		});
	} else {
		res.error('not valid');
	}
});

router.post('/user/delete', (req, res) => {
	console.log(req.body);
	res.type('json');
	if (req.body && req.body.id && req.headers.authorization && req.headers.authorization === token) {
		db.users.delete(req.body.id).then(data => {
			console.log(data);
			res.jsonp(data);
		});
	} else {
		req.error('not valid');
	}
});

router.post('/quest', (req, res) => {
	res.type('json');   
	console.log(req.body);
	if (req.body && req.headers.authorization && req.headers.authorization === token) {
		db.quests.create(req.body).then(data => {
			console.log('create quest');
			res.jsonp({result: 'ok'});
		});
	} else {
		res.error('not valid');
	}
});

router.get('/users/list', (req, res) => {
	res.type('json');
	console.log(req.headers.authorization);
	if (req.headers.authorization && req.headers.authorization === token) {
		db.users.readAllEntries().then(data => {
			res.jsonp(data);
		});
	} else {
		res.error('not auth');
	}
});

router.post('/users/create', (req, res) => {
	res.type('json');
	let count = 0;
	db.quests.readAllEntries().then(data => {
		for (let i = 0; i < data.length; i++) {
			count += req.body.solutions[i].trim().toLowerCase() === data[i].solution.trim().toLowerCase() ? 1 : 0;
		}
		let user = {
			data: req.body,
			correctCount: count,
			totalCount: data.length,
			date: new Date().getTime() 
		}
		db.users.create(user).then(data => {
			res.send(data);	
		});
	})
});

router.post('/login', (req, res) => {
	res.type('json');   
	console.log(req.body);
	if ((req.body.login === uData.login && req.body.password === uData.password) || req.body.token === token ) {
		let data = {
			token,
			data: []
		}; 
		res.jsonp(data);
	} else {
		res.error('not valid');
	}
});

module.exports = router;
