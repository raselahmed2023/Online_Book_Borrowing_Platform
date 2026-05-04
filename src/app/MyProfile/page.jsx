import dynamic from "next/dynamic";

const MyProfile = dynamic(() => import("@/components/shared/MyProfile"), {
  ssr: false,
  loading: () => {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  },
});

export default function MyProfilePage() {
  return <MyProfile />;
}