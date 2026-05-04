
"use client"
import dynamic from "next/dynamic";

const MyProfile = dynamic(() => import("@/components/shared/MyProfile"), {
  ssr: false,
});

export default function MyProfilePage() {
  return <MyProfile />;
}