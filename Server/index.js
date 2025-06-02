// // server.js
// require('dotenv').config();
// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const mongoose = require('mongoose');

// const app = express();

// app.use(cors());
// app.use(bodyParser.json());

// // Log the connection URI for debugging
// const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;

// const mongoURI = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

// // Connect to MongoDB

// mongoose.connect(mongoURI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//     .then(() => console.log('MongoDB connected...'))
//     .catch((err) => console.log('Error connecting to MongoDB:', err));

// // Define the Review schema and model
// const reviewSchema = new mongoose.Schema({
//     name: String,
//     title: String,
//     review: String,
//     rating: Number,   
//   });

// const Review = mongoose.model('Review', reviewSchema);

// // Route to submit a review
// app.post('/api/reviews', async (req, res) => {
//     try {
//         const { name, review, rating, title } = req.body; // Include title in the destructuring
//         const newReview = new Review({ name, review, rating, title }); // Include title when creating the review
//         await newReview.save();
//         res.status(201).json(newReview);
//     } catch (error) {
//         console.error('Error saving review:', error); // Log error details
//         res.status(500).json({ message: 'Error saving review', error });
//     }
// });

// // Route to get all reviews
// app.get('/api/reviews', async (req, res) => {
//     try {
//         const reviews = await Review.find();
//         res.json(reviews);
//     } catch (error) {
//         console.error('Error fetching reviews:', error); // Log error details
//         res.status(500).json({ message: 'Error fetching reviews', error });
//     }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));







// server.js
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Load environment variables
const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;

// MongoDB URI
const mongoURI = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// Review Schema and Model
const reviewSchema = new mongoose.Schema({
  name: String,
  title: String,
  review: String,
  rating: Number,
});
const Review = mongoose.model('Review', reviewSchema);

// Visitor Schema and Model
const visitorSchema = new mongoose.Schema({
  count: {
    type: Number,
    default: 0,
  },
});
const Visitor = mongoose.model('Visitor', visitorSchema);

// ===== ROUTES =====

// POST a Review
app.post('/api/reviews', async (req, res) => {
  try {
    const { name, review, rating, title } = req.body;
    const newReview = new Review({ name, review, rating, title });
    await newReview.save();
    res.status(201).json(newReview);
  } catch (error) {
    console.error('❌ Error saving review:', error);
    res.status(500).json({ message: 'Error saving review', error });
  }
});

// GET all Reviews
app.get('/api/reviews', async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (error) {
    console.error('❌ Error fetching reviews:', error);
    res.status(500).json({ message: 'Error fetching reviews', error });
  }
});

// GET + Increment Visitor Count
app.get('/api/visitors', async (req, res) => {
  try {
    let visitor = await Visitor.findOne();

    if (!visitor) {
      visitor = new Visitor({ count: 1 });
    } else {
      visitor.count += 1;
    }

    await visitor.save();
    res.json({ count: visitor.count });
  } catch (error) {
    console.error('❌ Error updating visitor count:', error);
    res.status(500).json({ message: 'Error updating visitor count' });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
