import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import PostToDo from "./components/PostToDo";
import ToDo from "./components/ToDo";
import Login from "./components/auth/Login";
import RegisterUser from "./components/auth/RegisterUser";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/post/todo",
    element: <PostToDo />,
  },
  {
    path: "/my/todos",
    element: <ToDo />,
  },
  {
    path: "/user/login",
    element: <Login />,
  },
  {
    path: "/user/register",
    element: <RegisterUser />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
