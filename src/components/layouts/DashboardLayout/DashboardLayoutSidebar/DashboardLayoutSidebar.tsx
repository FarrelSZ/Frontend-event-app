import { cn } from "@/utils/cn";
import { Button, Listbox, ListboxItem } from "@heroui/react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { JSX, useState } from "react";
import { CiLogout } from "react-icons/ci";

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
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const handleSignOut = async () => {
    try {
      setIsLoggingOut(true);

      await signOut();
    } catch (error) {
      console.error("Error during sign out:", error);
      setIsLoggingOut(false);
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
          size="lg"
          onPress={handleSignOut}
          isLoading={isLoggingOut}
          disabled={isLoggingOut}
        >
          {!isLoggingOut && <CiLogout />}
          {isLoggingOut ? "Logging out..." : "Logout"}
        </Button>
      </div>
    </div>
  );
};

export default DashboardLayoutSidebar;
