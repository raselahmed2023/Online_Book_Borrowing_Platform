"use client"
import featureBook from "../../../public/books.json";
import Image from 'next/image';
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";


const AllBooksContent = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;
    const router = useRouter();
    const [search, setSearch] = useState("");
    const [input, setInput] = useState("");

    const filteredBooks = featureBook.filter(book =>
        book.title.toLowerCase().includes(search.toLowerCase())
    );


    const handleViewDetails = (id) => {
        if (!user) {
            router.push("/Signin");
        } else {
            router.push(`/books/${id}`);
        }
    };

    return (

        <div className="container mx-auto mt-5 px-4">


            <div className="flex justify-center mb-8 gap-2">
                <input
                    type="text"
                    placeholder="Search by title..."
                    className="input input-bordered w-full max-w-md"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && setSearch(input)}
                />
                <button
                    className="btn btn-primary"
                    onClick={() => setSearch(input)}
                >
                    Search
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 container mx-auto mt-5">
                {filteredBooks.map(book => (
                    <div key={book.id} className="card bg-base-100 w-full shadow">
                        <figure className="relative w-96 aspect-square">
                            <Image src={book.image_url} alt={book.title} width={200} height={100} />
                        </figure>
                        <div className="card-body items-center text-center space-y-4">
                            <div className="badge badge-dash badge-primary absolute top-4 right-4">{book.category}</div>
                            <h2 className="card-title m-0 text-2xl">{book.title}</h2>
                            <h2 className="card-title m-0">{book.author}</h2>
                            <button
                                onClick={() => handleViewDetails(book.id)}
                                className="btn btn-primary btn-sm"
                            >
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllBooksContent;