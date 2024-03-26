import { Link } from "react-router-dom";

const Banner = () => {
    return (
      <div className="md:h-[550px] bg-base-300 rounded-lg flex gap-5 flex-col md:flex-row">
        <div className="w-3/5 p-5 md:p-16 md:space-y-8 flex flex-col justify-center md:gap-10 ml-5">
          <h1 className="md:text-6xl text-3xl font-bold">
            Books to freshen up your bookshelf
          </h1>
          <Link to="/listedBooks">
            <button className="btn w-32 bg-green-500 border-none text-white">
              View The List
            </button>
          </Link>
        </div>
        <div className="flex items-center justify-center">
          
          <img src="https://i.ibb.co/R0jt2Zm/pngwing-1.png" alt="" />
        </div>
      </div>
    );
};

export default Banner;