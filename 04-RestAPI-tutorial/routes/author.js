const authorController = require('../controller/authorController');

const router = require('express').Router();

// Add auhthors
router.post("/", authorController.addAuthor);

// Get all authors
router.get('/', authorController.getAllAuthors);

// Get an author
router.get('/:id', authorController.getAnAuthor);

// Update an author
router.put('/:id', authorController.updateAnAuthor);

// Delete an author
router.delete('/:id', authorController.deleteAuthor);

module.exports = router;