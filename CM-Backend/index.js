// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config(); // Import dotenv for environment variables

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware

app.use(cors());
app.use(bodyParser.json());

const url = process.env.URL 
console.log(url);

// MongoDB Connection
mongoose.connect(process.env.URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

// Importing router
const customerRouter = require('./Routes/route');

// Routes
app.use('/customers', customerRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
