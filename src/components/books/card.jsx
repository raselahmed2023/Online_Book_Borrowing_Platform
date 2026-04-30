import React from 'react';
import books from "../../../public/books.json";

const Card = () => {
  const featureBook = books.slice(0, 4);
  
  return (
    <div>
      {featureBook.map(book => (
        <div key={book.id}>
          <h1>{book.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default Card;