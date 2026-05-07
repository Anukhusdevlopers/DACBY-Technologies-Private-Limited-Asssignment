const express = require('express');
const router = express.Router();

const scrapeStories = require('../scraper/hackerNewsScraper');

router.post('/', async (req, res) => {
  await scrapeStories();

  res.json({
    message: 'Scraping completed',
  });
});

module.exports = router;