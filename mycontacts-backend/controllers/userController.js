const asyncHandler = require("express-async-handler");
//@desc Register a user
//@route POST /api/users/register
//@access public
const registerUser= asyncHandler(async (req,resp)=>{
    resp.json({message:"register the user !"})
});

//@desc login a user
//@route POST /api/users/login
//@access public
const loginUser= asyncHandler(async (req,resp)=>{
    resp.json({message:"login user !"})
});

//@desc Current user info
//@route POST /api/users/current
//@access private
const currentUser= asyncHandler(async (req,resp)=>{
    resp.json({message:"Current user information"})
});

module.exports = {registerUser,loginUser,currentUser}