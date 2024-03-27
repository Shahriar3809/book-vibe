// import { useEffect, useState } from "react";
import ReadBook from "./ReadBook";

// import { getReadBooks } from "../Utils/LocalStorage";
import { useContext } from "react";
import { DataContext } from "./ListedBooks";


const ReadBooksItem = () => {

  const data = useContext(DataContext)


   
    return (
      <div className="space-y-8 mt-10 p-5">
        {data && data.map((item) => (
          <ReadBook key={item.bookId} item={item}>
            
          </ReadBook>
        ))}
      </div>
    );
};

export default ReadBooksItem;