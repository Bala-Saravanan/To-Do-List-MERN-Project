import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import PostToDo from "./components/PostToDo";
import ToDo from "./components/ToDo";

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
]);

function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
