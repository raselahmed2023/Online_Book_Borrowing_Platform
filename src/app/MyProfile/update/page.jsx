"use client"
import dynamic from "next/dynamic";

const UpdateProfile = dynamic(() => import("@/components/shared/UpdateProfile"), {
  ssr: false,
});

export default function UpdateProfilePage() {
  return <UpdateProfile />;
}