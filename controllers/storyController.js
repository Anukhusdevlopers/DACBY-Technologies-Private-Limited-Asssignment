const Story = require('../models/Story');
const User = require('../models/User');

exports.getStories = async (req, res) => {

  try {

    
    const page = parseInt(req.query.page) || 1;

    const limit = parseInt(req.query.limit) || 5;

    
    const skip = (page - 1) * limit;

    
    const totalStories = await Story.countDocuments();

    
    const stories = await Story.find()
      .sort({ points: -1 })
      .skip(skip)
      .limit(limit);

    res.json({
      currentPage: page,
      totalPages: Math.ceil(totalStories / limit),
      totalStories,
      stories,
    });

  } catch (error) {

    res.status(500).json(error);
  }
};

exports.getStory = async (req, res) => {
  try {
    const story = await Story.findById(req.params.id);
    res.json(story);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.toggleBookmark = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    const index = user.bookmarks.findIndex(
      (bookmark) => bookmark.toString() === req.params.id
    );

    if (index > -1) {
      user.bookmarks.splice(index, 1);
    } else {
      user.bookmarks.push(req.params.id);
    }

    await user.save();

    const updatedUser = await User.findById(req.user.id).populate('bookmarks');

    res.json({
      message: "Bookmark updated",
      bookmarks: updatedUser.bookmarks,
    });

  } catch (error) {
    res.status(500).json(error);
  }
};


exports.getBookmarks = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate('bookmarks');
    res.json(user.bookmarks);
  } catch (error) {
    res.status(500).json(error);
  }
};