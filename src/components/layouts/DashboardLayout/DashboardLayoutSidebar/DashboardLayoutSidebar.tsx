import { cn } from "@/utils/cn";
import { Button, Listbox, ListboxItem } from "@heroui/react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { JSX, useState } from "react";
import { CiLogout } from "react-icons/ci";
import { TbLoader2 } from "react-icons/tb";

interface SidebarItem {
  key: string;
  label: string;
  href: string;
  icon: JSX.Element;
}
interface PropTypes {
  sidebarItem: SidebarItem[];
  isOpen: boolean;
}

const DashboardLayoutSidebar = ({ sidebarItem, isOpen }: PropTypes) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await Promise.all([signOut({ callbackUrl: "/auth/login" }), new Promise((resolve) => setTimeout(resolve, 2000))]);
    } catch (error) {
      console.error("Logout failed:", error);
      setIsLoading(false);
    }
  };

  return (
    <div
      className={cn(
        "fixed z-50 flex h-screen w-full max-w-[300px] -translate-x-full flex-col justify-between border-r-1 border-default-200 bg-white px-4 py-6 transition-all lg:relative lg:translate-x-0",
        {
          "translate-x-0": isOpen,
        }
      )}
    >
      <div>
        <div className="flex justify-center w-full">
          <Image
            src="/images/general/logo.svg"
            className="mb-6 w-32"
            alt="logo"
            width={180}
            height={60}
            onClick={() => router.push("/")}
          />
        </div>
        <Listbox items={sidebarItem} variant="solid" aria-label="Dashboard Menu">
          {(item) => (
            <ListboxItem
              key={item.key}
              href={item.href}
              className={cn("my-1 h-12 text-2xl", {
                "bg-danger-500 text-white": router.pathname.startsWith(item.href),
              })}
              startContent={item.icon}
              textValue={item.label}
              aria-labelledby={item.label}
              aria-describedby={item.label}
              as={Link}
            >
              <p className="text-small">{item.label}</p>
            </ListboxItem>
          )}
        </Listbox>
      </div>
      <div className="flex items-center p-1">
        <Button
          color="danger"
          fullWidth
          variant="light"
          className="flex justify-start rounded-lg px-2 py-1.5"
          disabled={isLoading}
          size="lg"
          onPress={handleLogout}
        >
          {isLoading ? (
            <div className="relative">
              <TbLoader2 className="w-5 h-5 animate-spin text-red-500" />
              <div className="absolute inset-0 w-5 h-5 border border-red-300 border-t-red-500 rounded-full animate-pulse"></div>
            </div>
          ) : (
            <CiLogout className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
          )}
          <span className={`transition-transform duration-300 ${isLoading ? "" : "group-hover:translate-x-1"}`}>
            {isLoading ? "Please wait..." : "Logout"}
          </span>
        </Button>
      </div>
    </div>
  );
};

export default DashboardLayoutSidebar;
