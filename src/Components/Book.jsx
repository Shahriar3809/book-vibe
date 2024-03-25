import PropTypes from 'prop-types'

const Book = ({book}) => {
    const {
      bookId,
      bookName,
      author,
      image,
      review,
      totalPages,
      rating,
      category,
      tags,
      publisher,
      yearOfPublishing
    } = book;

    
    return (
        <div>
            Book
        </div>
    );
};


Book.propTypes = {
    book: PropTypes.object
}


export default Book;