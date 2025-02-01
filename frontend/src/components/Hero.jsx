import { useNavigate } from "react-router-dom";
import todo from "./../assets/todo.jpg";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row justify-center items-center md:space-x-10 bg-gradient-to-r from-hover to-primary m-3 md:m-10 p-2 md:p-10 rounded-2xl shadow-2xl">
        <div>
          <h1 className="text-center md:text-left text-3xl md:text-6xl font-bold text-white md:leading-17">
            Create your personalized Notes and Track your Routines
          </h1>
          <p className="text-xl text-white my-4 leading-7 text-justify md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            dolorum, alias excepturi voluptas nulla suscipit quis voluptates
            debitis iste? Modi.
          </p>
          <button
            onClick={() => navigate(`/post/todo`)}
            className="w-full md:w-max mb-5 border-none cursor-pointer ring-black px-10 py-5 text-xl font-bold text-white bg-[#AD48F8] hover:bg-[#982EE3] rounded-2xl shadow-2xl transition-all duration-500"
          >
            Create To Do
          </button>
        </div>
        <div className="m-2 md:m-10">
          <img src={todo} alt="" />
        </div>
      </div>
    </>
  );
};
export default Hero;
