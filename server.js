require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const db = require("./db");

const MONGO_URI = process.env.MONGO_URI;

//Server settings
app.set("port", process.env.PORT || 3000);
const router = require("./network/routes");
db(MONGO_URI);

//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

//Routes
router(app);

// Static files
app.use("/app", express.static("public"));

// Server Initialization
app.listen(app.get("port"), () => {
  console.log(`server on port ${app.get("port")}`);
});
