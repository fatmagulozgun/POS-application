const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
const port = 5000;


//routes
const categoryRoute = require("./routes/categories");
const productRoute = require("./routes/products.js");
const billRoute = require("./routes/bills.js");
const authRoute = require("./routes/auth.js");
const userRoute = require("./routes/users.js");

dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/pos-app");
        console.log("Connected to mongoDB");
    } catch (error) {
        throw error;
    }
};

app.use(express.json());
app.use(cors());

app.use("/api/categories", categoryRoute);
app.use("/api/products", productRoute);
app.use("/api/bills", billRoute);
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);


app.listen(port, () => {
    connect();
    console.log(`Example app listening on port ${port}`);
});