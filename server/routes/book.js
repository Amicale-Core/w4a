'use strict';

const author_ctrl = require('../controllers/author');
const user_ctrl = require('../controllers/user');
const book_ctrl = require('../controllers/book');

module.exports = [
	
	{
		url: '/book',
		method: 'get',
		func: book_ctrl.get_all
	},
	{
		url: '/book/:book_id',
		method: 'get',
		func: book_ctrl.get_by_id
	},
	{
		url: '/author/:author_id/book',
		method: 'post',
		func: [ author_ctrl.load_by_id, book_ctrl.create ]
	},
	{
		url: '/author/:author_id/book',
		method: 'get',
		func: [ author_ctrl.load_by_id, book_ctrl.get_all_of_author ]
	},
	{
		url: '/user/:user_id/book/:book_id',
		method: 'put',
		func: [ user_ctrl.load_by_id, book_ctrl.update_user ]
	},
	{
		url: '/user/:user_id/book',
		method: 'get',
		func: [ user_ctrl.load_by_id, book_ctrl.get_all_of_user ]
	},
	{
		url: '/book/:book_id',
		method: 'delete',
		func: book_ctrl.delete_by_id
	}
	
];
