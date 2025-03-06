import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [loggedInUser, setLoggedInUser] = useState({
    email: "",
    password: "",
  });

  const submitHandler = async (event) => {
    event.preventDefault();
    if (!loggedInUser.email || !loggedInUser.password) {
      alert("All fields are required!");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:4000/user/login",
        loggedInUser
      );
      // console.log(response);
      const { token } = response.data;
      localStorage.setItem("token", token);
      axios.defaults.headers.common["Authorization"] = token; // Set the token in the Axios default headers

      navigate("/");
      alert(`Welcome Back!`);
      setLoggedInUser({
        email: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setLoggedInUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="container h-[100vh] flex justify-center items-center">
        <div className="border rounded-xl shadow-2xl">
          <form
            onSubmit={submitHandler}
            className="h-[400px] w-[500px] flex flex-col items-center "
          >
            <h1 className="font-bold text-3xl my-7">
              Log <span className="text-primary">In</span>
            </h1>
            <div className=" flex flex-col">
              <label className="text-lg text-left" htmlFor="email">
                Email:{" "}
              </label>
              <input
                className="w-[400px] h-[35px] px-2 border rounded focus:outline-primary"
                type="email"
                name="email"
                id="email"
                value={loggedInUser.email}
                onChange={changeHandler}
              />
            </div>
            <div className="my-3 flex flex-col">
              <label className="text-lg text-left" htmlFor="password">
                Password
              </label>
              <input
                className="w-[400px] h-[35px] px-2 border rounded focus:outline-primary"
                type="password"
                name="password"
                id="password"
                value={loggedInUser.password}
                onChange={changeHandler}
              />
            </div>

            <button
              className="my-3 border rounded-lg text-white font-semibold px-5 py-3 bg-primary hover:bg-hover transition-all duration-500 cursor-pointer"
              type="submit"
            >
              Log In
            </button>
            <div>
              <p className="text-lg mt-7 ">
                don't have an account?{" "}
                <a
                  className="text-primary cursor-pointer"
                  onClick={() => navigate("../../user/register")}
                >
                  Sign in
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
