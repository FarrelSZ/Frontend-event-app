import { useRouter } from "next/router";
import LandingPageLayout from "@/components/layouts/LandingPageLayout";
import DetailEvent from "@/components/views/DetailEvent";

function HomePage() {
  return (
    <LandingPageLayout title="Detail Event">
      <DetailEvent />
    </LandingPageLayout>
  );
}

export default HomePage;
