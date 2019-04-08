const express = require("express");
const router = express.Router();
const keys = require("../../config/keys");
const passport = require("passport");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// Load User model
const User = require("../../models/User");

router.get("/test", (req, res) =>
  res.json({
    msg: "User Test Paths Work"
  })
);

router.get("/all", (req, res) => {
  User.find()
    .select("-password")
    .then(users => {
      return res.json(users);
    })
    .catch(err => {
      console.log(error);
    });
});
router.post("/register", (req, res) => {
  console.log(req.body);
  const errors = {};

  User.findOne({
    email: req.body.email
  }).then(user => {
    if (user) {
      errors.email = "Email already exists";
      return res.status(400).json({ errors: errors, user: user });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        profile_pic:
          "https://ctvalleybrewing.com/wp-content/uploads/2017/04/avatar-placeholder.png",
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
//api login route
router.post("/login", (req, res) => {
  const errors = {};
  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email }).then(user => {
    // Check for user
    if (!user) {
      errors.email = "User account not found please try again";
      return res.status(404).json(errors);
    }

    // using bcrypt check the hased passowd against the input password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User Matched
        const payload = {
          id: user.id,
          name: user.name,
          profile_pic: user.profile_pic
        }; // Create JWT Payload

        // create and siegn the token witht he secret key
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 * 60 * 60 * 60 },
          (err, token) => {
            res.json({
              success: true,
              token: `Bearer ${token}`
            });
          }
        );
      } else {
        errors.password = "Password incorrect";
        return res.status(400).json(errors);
      }
    });
  });
});

module.exports = router;
