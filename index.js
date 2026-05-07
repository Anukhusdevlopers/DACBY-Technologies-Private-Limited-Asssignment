require('dotenv').config();

const express = require('express');
const cors = require('cors');

const connectDB = require('./config/db');
const scrapeStories = require('./scraper/hackerNewsScraper');

const authRoutes = require('./routes/authRoutes');
const storyRoutes = require('./routes/storyRoutes');
const scrapeRoutes = require('./routes/scrapeRoutes');

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/stories', storyRoutes);
app.use('/api/scrape', scrapeRoutes);

// Health check route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Run scraper automatically on server start
(async () => {
  await scrapeStories();
})();

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});