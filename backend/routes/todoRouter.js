import express from "express";
import postToDo from "../controllers/postToDo.js";
import getAllToDo from "../controllers/getAllToDo.js";
import updateToDo from "../controllers/updateToDo.js";
import updateStatus from "../controllers/updateStatus.js";
import deleteToDo from "../controllers/deleteToDo.js";
import auth from "../middleware/authentication.js";

const todoRoute = express.Router();

todoRoute.post("/post/todo", auth, postToDo);
todoRoute.get("/get/todos", auth, getAllToDo);
todoRoute.patch("/update/todo/:id", updateToDo);
todoRoute.patch("/update/status/:id", updateStatus);
todoRoute.delete("/delete/todo/:id", deleteToDo);

export default todoRoute;
