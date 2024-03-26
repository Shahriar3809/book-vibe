import { useEffect, useState } from "react";
import UpcomingBook from "../Components/UpcomingBook";



const Upcoming = () => {

    const [allBooks, setAllBooks] = useState([]);

    useEffect(() => {
      fetch("Upcoming.json")
        .then((response) => response.json())
        .then((data) => setAllBooks(data));
    }, []);

    console.log(allBooks)
    return (
      <div>
        <div className="grid grid-cols-1 p-3 md:grid-cols-3 gap-8">
          {allBooks.map((item) => (
            <UpcomingBook key={item.id} item={item}>
              Hello
            </UpcomingBook>
          ))}
        </div>
      </div>
    );
};

export default Upcoming;