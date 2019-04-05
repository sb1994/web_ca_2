const express = require('express');
const router = express.Router();
const keys = require('../../config/keys');

const bcrypt = require('bcryptjs');

// Load User model
const User = require('../../models/User');

router.get('/test', (req, res) => res.json({
  msg: 'User Test Paths Work'
}));

router.get('/all',(req,res)=>{
  User
    .find()
    .select("-password")
    .then(users=>{
      return res.json(users)

    })
    .catch(err=>{
      console.log(error);
    })
})
router.post('/register', (req, res) => {
  console.log(req.body);
  const errors = {}

  User.findOne({
    email: req.body.email
  })
  .then(user => {
    if (user) {
      errors.email = 'Email already exists';
      return res.status(400).json({errors:errors, user:user});
    } else {

      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        profile_pic:"https://ctvalleybrewing.com/wp-content/uploads/2017/04/avatar-placeholder.png",
        password: req.body.password
      });
  
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});
module.exports = router;