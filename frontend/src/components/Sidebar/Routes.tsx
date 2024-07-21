import { MdDashboard } from "react-icons/md";
import { FaUsersLine } from "react-icons/fa6";
import { FaArtstation } from "react-icons/fa";
import { MdCollections } from "react-icons/md";
import { FaSellsy } from "react-icons/fa";

const routes = [
  {
    path: "/dashboard",
    icon: <MdDashboard />,
    name: "Dashboard",
  },
  {
    path: "/dashboard/all-users",
    icon: <FaUsersLine />,
    name: "All Users",
  },
  {
    path: "/dashboard/my-nfts",
    icon: <FaArtstation />,
    name: "My NFTs",
  },
  {
    path: "/dashboard/all-nfts",
    icon: <MdCollections />,
    name: "All NFTs",
  },
  {
    path: "/dashboard/nfts-sold",
    icon: <FaSellsy />,
    name: "Sold NFT",
  },
];

export default routes;
