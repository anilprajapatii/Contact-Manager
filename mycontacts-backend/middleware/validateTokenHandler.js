const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async (req, resp, next) => {
  console.log(req.cookies);
  const token=req.cookies('token');
  if(token){
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        resp.status(401);
        throw new Error("User is not Authorized");
      }
      req.user = decoded.user;
      next();
    });
  }
   resp.status(401);
   throw new Error("User is not authorized or token is missing");
});

module.exports = validateToken;

