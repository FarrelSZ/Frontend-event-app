import LandingPageLayout from "@/components/layouts/LandingPageLayout";
import Event from "@/components/views/Event";

function HomePage() {
  return (
    <LandingPageLayout title="Event">
      <Event />
    </LandingPageLayout>
  );
}

export default HomePage;
