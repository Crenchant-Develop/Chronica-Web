import { Divider } from "@mui/material";
import routes, { RoutingColumn } from "./item/route";

const style = {
  color : `white`
}

function getNavMenuList() {
  return routes.map((item: RoutingColumn) => {
    return (
      <li>
        <a href={item.route} key={item.key}>
          {item.icon}
          {item.name}
        </a>
        <Divider sx={style}/>
      </li>
    );
  }); // map sideBar Item becaouse pre calculate
}
export { getNavMenuList };
