const Router = require("express").Router();
const User = require("./user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
Router.post("/post", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ Username: username });
    console.log(user);
    if (user) {
      res.status(500).send("User already exists");
    } else {
      bcrypt.hash(password, 10, async (err, hash) => {
        if (err) {
          res.status(500).send("Error hashing password");
        }
        const user = new User({ Username: username, Password: hash });
        const result = await user.save();
        if (result.error) {
          res.status(500).json("Error saving credentials");
        } else {
          res.status(201).json(result);
        }
      });
    }
  } catch (err) {
    console.error("Error creating user:", err);
    res.status(500).json({ error: "Failed to create user" });
  }
});

Router.get("/get", async (req, res) => {
  try {
    const { username, password } = req.query;

    const user = await User.findOne({ Username: username });

    if (!user) {
      return res
        .status(404)
        .json({ error: "No user found with that username" });
    }
    bcrypt.compare(password, user.Password, (err, valid) => {
      if (err) {
        return res.status(500).json({ error: "Error comparing passwords" });
      }
      if (valid) {
        // const expiresIn = '8h';
        const token = jwt.sign({ username }, process.env.SECRET);
        res.status(200).json({ Username: user.Username, token: token , id:user._id });
      } else {
        res.status(401).json({ error: "Passwords do not match" });
      }
    });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = Router;
