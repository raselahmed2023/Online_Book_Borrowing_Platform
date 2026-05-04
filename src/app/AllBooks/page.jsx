"use client"
import dynamic from "next/dynamic";

const AllBooks = dynamic(() => import("./AllBooksContent"), {
  ssr: false,
});

export default function AllBooksPage() {
  return <AllBooks />;
}