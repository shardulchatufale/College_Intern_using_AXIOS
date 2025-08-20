// app.js

import express from 'express';
import mongoose from 'mongoose';
import route from './routes/route.js';

const app = express();

// Built-in JSON parser
app.use(express.json());

// Connect to MongoDB (Mongoose v6+ defaults handle parser & topology)
mongoose
  .connect('mongodb+srv://shardulschatufale:shardul1234@cluster0.w686kdy.mongodb.net/TestDatabase')
  .then(() => console.log('MongoDb is connected'))
  .catch((err) => console.log(err));

// Use routes
app.use('/', route);

// Handle all other routes - 404
app.all('/**', (req, res) => {
  res.status(404).send({ status: false, message: 'Page Not Found!' });
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Express app running on port ${PORT}`);
});
