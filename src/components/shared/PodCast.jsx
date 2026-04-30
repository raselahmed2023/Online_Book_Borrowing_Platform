import Image from 'next/image';
import React from 'react';
import podcast from '@/assets/podcast.png';

const events = [
    { day: 'Monday', time: '18:00', title: 'Silent Reading Hour' },
    { day: 'Tuesday', time: '19:00', title: 'Book Club Night' },
    { day: 'Wednesday', time: '18:30', title: 'Creative Writing Circle' },
    { day: 'Thursday', time: '19:00', title: 'Author Talk' },
    { day: 'Friday', time: '17:30', title: 'Poetry & Open Mic' },
];

const PodCast = () => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl container mx-auto mt-10 mb-10 max-w-6xl p-10">
            <figure className="lg:w-1/2">
                <Image
                    src={podcast}
                    alt="Borrowed Podcast Weekly Events"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover rounded-md"
                />
            </figure>
            <div className="card-body lg:w-1/2 flex items-center justify-center p-8">
                <ul className="space-y-6 w-full max-w-md">
                    {events.map((event, index) => (
                        <li
                            key={index}
                            className="flex items-center justify-center gap-3 text-xl md:text-2xl py-4 border-b border-gray-200 hover:bg-gray-50 transition rounded-lg"
                        >
                            <span className="font-bold text-gray-800">{event.day}</span>
                            <span className="text-gray-500">at</span>
                            <span className=" text-gray-700">{event.time}</span>
                            <span className="text-gray-400">—</span>
                            <span className="font-semibold text-gray-900">{event.title}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PodCast;