import GetAllToDo from "../hooks/GetAllToDo";
import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";
import axios from "axios";
import { FaRegEdit } from "react-icons/fa";
import { useState } from "react";
import Edit from "./Edit";

const ToDo = () => {
  const [editPannelOpen, setEditPannelOpen] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);

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
    <>
      <NavBar />
      <div>
        {todos && todos.length > 0 ? (
          <ul>
            {todos.map(({ _id, title, description, status, createdAt }) => (
              <li
                key={_id}
                className="m-5 border-none ring ring-gray-200 rounded-2xl shadow-xl p-5"
              >
                <div className="flex justify-between items-center">
                  <div className="flex flex-col md:flex-row space-x-5 md:items-center">
                    <h1 className="font-bold my-3 text-2xl">{title}</h1>
                    <p className="font-light text-gray-500">
                      {createdAt.split("T")[0]}
                    </p>
                  </div>
                  <button
                    onClick={() => openEditPanel({ _id, title, description })}
                    className="text-gray-500 text-2xl hover:text-black cursor-pointer transition-all duration-500"
                  >
                    <FaRegEdit />
                  </button>
                </div>
                <p className="md:w-200 my-2 text-wrap">{description}</p>
                <div className="flex flex-col justify-center md:flex-row md:justify-between md:items-center">
                  <div className="flex space-x-2 items-center">
                    <h3 className="text-xl font-semibold">Status:</h3>
                    <p>{status ? "Completed" : "Pending"}</p>
                  </div>
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
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <></>
        )}
        <Edit isOpen={editPannelOpen} onClose={() => setEditPannelOpen(false)}>
          {selectedTodo && (
            <div className="bg-white rounded-2xl shadow-2xl p-10 flex flex-col justify-center items-center m-3">
              <h1 className="font-bold text-4xl text-center my-4">
                Update <span className="text-primary">To Do</span>
              </h1>
              <div>
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
                  <label
                    className="font-semibold text-xl"
                    htmlFor="description"
                  >
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
      <Footer />
    </>
  );
};
export default ToDo;
