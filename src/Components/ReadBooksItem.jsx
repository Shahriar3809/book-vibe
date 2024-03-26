import { useEffect, useState } from "react";
import ReadBook from "./ReadBook";

import { getReadBooks } from "../Utils/LocalStorage";


const ReadBooksItem = () => {



    const [data, setData] = useState([])
    useEffect(()=> {
      setData(getReadBooks());
    },[])

   
    return (
      <div className="space-y-8 mt-10 p-5">
        {data.map((item) => (
          <ReadBook key={item.bookId} item={item}>
            Hello
          </ReadBook>
        ))}
      </div>
    );
};

export default ReadBooksItem;