const express = require("express")
const cors = require("cors");
require("dotenv").config();

const errorHandler = require("./middleware/errorMiddleware");
const connectDB = require("./config/db")

const authRoutes = require("./routes/auth");
const noteRoutes = require("./routes/notes");

const app = express()

app.use(cors())
app.use(express.json())

connectDB();

app.use("/api/auth",authRoutes);
app.use("/api/notes",noteRoutes);

app.get("/health",(req,res)=>{
    res.json({status: "ok"});
})

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})