const cors = require("cors");
const express = require("express");
require("dotenv").config();
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//cors
app.use(
  cors({
    origin: "*",
  })
);

// connect mongodb
const MongoDB = require("./config/connectMongdb");
MongoDB();

// Port
PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});

app.get("/", (req, res) => {
  res.status(200).send("News Server Is Running");
});

const User = require("./routes/userRoutes");
const Blog = require("./routes/blogRoutes");
const Query = require("./routes/anyQueryRoutes");

app.use("/user", User);
app.use("/blog", Blog);
app.use("/qu", Query);
