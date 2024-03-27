
import { createContext, useEffect, useState } from "react";
import TabsList from "./TabsList.jsx";
import { IoIosArrowDown } from "react-icons/io";
import { getReadBooks, wishListBooks } from "../Utils/LocalStorage.js";


export const DataContext = createContext();

export const WishListContext = createContext();


const ListedBooks = () => {
    

    const [data, setData] = useState([])
    useEffect(()=> {
      setData(getReadBooks());
    },[])
    
    

    const [wishList, setWishList] = useState([]);
    useEffect(() => {
      setWishList(wishListBooks());
    }, []);

    const handleRating = () => {
      const sortedData = [...data].sort((a, b) => b.rating - a.rating);
      setData(sortedData);
      const sortedWishListData = [...wishList].sort((a, b) => b.rating - a.rating);
      setWishList(sortedWishListData)
    };



    const handlePages = () => {
      const sortedData = [...data].sort((a, b) => b.totalPages - a.totalPages);
      setData(sortedData);
      const sortedWishListData = [...wishList].sort(
        (a, b) => b.totalPages - a.totalPages
      );
      setWishList(sortedWishListData)
    };

    const handleYear = () => {
      const sortedData = [...data].sort(
        (a, b) => b.yearOfPublishing - a.yearOfPublishing
      );
      setData(sortedData);
      const sortedWishListData = [...wishList].sort(
        (a, b) => b.yearOfPublishing - a.yearOfPublishing
      );
      setWishList(sortedWishListData)
    };

    return (
      <div>
        <h1 className="text-5xl font-bold text-center py-5 bg-base-200 rounded-xl my-5">
          Books
        </h1>

        <div className="flex justify-center items-center">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1">
              Sort By <IoIosArrowDown />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a onClick={handleRating}>Ratings</a>
              </li>
              <li>
                <a onClick={handlePages}>Number Of Pages</a>
              </li>
              <li>
                <a onClick={handleYear}>Publishing Year</a>
              </li>
            </ul>
          </div>
        </div>
        <WishListContext.Provider value={wishList}>
          <DataContext.Provider value={data}>
            <TabsList></TabsList>
          </DataContext.Provider>
        </WishListContext.Provider>
      </div>
    );
};

export default ListedBooks;