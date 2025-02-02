import axios from "axios";
import GetAllToDo from "../hooks/GetAllToDo";
import { useState } from "react";

const ToDoList = () => {
  const { data: todos, refetch } = GetAllToDo(
    "http://localhost:4000/get/todos"
  );
  // console.log(todos);

  const deleteHandler = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/delete/todo/${id}`);
      alert("Task deleted successfully!");
      refetch();
      // console.log(res.data);
    } catch (error) {
      console.error(error.message);
      alert("Error deleting task!");
    }
  };

  const editHandler = async (id, complete) => {
    try {
      await axios.patch(`http://localhost:4000/update/status/${id}`, {
        status: !complete,
      });
      alert("Status updated!");
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <h1 className="font-bold text-5xl my-5 ml-10">
          <span className="text-primary">To Do</span> List
        </h1>
        {todos && todos.length > 0 ? (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 mb-5 md:m-10">
            {todos.map(({ _id, title, description, status, updatedAt }) => (
              <li key={_id}>
                <div className="h-[295.98px] border-none ring ring-gray-200 shadow-xl rounded-2xl p-5 mx-5">
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-2xl my-2">{title}</h3>
                    <p className="font-light text-gray-500">
                      {updatedAt.split("T")[0]}
                    </p>
                  </div>
                  <p className="line-clamp-4 my-2">{description}</p>
                  <strong>Status:</strong>{" "}
                  {status ? "✅ Completed" : "⏳ Pending"}
                  <div className="flex space-x-5">
                    <button
                      onClick={() => editHandler(_id, status)}
                      className="px-7 py-2 rounded-lg bg-primary hover:bg-hover text-white font-bold my-4 transition-all duration-500 cursor-pointer"
                    >
                      {status ? "Incomplete" : "Complete"}
                    </button>
                    <button
                      onClick={() => deleteHandler(_id)}
                      className="px-7 py-2 rounded-lg bg-primary hover:bg-hover text-white font-bold my-4 transition-all duration-500 cursor-pointer"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No todos found. Add some tasks! 🚀</p>
        )}
      </div>
    </>
  );
};
export default ToDoList;
