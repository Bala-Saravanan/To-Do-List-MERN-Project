import GetAllToDo from "../hooks/GetAllToDo";

const ToDoList = () => {
  const { data: todos } = GetAllToDo("http://localhost:4000/get/todos");
  console.log(todos);
  return (
    <>
      <div>
        <h1 className="font-bold text-5xl my-5 ml-10">
          <span className="text-primary">To Do</span> List
        </h1>
        {todos && todos.length > 0 ? (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-0 mb-5 md:m-10">
            {todos.map(({ _id, title, description, status }) => (
              <li key={_id}>
                <div className="h-[295.98px] border-none ring ring-gray-200 shadow-xl rounded-2xl p-5 mx-5">
                  <h3 className="font-bold text-2xl my-2">{title}</h3>
                  <p className="line-clamp-3 my-2">{description}</p>
                  <strong>Status:</strong>{" "}
                  {status ? "✅ Completed" : "⏳ Pending"}
                  <div className="flex space-x-5">
                    <button className="px-7 py-2 rounded-lg bg-primary hover:bg-hover text-white font-bold my-4 transition-all duration-500 cursor-pointer">
                      Edit
                    </button>
                    <button className="px-7 py-2 rounded-lg bg-primary hover:bg-hover text-white font-bold my-4 transition-all duration-500 cursor-pointer">
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
