import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/connectDB.js";
import todoRoute from "./routes/todoRouter.js";

const app = express();
dotenv.config();
const port = process.env.PORT;

// DB connectivity
connectDB();

// middlewares
app.use(express.json());
// const allowedOrigins = [
//   "http://localhost:5173",
//   "https://To-Do-App.com",
//   "http://localhost:4000",
// ];

// const corsOptions = {
//   origin: (origin, callback) => {
//     if (process.env.NODE_ENV === "development") {
//       callback(null, true); // Allow all origins in development
//     } else if (allowedOrigins.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
//   credentials: true,
// };

app.use(cors());

app.use("/", todoRoute);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
