/* eslint-disable react/prop-types */


const UpcomingBook = ({item}) => {
    const { bookName ,  image, publisher, author} = item;
    return (
      <div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src={image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold">
              {bookName}
              <div className="badge badge-secondary">Upcoming</div>
            </h2>
            <p>By: {author}</p>
            <hr />
            <div className="card-actions justify-end">
              <p className="text-xl font-semibold">Publisher: {publisher}</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default UpcomingBook;