// import { useEffect, useState } from "react";
// import { wishListBooks } from "../Utils/LocalStorage";
import { useContext } from "react";
import WishItem from "./WishItem";
import { WishListContext } from "./ListedBooks";


const WishlistItem = () => {
  
 const wishData = useContext(WishListContext)
     

   
    return (
      <div className="space-y-8 mt-10 p-5">
        {wishData && wishData.map((item) => (
          <WishItem key={item.bookId} item={item}>
            
          </WishItem>
        ))}
      </div>
    );
};

export default WishlistItem;