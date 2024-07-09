const { Book, Author } = require('../model/model');

/* const bookController = {
    Add 1 book
    addABook: async(req, res) =>{
        try{
            const newBook = new Book(req.body);
            const savedBook = await newBook.save();
            if(req.body.author){
                const author = Author.findById(req.body.author);
                await author.updateOne({$push: {books: savedBook._id}})
            }
            res.status(200).json(savedBook);
        } catch(err){
            res.status(500).json(err);
        }
    },
}; */

const bookController = {
    addABook: async (req, res) => {
      try {
        const { name, publishedDate, genres, author } = req.body;
  
        // Validate required fields
        if (!name || !author) {
          return res.status(400).json({ error: 'Missing required fields' });
        }
  
        const newBook = new Book({ name, publishedDate, genres, author });
        const savedBook = await newBook.save();
  
        const authorDoc = await Author.findById(author);
        await authorDoc.updateOne({ $push: { books: savedBook._id } });
  
        res.status(200).json(savedBook);
      } catch (err) {
        res.status(500).json(err);
      }
    },
 

  // Get all books
    getAllBooks: async (req, res) => {
    try{
    const allBooks = await Book.find();
    res.status(200).json(allBooks);
    } catch (err) {
        res.status(500).json(err);
    }
},

// Get a book
    getABook: async (req, res) => {
    try{
    const book = await Book.findById(req.params.id).populate("author");
    res.status(200).json(book);
    } catch (err) {
        res.status(500).json(err);
    }
},

// Update a book
    updateBook: async (req, res) => {
        try{
        const book = await Book.findById(req.params.id);
        await book.updateOne({$set: req.body});
        res.status(200).json("Update sucessfully");
        } catch (err) {
            res.status(500).json(err);
        }
    },
// Delete a book
    deleteBook: async (req, res) => {
        try{
        await Author.updateMany(
            {books: req.params.id}, 
            {$pull: {books: req.params.id}});
        await Book.findByIdAndDelete(req.params.id);
        res.status(200).json("Delete sucessfully");
        } catch (err) {
            res.status(500).json(err);
        }
    }
};

module.exports = bookController;