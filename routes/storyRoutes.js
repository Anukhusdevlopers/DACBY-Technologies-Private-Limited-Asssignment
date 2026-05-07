const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

const {
  getStories,
  getStory,
  toggleBookmark,
  getBookmarks
} = require('../controllers/storyController');


router.get('/', getStories);
router.get('/bookmarks', authMiddleware, getBookmarks);
router.get('/:id', getStory);
router.post('/:id/bookmark', authMiddleware, toggleBookmark);

module.exports = router;