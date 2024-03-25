import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
      <div className="text-center flex flex-col gap-5 items-center justify-center h-screen">
        <h1 className="text-6xl font-bold ">No Page Found...</h1>
        <button className="bg-green-500 p-5 rounded-lg font-bold text-xl text-white mt-5">
          <Link to="/">Go to Home</Link>
        </button>
      </div>
    );
};

export default ErrorPage;