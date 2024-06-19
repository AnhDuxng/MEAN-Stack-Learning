const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const boydyParser = require('body-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const authorRoute = require('./routes/author');
const bookRoute = require('./routes/book');

dotenv.config();

// connect database
const connectDB = async() => {
    try {
        await mongoose.connect((process.env.MONGODB_URL));
        console.log('Database connected');
    } catch (err) {
        console.log(err.message);
        process.exit(1); // Exit the process with a failure code
      }
    };

    // Call the connectDB function to initiate the connection
connectDB();

// Handle unhandled Promise rejections
process.on('unhandledRejection', (error) => {
  console.error('Unhandled Promise Rejection:', error);
});


app.use(bodyParser.json({limit: "50mb"}))
app.use(cors());
app.use(morgan("common"));

//app.get('/api/', (req, res) =>{
//  res.status(200).json("Hello");})

// ROUTES
app.use("/v1/author", authorRoute);
app.use("/v1/book", bookRoute);

app.listen(process.env.PORT || 8000, () => {
    console.log("Server is running...");
  });