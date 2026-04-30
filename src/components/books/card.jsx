import React from 'react';
import books from "../../../public/books.json";
import Image from 'next/image';
import Link from 'next/link';


const Card = () => {
    const featureBook = books.slice(0, 4);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 container mx-auto mt-10">
            {featureBook.map(book => (
                <div key={book.id} className="card bg-base-100 w-full shadow">
                    <figure className=" relative w-96 aspect-square">
                        <Image src={book.image_url} alt='{book.title}' width={200} height={100}></Image>

                    </figure>
                    <div className="card-body items-center text-center space-y-4">
                        <div className="badge badge-dash badge-primary absolute top-4 right-4">{book.category}</div>
                        <h2 className="card-title m-0 text-2xl">{book.title}</h2>
                        <h2 className="card-title m-0">{book.author}</h2>
                        <div className="card-actions">
                            <button className="btn btn-primary">More Details</button>
                        </div>
                    </div>
                </div>
            ))}

            <div className='text-center justify-items-center'>
                <Link href={'/AllBooks'}> <button className='btn btn-dash'>More Books</button></Link>
            </div>

        </div>
    );
};

export default Card;