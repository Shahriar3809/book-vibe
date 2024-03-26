import { useEffect, useState } from "react";
import { wishListBooks } from "../Utils/LocalStorage";
import WishItem from "./WishItem";


const WishlistItem = () => {
  
  // wishListBooks;
     const [wishList, setWishList] = useState([]);
     useEffect(() => {
       setWishList(wishListBooks());
     }, []);
console.log(wishList)
   
    return (
      <div className="space-y-8 mt-10 p-5">
        {wishList.map((item) => (
          <WishItem key={item.bookId} item={item}>
            Hello
          </WishItem>
        ))}
      </div>
    );
};

export default WishlistItem;