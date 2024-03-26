/* eslint-disable react/prop-types */
import { FaLocationDot } from "react-icons/fa6";
import { IoPeople } from "react-icons/io5";
import { TbPageBreak } from "react-icons/tb";
import { Link } from "react-router-dom";



const ReadBook = ({item}) => {
  const {
    bookId,
    image,
    bookName,
    category,
    author,
    tags,
    totalPages,
    yearOfPublishing,
    rating,
    publisher,
  } = item;
//   console.log(item);
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl border-2">
      <figure className="w-1/3 bg-base-200 m-5 rounded-lg">
        <img className="p-5 md:w-72" src={image} alt="Album" />
      </figure>
      <div className="card-body md:space-y-8">
        <h1 className="text-6xl font-bold">{bookName}</h1>
        <h6 className="text-xl font-bold">By: {author}</h6>
        <div className="flex flex-col md:flex-row gap-5">
          <h2 className="md:mr-3 font-semibold text-xl">Tags:</h2>
          <div className="flex gap-3 ">
            {tags.map((item, idx) => (
              <p
                className="bg-green-200 md:px-5 text-center rounded-full text-green-600 "
                key={idx}
              >
                #{item}
              </p>
            ))}
          </div>
          <div>
            <h5 className="flex items-center font-semibold gap-3">
              {" "}
              <FaLocationDot className="text-xl" />
              Year Of Publishing: {yearOfPublishing}
            </h5>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div>
            <h6 className="flex items-center gap-3 text-xl">
              {" "}
              <IoPeople />
              Publisher: {publisher}
            </h6>
          </div>
          <div>
            <h6 className="flex items-center text-xl gap-3">
              {" "}
              <TbPageBreak />
              Page {totalPages}
            </h6>
          </div>
        </div>
        <hr />
        <div className="flex flex-col md:flex-row gap-3 font-bold">
          <h2 className="bg-blue-200 p-4 rounded-full px-6">
            Category: {category}
          </h2>
          <h2 className="bg-red-200 p-4 rounded-full px-6">
            Ratings: {rating}
          </h2>
          <Link to={`/bookDetails/${bookId}`}>
            <button className="px-6 py-4 bg-green-600 text-white rounded-full">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};



export default ReadBook;