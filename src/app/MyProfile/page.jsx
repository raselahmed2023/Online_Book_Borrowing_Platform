import MyProfileDetails from "@/components/shared/MyProfile";
import { Suspense } from "react";


export default function MyProfilePage() {
  return (
    <Suspense fallback={null}>
      <MyProfileDetails />
    </Suspense>
  );
}