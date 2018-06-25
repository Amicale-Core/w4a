'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('../client/public'));

app.use(bodyParser.json());

// add CORS headers
app.all('*', (req, res, next) => {
	res.set('Access-Control-Allow-Origin', '*');
	res.set('Access-Control-Allow-Credentials', true);
	res.set('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
	res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');
	if (req.method === 'OPTIONS') {
		return res.status(200).end();
	} else {
		next();
	}
});

// register routes
require('./routes')(app);

// register error handling middleware
app.use(function (err, req, res, next) {
	if (err.status === undefined) {
		return res.status(500).send(err.message);
	} else {
		return res.status(err.status).send(err.message);
	}
});

// launch server
const server = app.listen(3344, function () {
	const host = server.address().address;
	const port = server.address().port;
	console.log('App listening at http://%s:%s', host, port);
});
