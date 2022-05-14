import { useState } from "react";

import "./sidebar.module.scss";
import { getNavMenuList } from "./sidebarContainer";

const SideBar: React.FC = () => {
  const [isShow, _] = useState<boolean>(true);

  const sideBarItemList = getNavMenuList();
  return <nav>{isShow && <ul>{sideBarItemList}</ul>}</nav>;
};

export default SideBar;
