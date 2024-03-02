const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
//@desc Register a user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req, resp) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    resp.status(400);
    throw new Error("All fields are mandotary !");
  }
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    resp.status(400);
    throw new Error("User already exist !");
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("THE HASHED ", hashedPassword);

  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  console.log(`USER CREATED${user}`);
  if (user) {
    resp.status(201).json({ _id: user.id, email: user.email });
  } else {
    resp.status(400);
    throw new Error("User data is not valid");
  }
  resp.json({ message: "register the user !" });
});

//@desc login a user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async (req, resp) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new Error("All fileds are mandatory !");
  }
  const user = await User.findOne({ email });
  //comparing password with hashpassword
  if (email && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user.id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1m" }
    );
    resp.status(200).json({ accessToken });
  } else {
    resp.status(401);
    throw new Error("Email or Password is not valid");
  }
});

//@desc Current user info
//@route POST /api/users/current
//@access private
const currentUser = asyncHandler(async (req, resp) => {
  resp.json(req.user);
});

module.exports = { registerUser, loginUser, currentUser };
