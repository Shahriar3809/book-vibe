import PropTypes from 'prop-types'
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Book = ({book}) => {
    const {
        bookId,
      bookName,
      author,
      image,
      rating,
      category,
      tags,
    } = book;

   




    return (
      <Link to={`/bookDetails/${bookId}`}>
        <div className="card bg-base-100 shadow-xl cursor-pointer">
          <figure className="px-10 pt-10 bg-base-200 rounded-2xl m-4">
            <img src={image} alt="Shoes" className="rounded-xl h-52" />
          </figure>
          <div className="card-body space-y-2">
            <div className="flex gap-3 items-start text-center">
              {tags.map((item, index) => (
                <p
                  className="bg-green-200 text-green-800 font-semibold rounded-full p-1 cursor-pointer"
                  key={index}
                >
                  {item}
                </p>
              ))}
            </div>
            <h2 className="card-title text-2xl font-bold">{bookName}</h2>
            <p className="text-xl font-semibold">By: {author}</p>
            <hr />
            <div className="card-actions flex justify-between">
              <div>
                <p className="text-xl font-bold">{category}</p>
              </div>
              <div>
                <p className="flex items-center gap-2 text-xl">
                  {rating}{" "}
                  <span>
                    <FaRegStar className="" />
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
};


Book.propTypes = {
    book: PropTypes.object
}


export default Book;