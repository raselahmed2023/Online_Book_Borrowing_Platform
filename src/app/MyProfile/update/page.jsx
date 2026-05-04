import dynamic from "next/dynamic";

const UpdateProfile = dynamic(() => import("@/components/shared/UpdateProfile"), {
  ssr: false,
  loading: () => {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  },
});

export default function UpdateProfilePage() {
  return <UpdateProfile />;
}