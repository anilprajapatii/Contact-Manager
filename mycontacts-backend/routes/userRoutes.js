const express = require("express");
const User = require('../models/userModel')
const asyncHandler = require("express-async-handler");
const {
  registerUser,
  loginUser,
  currentUser,
} = require("../controllers/userController");
const validateToken = require("../middleware/validateTokenHandler");

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/current", validateToken, currentUser);



router.get("/allUsers",asyncHandler(async (req, resp) =>{
  const users = await User.find();
  resp.status(200).json(users);
}) );

module.exports = router;
