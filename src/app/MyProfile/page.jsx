import dynamic from "next/dynamic";

const MyProfile = dynamic(() => import("@/components/shared/MyProfile"), {
  ssr: false,
  loading: () => (
    <div className="flex justify-center items-center min-h-screen">
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  ),
});

export default function MyProfilePage() {
  return <MyProfile />;
}