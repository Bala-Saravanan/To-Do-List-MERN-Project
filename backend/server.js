import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/connectDB.js";
import todoRoute from "./routes/todoRouter.js";
import userRoute from "./routes/userRouter.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
dotenv.config();
const port = process.env.PORT;

// DB connectivity
connectDB();
app.use(express.static(path.join(__dirname, "../frontend/dist")));

// middlewares
app.use(express.json());
const allowedOrigins = [
  "http://localhost:5173",
  "https://to-do-list-mern-project.onrender.com/",
  "http://localhost:4000",
];

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));

app.use("/", todoRoute);
app.use("/user", userRoute);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
