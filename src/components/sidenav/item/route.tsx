import { Dashboard, Inventory, SvgIconComponent } from "@mui/icons-material";
import { IoAlbums, IoHome } from "react-icons/io5";

export type RoutingColumn = {
  type: string;
  name: string;
  key: string;
  route: string;
  icon: JSX.Element;
  component: SvgIconComponent;
  noCollapse: boolean;
};
const routes: RoutingColumn[] = [
  // It is route table data, but current example value
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "#dashboard",
    icon: <IoHome size="15px" color="inherit" />,
    component: Dashboard,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Inventory",
    key: "inventory",
    route: "#inventory",
    icon: <IoAlbums size="15px" color="inherit" />,
    component: Inventory,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Inventory",
    key: "inventory",
    route: "#inventory",
    icon: <IoAlbums size="15px" color="inherit" />,
    component: Inventory,
    noCollapse: true,
  },
];

export default routes;
