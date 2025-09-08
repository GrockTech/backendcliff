// import express from "express";
// import cors from "cors";
// import Shipform from "./route/Routes.js";
// import dotenv from 'dotenv';
// import mongoose from "mongoose";




// const app = express();
// app.use(cors());
// app.use(express.json());

// dotenv.config()



// const connect = async () =>{

//     try {
//         await mongoose.connect(process.env.MONGO_URL);
//         console.log("Mongo DB connected")
        
//     } catch (error) {
//         console.log("mongoDB couldnt connect")
//     }
// };

// mongoose.connection.on("disconnected", ()=>{
//     console.log("mongoDB disconnected")
// })
// mongoose.connection.on("connected", ()=>{
//     console.log("mongoDB connected successfuly")
// })

// app.get("/", (req, res)=>{
//     res.send("it working")
// })


// // Test route
// app.get("/", (req, res) => {
//   res.send("Backend is running 🚀");
// });

// //app.use("/api", taskRoutes)

// app.use("/api", Shipform);

// const PORT = 5000;
// app.listen(PORT, () => connect(),
//   console.log(`Server running on port ${PORT}`));

import express from "express";
import cors from "cors";
import Shipform from "./route/Routes.js";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected successfully");
});

// Health check
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// API routes
app.use("/api", Shipform);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  connect();
  console.log(`Server running on port ${PORT}`);
});
