const express = require('express');
const router = express.Router();


// load book model
const Book = require('../../models/Book');


// @route GET api/books/test
// #description tests books route
// @access Public
router.get('/test', (req, res) => res.send('book route testing!'));

// @route GET api/books
// @description Get all books
// @access public

router.get('/', (req, res) => {
	Book.find()
		.then(books=> res.json(books))
		.catch(err => res.status(404).json({ nobookfound: 'No Books found' }));
});

// @route GET api/books/:id
// @description Get single book by id
// @access Public
router.get('/:id', (req, res) => {
	Book.findById(req.params.id)
	.then(book => res.json(book))
	.catch(err => res.status(404).json({ nobookfound: 'No Book found' }));
});

// @route POST api/books
// @description add/save book
// @access Public
router.post('/', (req, res) => {
	Book.create(req.body)
	.then(book => res.json({ msg: 'Book added successfully' }))
	.catch(err => res.status(404).json({ error: 'Unable to add this book' }));
});

// @route GET api/books/:id
// @description Update book
// @access public
router.put('/:id', (req, res) => {
	Book.findByIdAndUpdate(req.params.id, req.body)
	.then(book => res.json({ msg: 'Updated Successfully' }))
	.catch(er => res.status(404).json({ error: 'Unable to update this book' }));
});

// @route GET api/books/:id
// @description Delte book by id
// @access Public
router.delete('/:id', (res, req) => {
	Book.findByIdAndRemove(req.params.id, req.body)
	.then(book => res.json({ msg: 'Book entry deleted successfully' }))
	.catch(err => rest.status(404).json({ error: 'No such book' }));
});

module.exports = router;
		
