import GetAllToDo from "../hooks/GetAllToDo";
import { Link } from "react-router-dom";

const ToDoList = () => {
  const { data } = GetAllToDo("http://localhost:4000/get/todos");
  // console.log(data);
  const todos = data.length > 9 ? data.slice(0, 6) : data;
  return (
    <div className="pt-16">
      <h1 className="font-bold text-5xl my-5 ml-10">
        <span className="text-primary">Your Latest </span> To Do's
      </h1>
      {todos && todos.length > 0 ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 mb-5 md:m-10">
          {todos.map(({ _id, title, description, status, createdAt }) => (
            <li key={_id}>
              <div
                className={`h-[295.98px] border-none ring ring-gray-200 shadow-xl rounded-2xl p-5 mx-5 ${
                  status ? "bg-green-200" : "bg-red-200"
                }`}
              >
                <div className="flex flex-col ">
                  <h3 className="font-bold text-2xl my-2">{title}</h3>
                  <p className="font-light text-gray-500">
                    {createdAt.split("T")[0]}
                  </p>
                </div>
                <p className="line-clamp-4 my-2">{description}</p>
                <strong>Status:</strong>{" "}
                {status ? "✅ Completed" : "⏳ Pending"}
              </div>
            </li>
          ))}
          {data.length > 9 ? (
            <p className="w-[90vw] text-blue-500 underline text-center">
              <Link to={"/my/todos"}>View More...</Link>
            </p>
          ) : (
            <></>
          )}
        </ul>
      ) : (
        <p>No todos found. Add some tasks! 🚀</p>
      )}
    </div>
  );
};

export default ToDoList;
