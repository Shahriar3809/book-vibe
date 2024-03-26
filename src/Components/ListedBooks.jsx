
import TabsList from "./TabsList.jsx";
import { IoIosArrowDown } from "react-icons/io";






const ListedBooks = () => {
    

    

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
                <a>Ratings</a>
              </li>
              <li >
                <a>Number Of Pages</a>
              </li>
              <li >
                <a>Publishing Year</a>
              </li>
            </ul>
          </div>
        </div>

        
          <TabsList></TabsList>
        
      </div>
    );
};

export default ListedBooks;