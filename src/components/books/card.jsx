import React from 'react';


// "title": "Cosmos",
// "author": "Carl Sagan",
// "category": "Science",
// "available_quantity": 5,
// "image_url": "https://ibb.co.com/XZShqxMr"

const Card = async () => {
    const res = await fetch('/api/books')
    const books = await res.json();
    const featureBook = books.slice(0, 4);
    return (
        <div>

            {
                featureBook.map(book => (
                    <div key={book.id}>
                        <div className="card bg-base-100 w-96 shadow-sm">
                            <figure className="px-10 pt-10">
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{book.title}</h2>
                                <div className="card-actions">
                                    <button className="btn btn-primary">More Details</button>
                                </div>
                            </div>
                        </div>

                    </div>
                ))
            }



        </div>
    );
};

export default Card;