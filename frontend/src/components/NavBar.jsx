import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { RiUserLine } from "react-icons/ri";
import UserInfo from "./UserInfo";
import axios from "axios";

const NavBar = () => {
  const nav_items = [
    { title: "Home", path: "/" },
    { title: "My ToDo's", path: "/my/todos" },
    { title: "New ToDo", path: "/post/todo" },
  ];

  const navigate = useNavigate();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isUserPanelOpen, setUserPanelOpen] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // Check if the user is logged in (this is just a placeholder, replace with your actual logic)
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      getUserInfo(token);
    }
  }, []);

  const getUserInfo = async (token) => {
    try {
      const response = await axios.get("http://localhost:4000/user/info", {
        headers: {
          Authorization: token,
        },
      });
      setUserName(response.data.user.userName);
      // console.log(response);
    } catch (error) {
      console.log("Error Fetching Data!");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/user/login");
  };
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
          <li>
            {isLoggedIn ? (
              <div className="flex items-center">
                <RiUserLine
                  className="text-3xl cursor-pointer"
                  onClick={() => setUserPanelOpen(!isUserPanelOpen)}
                />
              </div>
            ) : (
              <button
                onClick={() => navigate("user/login")}
                className="px-5 py-3 cursor-pointer border rounded-lg bg-primary text-white font-semibold hover:bg-hover transition-all duration-500"
              >
                Log In
              </button>
            )}
          </li>
          <li
            className="md:hidden cursor-pointer text-3xl mx-3"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            {toggleMenu ? <RxCross2 /> : <RxHamburgerMenu />}
          </li>
        </ul>
        <div className="md:hidden">
          {toggleMenu ? (
            <ul className="flex flex-col bg-primary text-white text-xl font-semibold">
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
        <UserInfo isOpen={isUserPanelOpen}>
          <div className="absolute top-10 right-5 text-center border-none ring-1 ring-gray-400 rounded-lg m-5 w-fit bg-gray-200">
            <h1 className="my-2 mx-7">{userName}</h1>
            <div className=" hover:bg-gray-300 rounded-b-lg">
              <button
                className="my-2 mx-7 cursor-pointer"
                onClick={handleLogout}
              >
                Log out
              </button>
            </div>
          </div>
        </UserInfo>
      </div>
    </>
  );
};
export default NavBar;
