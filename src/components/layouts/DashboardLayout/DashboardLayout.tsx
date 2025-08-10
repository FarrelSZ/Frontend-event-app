import PageHead from "@/components/commons/PageHead";
import { SIDEBAR_ADMIN, SIDEBAR_MEMBER } from "./DashboardLayout.constans";
import { useState } from "react";
import DashboardLayoutSidebar from "./DashboardLayoutSidebar";
import { Navbar, NavbarMenuToggle } from "@heroui/react";

interface PropType {
  children: React.ReactNode;
  description?: string;
  title?: string;
  type?: string;
}

const DashboardLayout = ({ children, title, type = "admin", description }: PropType) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <PageHead title={title} />
      <div className="max-w-screen-3xl 3xl:container flex">
        <DashboardLayoutSidebar sidebarItem={type === "admin" ? SIDEBAR_ADMIN : SIDEBAR_MEMBER} isOpen={open} />
        <div className="h-screen w-full overflow-y-auto p-8">
          <Navbar
            className="flex justify-between bg-transparent px-0 "
            isBlurred={false}
            classNames={{ wrapper: "p-0" }}
            position="static"
          >
            <h1 className="text-3xl font-bold "> {title}</h1>
            <NavbarMenuToggle
              aria-label={open ? "Close Menu" : "Open Menu"}
              onClick={() => setOpen(!open)}
              className="lg:hidden"
            />
          </Navbar>
          <p className="mb-4 text-small">{description}</p>
          {children}
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
