"use client"
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";

const UpdateProfile = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;
    const router = useRouter();

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (user) {
            setName(user.name || "");
            setImage(user.image || "");
        }
    }, [user]);

    const handleUpdate = async () => {
        if (!name.trim()) return setError("Name cannot be empty");
        setError("");
        setLoading(true);
        await authClient.updateUser({ name, image });
        setLoading(false);
        router.push("/MyProfile");
        router.refresh();
    };

    if (isPending) return (
        <div className="flex justify-center items-center min-h-screen">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    );

    if (!user) { router.push("/Signin"); return null; }

    return (
        <div className="min-h-screen bg-base-200 py-12 px-4">
            <div className="max-w-xl mx-auto">

                <button onClick={() => router.back()} className="btn btn-ghost btn-sm mb-6">
                    ← Back
                </button>

                <div className="card bg-base-100 border border-base-200 shadow-sm">
                    <div className="card-body gap-0 p-0">

                        
                        <div className="h-24 bg-ghost rounded-t-2xl" />

                        <div className="px-8 pb-8">
                            
                            <div className="flex justify-between items-end -mt-12 mb-8">
                                <div className="w-24 h-24 rounded-full border-4 border-base-100 overflow-hidden bg-primary text-primary-content flex items-center justify-center text-3xl font-bold shadow">
                                    {image?.startsWith("http") ? (
                                        <Image
                                            src={image}
                                            alt="preview"
                                            width={96}
                                            height={96}
                                            referrerPolicy="no-referrer"
                                            className="object-cover w-full h-full"
                                            onError={() => setImage("")}
                                        />
                                    ) : (
                                        name?.charAt(0)?.toUpperCase() || "U"
                                    )}
                                </div>
                            </div>

                            <h2 className="text-2xl font-semibold mb-1">Update Information</h2>

                            <div className="flex flex-col gap-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs uppercase tracking-widest text-base-content/40">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Your full name"
                                        className="input input-bordered w-full"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-xs uppercase tracking-widest text-base-content/40">
                                        Profile Image URL
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="https://example.com/photo.jpg"
                                        className="input input-bordered w-full"
                                        value={image}
                                        onChange={(e) => setImage(e.target.value)}
                                    />
                                   
                                </div>

                                {error && <p className="text-error text-sm">{error}</p>}

                                <button
                                    className="btn btn-primary w-full mt-2"
                                    onClick={handleUpdate}
                                    disabled={loading}
                                >
                                    {loading
                                        ? <span className="loading loading-spinner loading-sm"></span>
                                        : "Save Changes"
                                    }
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;