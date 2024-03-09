const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const bodyparser = require("body-parser");
const path = require("path");
const cookieParser=require('cookie-parser');
const dotenv = require("dotenv").config();

const _dirname = path.resolve();

connectDb();
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.static(path.join(_dirname, "/dist")));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
