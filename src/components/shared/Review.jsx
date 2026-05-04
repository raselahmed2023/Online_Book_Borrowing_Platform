"use client";
import React from 'react';
import memberReview from "../../../public/review.json";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { LuStar } from "react-icons/lu";

const Review = () => {
    return (
        <div className="container mx-auto mt-10 px-4">
            <h2 className='text-center text-5xl text-gray-600 mb-10'>Review From Our Valuable Member</h2>
            <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 2500 }}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="pb-10"
            >
                {memberReview.map(review => (
                    <SwiperSlide key={review.id}>
                        <div className="card bg-base-100 shadow">
                            <div className="card-body space-y-2">
                                <h2 className="font-bold text-sm">{review.user_name}</h2>
                                <p className="text-xs text-gray-500">{review.location}</p>
                                <p className="text-sm line-clamp-3">{review.comment}</p>
                                <p className="flex gap-2 items-center text-sm">
                                    <LuStar /> {review.rating}/5
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Review;