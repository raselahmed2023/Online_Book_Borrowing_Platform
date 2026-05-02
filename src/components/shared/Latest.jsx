"use client";
import React from 'react';
import Marquee from 'react-fast-marquee';

const books=[
  { "id": 1, "text": "New Arrivals: The Alchemist by Paulo Coelho" },
  { "id": 2, "text": "Special Discount on Memberships — Join Today!" },
  { "id": 3, "text": "New Arrivals: 1984 by George Orwell" },
  { "id": 4, "text": "Free Borrowing for First 30 Days!" },
  { "id": 5, "text": "New Arrivals: Cosmos by Carl Sagan" },
  { "id": 6, "text": "Over 500+ Books Available Online!" },
  { "id": 7, "text": "New Arrivals: Clean Code by Robert C. Martin" },
  { "id": 8, "text": "Borrow Up to 5 Books at a Time!" },
  { "id": 9, "text": "New Arrivals: A Brief History of Time by Stephen Hawking" },
  { "id": 10, "text": "New Members Get 3 Months Free Premium Access!" }
]

const LatestBookUpdate = () => {
    return (
           <div className='rounded flex justify-between gap-4 mt-5 items-center bg-gray-100 container mx-auto py-2 '>

            <Marquee pauseOnHover speed={60} gradient={false}>
                {books.map(book => (
                    <div key={book.id} className="flex items-center">
                      
                        <span className='text-black font-medium mx-10'>
                            {book.text}
                        </span>
                        <span className="text-xl">•</span>
                    </div>
                ))}
            </Marquee>
        </div> )
};

export default LatestBookUpdate;