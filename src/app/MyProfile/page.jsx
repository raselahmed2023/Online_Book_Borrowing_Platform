"use client"
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const MyProfileDetails = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;
    const router = useRouter();

    if (isPending) return (
        <div className="flex justify-center items-center min-h-screen">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    );

    if (!user) {
        router.push("/Signin");
        return null;
    }

    return (
        <div className="min-h-screen bg-base-200 py-12 px-4">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-3xl font-semibold mb-8">My Profile</h1>

                <div className="card bg-base-100 border border-base-200 shadow-sm">
                    <div className="card-body gap-0 p-0">

                       
                        <div className="h-24 bg-ghost rounded-t-2xl" />

                       
                        <div className="px-8 pb-6">
                            <div className="flex items-end justify-between -mt-12 mb-6">
                                <div className="w-24 h-24 rounded-full border-4 border-base-100 overflow-hidden bg-primary text-primary-content flex items-center justify-center text-3xl font-bold shadow">
                                    {user.image?.startsWith("http") ? (
                                        <Image
                                            src={user.image}
                                            alt={user.name}
                                            width={96}
                                            height={96}
                                            referrerPolicy="no-referrer"
                                            className="object-cover w-full h-full"
                                        />
                                    ) : (
                                        user.name?.charAt(0) || "U"
                                    )}
                                </div>
                                <Link href="/MyProfile/update">
                                    <button className="btn btn-primary btn-sm">
                                        Update Information
                                    </button>
                                </Link>
                            </div>

                          
                            <h2 className="text-2xl font-semibold">{user.name}</h2>
                            <p className="text-base-content/50 text-sm mb-6">Member</p>

                            <div className="divider my-0" />


                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                                <div className="flex flex-col gap-1">
                                    <span className="text-xs uppercase tracking-widest text-base-content/40">Full Name</span>
                                    <span className="font-medium text-lg">{user.name}</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-xs uppercase tracking-widest text-base-content/40">Email</span>
                                    <span className="font-medium text-lg">{user.email}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfileDetails;