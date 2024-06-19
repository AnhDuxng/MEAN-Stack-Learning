const express = require('express');
const { ObjectId } = require('mongodb')
const { connectToDb, getDb } = require('./db');

// Init app & middlewares
const app = express();
let db;

// db connection
connectToDb((err) => {
    if (!err) {
        app.listen(3000, () => {
            console.log('App is listening on port 3000');
        });
        db = getDb();
    } else {
        console.error('Error connecting to the database:', err);
    }
});

// routes
app.get('/', (req, res) => {
    if (!db) {
        res.status(500).json({ msg: 'Database connection not established' });
        return
}
    })

app.get('/books', (req, res) => {
    if (!db) {
        res.status(500).json({ msg: 'Database connection not established' });
        return;
    }

    let books = [];

    db.collection('books')
        .find()
        .sort({ author: 1 })
        .forEach(book =>books.push(book))
        .then(() => {
            res.status(200).json(books);
        })
        .catch(err => {
            res.status(500).json({ msg: 'Could not fetch the documents', error: err });
        });
});

app.get('/books/:id', (req, res) => {
    if (!db) {
        res.status(500).json({ msg: 'Database connection not established' });
        return;
    }

    db.collection('books')
        .findOne({ _id: new ObjectId(req.params.id) })
        .then(doc => {
            if (!doc) {
                res.status(404).json({ msg: 'Document not found' });
            } else {
                res.status(200).json(doc);
            }
        })
        .catch(err => {
            res.status(500).json({ msg: 'Could not fetch the document', error: err });
        });
});