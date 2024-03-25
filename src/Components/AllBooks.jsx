import { useEffect, useState } from "react";
import Book from "./Book";


const AllBooks = () => {

    const [allBooks, setAllBooks] = useState([])

    useEffect(()=> {
        fetch('BooksData.json')
        .then(response => response.json())
        .then(data => setAllBooks(data))
    }, [])

    // console.log(allBooks)

    return (
      <div>
        <h1 className="text-4xl text-center font-bold my-10">Books</h1>
        <div className="grid grid-cols-3 gap-5">
          {allBooks.map((book) => (
            <Book book={book} key={book.bookId}></Book>
          ))}
        </div>
      </div>
    );
};

export default AllBooks;