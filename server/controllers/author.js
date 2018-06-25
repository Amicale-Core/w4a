'use_strict';

const db = require('../models');

module.exports = {
	
	get_all: (req, res, next) => {
		return db.Author.findAll({
			order: [ 'lastname' ]
		})
		.then((authors) => res.json(authors))
		.catch((err) => next(err));
	},
	
	create: (req, res, next) => {
		const data = {
			firstname: req.body.firstname || '',
			lastname: req.body.lastname || ''
		};
		return db.Author.create(data)
		.then((author) => res.json(author))
		.catch((err) => next(err));
	},
	
	get_by_id: (req, res, next) => {
		return db.Author.findById(req.params.author_id)
		.then((author) => {
			if (!author) {
				throw { status: 404, message: 'Requested Author not found' };
			}
			return res.json(author);
		})
		.catch((err) => next(err));
	},
	
	load_by_id: (req, res, next) => {
		return db.Author.findById(req.params.author_id)
		.then((author) => {
			if (!author) {
				throw { status: 404, message: 'Requested Author not found' };
			}
			req.author = author;
			return next();
		})
		.catch((err) => next(err));
	},
	
	update_by_id: (req, res, next) => {
		return db.Author.findById(req.params.author_id)
		.then((author) => {
			if (!author) {
				throw { status: 404, message: 'Requested Author not found' };
			}
			Object.assign(author, req.body);
			return author.save();
		})
		.then((author) => res.json(author))
		.catch((err) => next(err));
	},
	
	delete_by_id: (req, res, next) => {
		return db.Author.findById(req.params.author_id)
		.then((author) => {
			if (!author) {
				throw { status: 404, message: 'Requested Author not found' };
			}
			return author.destroy();
		})
		.then(() => res.status(200).end())
		.catch((err) => next(err));
	}

};
