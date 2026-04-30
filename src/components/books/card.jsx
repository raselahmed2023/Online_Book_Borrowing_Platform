import React from 'react';
import books from "../../../public/books.json";

const Card = () => {
  const featureBook = books.slice(0, 4);
  return (
    <div className="grid grid-cols-4 gap-4 p-10">
      {featureBook.map(book => (
        <div key={book.id}>
          <div className="card bg-base-100 w-96 shadow-sm">
            <div className="card-body items-center text-center">
              <h2 className="card-title">{book.title}</h2>
              <div className="card-actions">
                <button className="btn btn-primary">More Details</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;