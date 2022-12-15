const { connection } = require(".//Config/db");
const express = require("express");
const { productController } = require("./Routes/product.route");
require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("welcome to the shoping app");
});

app.use("/", productController);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Database connected");
    console.log("Listening on PORT : " + process.env.PORT);
  } catch (err) {
    console.log("Database connection failed");
    console.log(err);
  }
});
