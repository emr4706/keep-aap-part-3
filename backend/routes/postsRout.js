const router = require('express').Router();
let Post = require('../models/postsModel');

router.route('/').get((req, res) => {
  Post.find()
    .then(post => res.json(post))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  
    /// save exercise ///
  const newPost = new Post({
    title,
    content,
  });

  newPost.save()
  .then(() => res.json('Post added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

    /// get exercises ///
router.route('/:id').get((req, res) => {
  Post.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err => res.status(400).json('Error: ' + err));
});
  /// delete exercise ///
router.route('/:id').delete((req, res) => {
  Post.findByIdAndDelete(req.params.id)
    .then(() => res.json('Post deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

  /// update exercise ///
router.route('/update/:id').post((req, res) => {
  Post.findById(req.params.id)
    .then(post => {
      post.title = req.body.title;
      post.content = req.body.content;

      post.save()
        .then(() => res.json('Post updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;