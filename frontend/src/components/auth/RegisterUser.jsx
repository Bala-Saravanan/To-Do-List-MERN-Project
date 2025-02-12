import { useNavigate } from "react-router-dom";

const RegisterUser = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container h-[100vh] flex justify-center items-center">
        <div className="border rounded-xl shadow-2xl">
          <form className="h-[600px] w-[500px] flex flex-col items-center ">
            <h1 className="font-bold text-3xl my-7">
              Sign <span className="text-primary">In</span>
            </h1>
            <div className="my-3 flex flex-col">
              <label className="text-lg text-left" htmlFor="password">
                User Name:
              </label>
              <input
                className="w-[400px] h-[35px] px-2 border rounded focus:outline-primary"
                type="text"
                name="username"
                id="username"
              />
            </div>
            <div className=" flex flex-col">
              <label className="text-lg text-left" htmlFor="email">
                Email:{" "}
              </label>
              <input
                className="w-[400px] h-[35px] px-2 border rounded focus:outline-primary"
                type="email"
                name="email"
                id="email"
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
              />
            </div>
            <div className="my-3 flex flex-col">
              <label className="text-lg text-left" htmlFor="password">
                ConfirmPassword
              </label>
              <input
                className="w-[400px] h-[35px] px-2 border rounded focus:outline-primary"
                type="password"
                name="password"
                id="password"
              />
            </div>

            <button
              className="my-3 border rounded-lg text-white font-semibold px-5 py-3 bg-primary hover:bg-hover transition-all duration-500 cursor-pointer"
              type="submit"
            >
              Sign In
            </button>
            <div>
              <p className="text-lg mt-7 ">
                Already have an account?{" "}
                <a
                  className="text-primary cursor-pointer"
                  onClick={() => navigate("../../user/login")}
                >
                  Log in
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default RegisterUser;
