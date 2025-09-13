import { Skeleton } from "@heroui/react";
import HomeEventList from "./HomeEventList";
import HomeSlider from "./HomeSlider";
import useHome from "./useHome";
import Image from "next/image";
import HomeCategoryList from "./HomeCategorylist";

const Home = () => {
  const {
    dataBanners,
    isLoadingBanners,
    dataCategories,
    isLoadingCategories,
    dataFeaturedEvents,
    isLoadingFeaturedEvents,
    dataLatestEvents,
    isLoadingLatestEvents,
  } = useHome();
  return (
    <div>
      <HomeSlider banners={dataBanners?.data} isLoadingBanners={isLoadingBanners} />
      <HomeEventList title="Featured Events" events={dataFeaturedEvents?.data} isLoading={isLoadingFeaturedEvents} />
      <Skeleton isLoaded={!isLoadingBanners} className="mb-16 h-[20vw] w-full rounded-2xl">
        <Image
          src={dataBanners && dataBanners?.data[1]?.image}
          width={1920}
          height={800}
          alt="banner"
          className="h-[20vw] w-full rounded-2xl object-cover object-center"
        />
      </Skeleton>
      <HomeEventList title="Latest Events" events={dataLatestEvents?.data} isLoading={isLoadingLatestEvents} />
      <HomeCategoryList categories={dataCategories?.data} isLoading={isLoadingCategories} />
    </div>
  );
};

export default Home;
