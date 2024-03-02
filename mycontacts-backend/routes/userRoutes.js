const express = require("express");
const User = require('../models/userModel')
const asyncHandler = require("express-async-handler");
const {
  registerUser,
  loginUser,
  currentUser,
} = require("../controllers/userController");

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/current", currentUser);



router.get("/allUsers",asyncHandler(async (req, resp) =>{
  const users = await User.find();
  resp.status(200).json(users);
}) );

module.exports = router;
