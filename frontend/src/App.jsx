import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import PostToDo from "./components/PostToDo";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/post/todo",
    element: <PostToDo />,
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
