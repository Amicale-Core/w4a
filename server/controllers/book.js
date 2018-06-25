'use_strict';

const db = require('../models');

module.exports = {
	
	get_all: (req, res, next) => {
		return db.Book.findAll({
			order: [ 'title' ]
		})
		.then((books) => res.json(books))
		.catch((err) => next(err));
	},
	
	create: (req, res, next) => {
		const data = {
			title: req.body.title || ''
		};

		return req.author.createBook(data)
		.then((book) => res.json(book))
		.catch((err) => next(err));

		/*
		return db.Book.create(data)
		.then((book) => res.json(book))
		.catch((err) => next(err));
		*/
	},
	
	get_by_id: (req, res, next) => {
		return db.Book.findById(req.params.book_id)
		.then((book) => {
			if (!book) {
				throw { status: 404, message: 'Requested Book not found' };
			}
			return res.json(book);
		})
		.catch((err) => next(err));
	},
	
	load_by_id: (req, res, next) => {
		return db.Book.findById(req.params.book_id)
		.then((book) => {
			if (!book) {
				throw { status: 404, message: 'Requested Book not found' };
			}
			req.book = book;
			return next();
		})
		.catch((err) => next(err));
	},
	
	update_user: (req, res, next) => {
		return db.Book.findById(req.params.book_id)
		.then((book) => {
			if (!book) {
				throw { status: 404, message: 'Requested Book not found' };
			}
			book.UserId = req.user.id;
			return book.save();
		})
		.then((book) => res.json(book))
		.catch((err) => next(err));
	},
	
	delete_by_id: (req, res, next) => {
		return db.Book.findById(req.params.book_id)
		.then((book) => {
			if (!book) {
				throw { status: 404, message: 'Requested Book not found' };
			}
			return book.destroy();
		})
		.then(() => res.status(200).end())
		.catch((err) => next(err));
	},

    get_all_of_user: (req, res, next) => {
        return req.user.getBooks()
        .then((books) => {
            return res.json(books);
        })
		.catch((err) => next(err));
	},
	
	get_all_of_author: (req, res, next) => {
		return req.author.getBooks()
        .then((books) => {
            return res.json(books);
        })
		.catch((err) => next(err));

		/*
        return req.author.findById(req.params.author_id)
        .then((author) => {
			if (!author) {
				throw { status: 404, message: 'Requested Author not found' };
			}
			return author.getBooks();
        })
        .then((books) => {
            return res.json(books);
        })
		.catch((err) => next(err));
		*/
	}

};
