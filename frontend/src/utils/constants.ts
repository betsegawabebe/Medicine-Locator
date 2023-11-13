import { ISideBarMenu } from "./types";
import { RxDashboard } from "react-icons/rx";
import { FaUserSecret } from "react-icons/fa";
import { AiOutlineBank } from "react-icons/ai";
import { BiHeadphone } from "react-icons/bi";

import { MdOutlineLocalOffer } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { VscRequestChanges } from "react-icons/vsc";

export const API_ROUTE = import.meta.env.VITE_API_ROUTE;

export const routeConstants = {
  home: "/",
  login: "/login",
  signup: "/sign-up",
};
export const adminMenu: ISideBarMenu[] = [
  {
    label: "Dashboard",
    to: "/dashboard",
    icon: RxDashboard,
  },
  {
    label: "Manege Pharmacies",
    to: "/diasporas",
    icon: FaUserSecret,
  },
  {
    label: "Manege users",
    to: "/banks",
    icon: AiOutlineBank,
  },
  {
    label: "users",
    to: "/phoneOperators",
    icon: BiHeadphone,
  },

  {
    label: "Orders",
    to: "/scheduled",
    icon: SlCalender,
  },
  {
    label: "Offers",
    to: "/offers",
    icon: MdOutlineLocalOffer,
  },
  {
    label: "user",
    to: "/user",
    icon: MdOutlineLocalOffer,
  },
];
export const PharmaciesMenu = [
  {
    label: "Dashboard",
    to: "/dashboard",
    icon: RxDashboard,
  },

  {
    label: "order",
    to: "/requests",
    icon: VscRequestChanges,
  },
];
