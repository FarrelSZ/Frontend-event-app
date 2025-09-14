import { useRouter } from "next/router";
import LandingPageLayout from "@/components/layouts/LandingPageLayout";
import Event from "@/components/views/Event";

function HomePage() {
  const router = useRouter();
  return (
    <LandingPageLayout title="Home">
      <Event />
    </LandingPageLayout>
  );
}

export default HomePage;
