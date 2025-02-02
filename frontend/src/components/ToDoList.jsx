import axios from "axios";
import GetAllToDo from "../hooks/GetAllToDo";
import { FaRegEdit } from "react-icons/fa";
import { useState } from "react";
import Edit from "./Edit";

const ToDoList = () => {
  const [editPannelOpen, setEditPannelOpen] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null); // Track the selected todo for editing

  const { data: todos, refetch } = GetAllToDo(
    "http://localhost:4000/get/todos"
  );

  const deleteHandler = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/delete/todo/${id}`);
      alert("Task deleted successfully!");
      refetch();
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

  const openEditPanel = (todo) => {
    setSelectedTodo(todo); // Set the selected to-do for editing
    setEditPannelOpen(true); // Open the edit panel
  };

  const updateTodoHandler = async (updatedData) => {
    try {
      await axios.patch(
        `http://localhost:4000/update/todo/${selectedTodo._id}`,
        updatedData
      );
      alert("To-Do updated!");
      refetch();
      setEditPannelOpen(false); // Close edit panel after update
    } catch (error) {
      console.error(error);
      alert("Error updating To-Do!");
    }
  };

  return (
    <div>
      <h1 className="font-bold text-5xl my-5 ml-10">
        <span className="text-primary">To Do</span> List
      </h1>
      {todos && todos.length > 0 ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 mb-5 md:m-10">
          {todos.map(({ _id, title, description, status, createdAt }) => (
            <li key={_id}>
              <div className="h-[295.98px] border-none ring ring-gray-200 shadow-xl rounded-2xl p-5 mx-5">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-2xl my-2">{title}</h3>
                  <p className="font-light text-gray-500">
                    {createdAt.split("T")[0]}
                  </p>
                </div>
                <p className="line-clamp-4 my-2">{description}</p>
                <strong>Status:</strong>{" "}
                {status ? "✅ Completed" : "⏳ Pending"}
                <div className="flex justify-between items-center">
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
                  <button
                    onClick={() => openEditPanel({ _id, title, description })}
                    className="text-gray-500 text-2xl hover:text-black cursor-pointer transition-all duration-500"
                  >
                    <FaRegEdit />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No todos found. Add some tasks! 🚀</p>
      )}

      <Edit isOpen={editPannelOpen} onClose={() => setEditPannelOpen(false)}>
        {selectedTodo && (
          <div className="bg-white rounded-2xl shadow-2xl p-10 flex flex-col justify-center items-center">
            <h1 className="font-bold text-4xl text-center my-4">
              Update <span className="text-primary">To Do</span>
            </h1>
            <div className="">
              <form>
                <label className="font-semibold text-xl" htmlFor="title">
                  Title
                </label>
                <input
                  className="w-full h-10 border rounded-md px-3"
                  type="text"
                  name="title"
                  id="title"
                  value={selectedTodo.title}
                  onChange={(e) =>
                    setSelectedTodo((prev) => ({
                      ...prev,
                      title: e.target.value,
                    }))
                  }
                />
                <label className="font-semibold text-xl" htmlFor="description">
                  Description
                </label>
                <textarea
                  className="w-full h-30 rounded-md border px-3 py-2"
                  name="description"
                  id="description"
                  value={selectedTodo.description}
                  onChange={(e) =>
                    setSelectedTodo((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }))
                  }
                ></textarea>
              </form>
            </div>
            <div className="flex space-x-10">
              <button
                onClick={() => setEditPannelOpen(false)}
                className="my-2 px-7 py-2 border-2 bg-primary rounded-xl text-white font-bold hover:bg-hover transition-all duration-500 cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={() => updateTodoHandler(selectedTodo)}
                className="my-2 px-7 py-2 border-2 bg-primary rounded-xl text-white font-bold hover:bg-hover transition-all duration-500 cursor-pointer"
              >
                Update
              </button>
            </div>
          </div>
        )}
      </Edit>
    </div>
  );
};

export default ToDoList;
