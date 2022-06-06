import { Box, List, SxProps, Theme } from "@mui/material";
import { useState } from "react";

import "./sidebar.module.scss";
import { getNavMenuList } from "./sidebarContainer";
import Logo from "./svg/logo";

const boxSx: SxProps<Theme> = {
  width: "auto",
  background: "#222222",
  minHeight: "100%",
};

const listSx: SxProps<Theme> = {
  marginLeft: "3vh",
  marginTop: "-6vh",
};
const SideBar: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isShow, _] = useState<boolean>(true);
  const sideBarItemList = getNavMenuList();
  return (
    <Box sx={boxSx} component="nav">
      <Logo />
      {isShow && <List sx={listSx}>{sideBarItemList}</List>}
    </Box>
  );
};

export default SideBar;
