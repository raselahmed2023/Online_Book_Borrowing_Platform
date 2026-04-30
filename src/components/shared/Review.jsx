"use client";
import React from 'react';
import memberReview from "../../../public/review.json";
import Marquee from 'react-fast-marquee';
import { LuStar } from "react-icons/lu";

const Review = () => {
    return (
        <div className="container mx-auto mt-10">
            <Marquee speed={60} gradient={false}>
                {memberReview.map(review => (
                    <div key={review.id} className="card bg-base-100 shadow w-72 mx-4">
                        <div className="card-body space-y-2">
                            <h2 className="font-bold text-sm">{review.user_name}</h2>
                            <p className="text-xs text-gray-500">{review.location}</p>
                            <p className="text-sm line-clamp-3">{review.comment}</p>
                            <p className=" flex gap-3 items-center text-sm"><LuStar /> {review.rating}/5</p>
                        </div>
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default Review;