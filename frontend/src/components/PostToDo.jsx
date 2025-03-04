import Footer from "./Footer";
import NavBar from "./NavBar";
import postImg from "./../assets/postTodo.webp";
import axios from "axios";
import { useState } from "react";

const PostToDo = () => {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    status: false,
  });

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setTodo((prevTodo) => ({
      ...prevTodo,
      [name]: name === "status" ? value === "true" : value,
    }));
  };

  const submitHandler = async (event) => {
    try {
      const token = localStorage.getItem("token");

      event.preventDefault();
      const response = await axios.post(
        "http://localhost:4000/post/todo",
        todo,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      // console.log(response);
      alert("To Do created successfully!");
      setTodo({ title: "", description: "", status: false });
    } catch (error) {
      console.log(error);
      alert("Error creating To Do!");
    }
  };

  return (
    <>
      <NavBar />
      <div className="flex flex-col-reverse lg:flex-row lg:justify-around items-center m-3 md:m-10 p-5 border rounded-2xl shadow-2xl">
        <form onSubmit={submitHandler}>
          <h1 className="font-bold text-4xl mb-4">
            Create a New <span className="text-primary">To Do Task</span>
          </h1>
          <label htmlFor="task" className="font-semibold text-xl">
            Title:
          </label>
          <input
            type="text"
            name="title"
            id="task"
            value={todo.title}
            className="w-full h-10 border rounded-md px-3"
            onChange={changeHandler}
          />
          <label htmlFor="description" className="font-semibold text-xl">
            Description:
          </label>
          <textarea
            name="description"
            id="description"
            value={todo.description}
            className="w-full h-30 rounded-md border px-3 py-2"
            onChange={changeHandler}
          ></textarea>
          <label htmlFor="status" className="font-semibold text-xl">
            Status:
          </label>
          <div className="flex space-x-5">
            <div>
              <input
                type="radio"
                name="status"
                id="status"
                value="true"
                className="mr-2"
                onChange={changeHandler}
              />
              Completed
            </div>
            <div>
              <input
                type="radio"
                name="status"
                id="status"
                className="mr-2"
                value="false"
                onChange={changeHandler}
              />
              Pending
            </div>
          </div>
          <button
            type="submit"
            className="my-2 px-7 py-2 border-2 bg-primary rounded-xl text-white font-bold hover:bg-hover transition-all duration-500 cursor-pointer"
          >
            Create
          </button>
        </form>
        <div>
          <img src={postImg} alt="Post Img" />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default PostToDo;
