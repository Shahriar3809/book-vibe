import { useEffect, useState } from "react";
import { getReadBooks } from "../Utils/LocalStorage";
import ReadBook from "./ReadBook";


const ReadBooksItem = () => {

    const [reads, setReads] = useState([])
    useEffect(()=> {
        setReads(getReadBooks())
    }, [])

   
    // console.log(reads)
    return (
      <div className="space-y-8 mt-10 p-5">
        {reads.map((item) => (
          <ReadBook key={item.bookId} item={item}>
            Hello
          </ReadBook>
        ))}
      </div>
    );
};

export default ReadBooksItem;