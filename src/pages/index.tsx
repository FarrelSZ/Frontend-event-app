import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { Button } from "@heroui/button";
import PageHead from "@/components/commons/PageHead";
import { useRouter } from "next/router";
import LandingPageLayout from "@/components/layouts/LandingPageLayout";
import Home from "@/components/views/Home";

function HomePage() {
  const router = useRouter();
  return (
    <LandingPageLayout title="Home">
      <Home />
    </LandingPageLayout>
  );
}

export default HomePage;
