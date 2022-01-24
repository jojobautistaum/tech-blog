const { Comment } = require('../models');

// Adding row for comment table
const commentdata = [
  {
    comment_text: 'This is great! Thanks for the post.',
    user_id: 4,
    post_id: 1
  }
  
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
