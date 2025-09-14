import { FaFacebook, FaInstagram, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa6";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Explore", href: "/event" },
];

const BUTTON_ITEMS = [
  {
    label: "Register",
    href: "/auth/register",
    variant: "bordered",
  },
  {
    label: "Login",
    href: "/auth/login",
    variant: "solid",
  },
];

const SOCIAL_ITEMS = [
  {
    label: "Twitter",
    href: "https://twitter.com/farel_it12",
    icon: <FaTwitter />,
  },
  {
    label: "Facebook",
    href: "https://twitter.com/farel_it12",
    icon: <FaFacebook />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/farrel.sz/",
    icon: <FaInstagram />,
  },
  {
    label: "Tiktok",
    href: "https://instagram.com/farel_it12",
    icon: <FaTiktok />,
  },
  {
    label: "Youtube",
    href: "/",
    icon: <FaYoutube />,
  },
];

export { NAV_ITEMS, BUTTON_ITEMS, SOCIAL_ITEMS };
