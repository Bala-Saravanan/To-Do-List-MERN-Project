import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const nav_items = [
    { title: "Home", path: "/" },
    { title: "My ToDo's", path: "/my/todos" },
    { title: "New ToDo", path: "/post/todo" },
  ];
  const navigate = useNavigate();
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <div>
        <ul className="flex items-center m-10">
          <li className="mr-auto font-bold text-3xl">
            <span className="text-primary ">To Do</span> App
          </li>
          {nav_items.map(({ title, path }, idx) => (
            <li
              key={idx}
              className="hidden md:block mx-5 text-xl font-light cursor-pointer hover:font-semibold hover:text-hover transition-all duration-500"
              onClick={() => navigate(path)}
            >
              {title}
            </li>
          ))}
          <li
            className="md:hidden cursor-pointer text-3xl"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            {toggleMenu ? <RxCross2 /> : <RxHamburgerMenu />}
          </li>
        </ul>
        <div className="md:hidden">
          {toggleMenu ? (
            <ul className="flex flex-col bg-primary text-white text-xl">
              {nav_items.map(({ title, path }, idx) => (
                <li
                  key={idx}
                  className="px-5 py-4 text-xl font-light cursor-pointer hover:font-semibold hover:bg-hover transition-all duration-500"
                  onClick={() => navigate(path)}
                >
                  {title}
                </li>
              ))}
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};
export default NavBar;
