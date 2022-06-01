import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SxProps,
  Theme,
} from "@mui/material";
import routes, { RoutingColumn } from "./item/route";

const listItemButtonSx: SxProps<Theme> = {
  color: "white",
};
const iconSx: SxProps<Theme> = {
  color: "aquamarine",
};
function getNavMenuList() {
  return routes.map((item: RoutingColumn) => {
    const openIcon =
      item.open !== undefined ? (
        item.open ? (
          <ExpandLess />
        ) : (
          <ExpandMore />
        )
      ) : (
        <></>
      );
    return (
      <li>
        <ListItemButton component="a" href={item.route} sx={listItemButtonSx}>
          <ListItemIcon sx={iconSx}>{item.icon}</ListItemIcon>
          <ListItemText primary={item.name} />
          {openIcon}
        </ListItemButton>
      </li>
    );
  }); // map sideBar Item becaouse pre calculate
}
export { getNavMenuList };
