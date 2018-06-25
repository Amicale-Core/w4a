'use_strict';

const db = require('../models');

module.exports = {
	
	get_all: (req, res, next) => {
		return db.User.findAll({
			order: [ 'name' ]
		})
		.then((users) => res.json(users))
		.catch((err) => next(err));
	},
	
	create: (req, res, next) => {
		const data = {
		    name: req.body.name || ''
		};
		return db.User.create(data)
		.then((user) => res.json(user))
		.catch((err) => next(err));
	},
	
	get_by_id: (req, res, next) => {
		return db.User.findById(req.params.user_id)
		.then((user) => {
			if (!user) {
				throw { status: 404, message: 'Requested User not found' };
			}
			return res.json(user);
		})
		.catch((err) => next(err));
	},
	
	load_by_id: (req, res, next) => {
		return db.User.findById(req.params.user_id)
		.then((user) => {
			if (!user) {
				throw { status: 404, message: 'Requested User not found' };
			}
			req.user = user;
			return next();
		})
		.catch((err) => next(err));
	},
	
	update_by_id: (req, res, next) => {
		return db.User.findById(req.params.user_id)
		.then((user) => {
			if (!user) {
				throw { status: 404, message: 'Requested User not found' };
			}
			Object.assign(user, req.body);
			return user.save();
		})
		.then((user) => res.json(user))
		.catch((err) => next(err));
	},
	
	delete_by_id: (req, res, next) => {
		return db.User.findById(req.params.user_id)
		.then((user) => {
			if (!user) {
				throw { status: 404, message: 'Requested User not found' };
			}
			return user.destroy();
		})
		.then(() => res.status(200).end())
		.catch((err) => next(err));
	}

};
