// import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
// import { toast } from "react-toastify";
import { addToLocalStorage, saveToLocalStorage } from "../Utils/LocalStorage";
// import { useParams } from "react-router-dom";


const Details = () => {
    const {bookId} = useParams();
  

    const [single, setSingle] = useState({})
    const allData = useLoaderData()
  // console.log(allData)
    useEffect(()=> {
        const singleData = allData.find((item)=> item.bookId == bookId)
        setSingle(singleData)
    },[bookId, allData])

    
    const {
      image,
      bookName,
      category,
      author,
      review,
    
      totalPages,
      yearOfPublishing,
      rating,
      publisher,
    } = single;


const handleRead = (singleItem) => {
  addToLocalStorage(singleItem);
}
const handleWishlist = (singleItem) => {
  saveToLocalStorage(singleItem);
}

    return (
      <div className="grid md:grid-cols-2 card-side bg-base-100 md:max-h-[650px] shadow-xl">
        <figure className=" md:h-[650px]">
          <img className="p-5 h-full w-11/12" src={image} alt="Movie" />
        </figure>
        <div className="  space-y-2 p-4">
          <h2 className="card-title text-3xl font-bold">{bookName}</h2>
          <p className="font-bold text-xl">By: {author}</p>
          <hr />
          <p className="font-bold text-xl">{category}</p>
          <hr />
          <div>
            <p>
              <span className="text-xl font-bold">Review:</span> {review}
            </p>
          </div>
          <div className="flex gap-5 text-xl">
            <p className="font-bold">Tag: </p>
            <p className="bg-green-100 text-green-700 font-semibold  text-center rounded-full px-5"
            >#Classics</p>
            <p className="bg-green-100 text-green-700 font-semibold  text-center rounded-full px-5"
            >#Adventure</p>
          </div>
          <hr />
          <div className="text-xl font-semibold space-y-1">
            <p>
              Number of Pages: <span className="ml-1">{totalPages}</span>
            </p>
            <p>
              Publisher: <span className="ml-1">{publisher}</span>
            </p>
            <p>
              Year of Publishing:{" "}
              <span className="ml-1">{yearOfPublishing}</span>
            </p>
            <p>
              Ratings: <span className="ml-1">{rating}</span>
            </p>
          </div>

          <div className="flex gap-5">
            <button
              onClick={() => handleRead(single)}
              className="btn bg-green-500 text-white font-bold"
            >
              Read
            </button>
            <button
              onClick={() => handleWishlist(single)}
              className="btn bg-green-500 text-white font-bold"
            >
              WishList
            </button>
          </div>
        </div>
      </div>
    );
};

export default Details;