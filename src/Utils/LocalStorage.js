import { toast } from "react-toastify";

export const addToLocalStorage = (data) => {
    const getItem = JSON.parse(localStorage.getItem('readBook')) || [];
    
    const existData = getItem.find((item)=> item.bookId == data.bookId);
    if(!existData) {
        toast.success("Added Successfully!");
        getItem.push(data)
        localStorage.setItem('readBook', JSON.stringify(getItem))
        
    } else {
        toast.warn("You Have Already Added This Book")
    }
}


export const saveToLocalStorage = (data) => {
    const getItem = JSON.parse(localStorage.getItem('wishList')) || [];
    
    
    const existData = getItem.find((item)=> item.bookId == data.bookId);
    
    const getRead = JSON.parse(localStorage.getItem('readBook')) || [];
     const isExist = getRead.find((item)=> item.bookId == data.bookId);
    if(!isExist && !existData) {
        toast.success("Added Successfully!");
        getItem.push(data)
        localStorage.setItem('wishList', JSON.stringify(getItem))
    } else if(existData) {
        toast.warn('Already Added to Wishlist')
    }
     else {
        toast.error("You Have Already Read this Book")
    }
}



export const getReadBooks = () => {
    const getItem = JSON.parse(localStorage.getItem('readBook'));
    return getItem;
}





export const wishListBooks = () => {
    const getItem = JSON.parse(localStorage.getItem('wishList')) || [];
    return getItem;
}