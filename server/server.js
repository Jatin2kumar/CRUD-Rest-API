import express from "express";

//starting express
const app = express();

//import dependencies
import connectDB from "./config/connectDB.js";
import addRoute from "./routes/addRoute.js";
import root from "./routes/root.js";
import updateRoute from "./routes/updateRoute.js";
import deleteRoute from "./routes/deleteRoute.js";
// connect to DB
connectDB();

//built-in middleware for json
app.use(express.json());
//handle form data
app.use(express.urlencoded({ extended: false }));

// handle routes
app.use("/", addRoute);
app.use("/", root);
app.use("/", updateRoute);
app.use("/", deleteRoute);
// app.use("/");

app.listen(process.env.PORT || 5000, (req, res) => {
  console.log(`server is running at ${process.env.PORT}`);
});
