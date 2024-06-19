    const bookController = require('../controller/bookController');

    const router = require('express').Router();

    // Add 1 book
    router.post('/', bookController.addABook);
    // Get all books
    router.get('/', bookController.getAllBooks);
    // Get 1 book by id
    router.get('/:id', bookController.getABook);
    // Update 1 book
    router.put('/:id', bookController.updateBook);
    //Delete book 
    router.delete('/:id', bookController.deleteBook);
    module.exports = router;