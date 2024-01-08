const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const connectMongoDb = require("./config/db");
//dot config
dotenv.config();

//mongodb connection
connectMongoDb('mongodb://127.0.0.1:27017/BloodBank', { useNewUrlParser: true, UseUnifiedTopology: true }).then(() => {
  console.log("Successfull Connected with mongoDb");
});

//rest object (Store thev Express features)
const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//routes
/* 1 test route http://localhost:8080
app.get('/',(req,res)=>{
  res.status(200).json({
    message:"welcome to blood bank "
  })
}) */

app.use("/api/v1/test", require("./routes/testRoutes"));//http://localhost:8080/api/v1/test/test1
app.use("/api/v1/auth", require("./routes/authRoutes"));//http://localhost:8080/api/v1/auth/
app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));//http://localhost:8080/api/v1/inventory/
app.use("/api/v1/analytics", require("./routes/analyticsRoutes"));//http://localhost:8080/api/v1/analytic/
app.use("/api/v1/admin", require("./routes/adminRoutes"));//http://localhost:8080/api/v1/admin/

//port
const PORT = process.env.PORT || 8080;
//const PORT =  8080;

//listen
app.listen(PORT, () => {
  console.log(
    // `Node Server Running In ${process.env.DEV_MODE} ModeOn Port ${process.env.PORT}`
    `Node Server Running In ${process.env.DEV_MODE} ModeOn Port ${process.env.PORT}`
      .bgBlue.white
  );
});
