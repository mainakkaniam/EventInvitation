const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const userRouter = require("./routes/userRoutes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: process.env.ORIGIN,
}));
app.use("/api", userRouter);

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("Database connected") 
}).catch((e) => {
    console.log("Some problem with database getting connected");
});

app.listen(3001, () => {
    console.log("Server listening on 3001");
})