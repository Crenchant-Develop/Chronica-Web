import { Box, List, SxProps, Theme } from "@mui/material";
import { useState } from "react";

import "./sidebar.module.scss";
import { getNavMenuList } from "./sidebarContainer";

const boxSx: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  width: "auto",
  background: "#222222",
  minHeight: "100%",
};

const listSx: SxProps<Theme> = {};
const SideBar: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isShow, _] = useState<boolean>(true);
  const sideBarItemList = getNavMenuList();
  return (
    <Box sx={boxSx} component="nav">
      {isShow && <List sx={listSx}>{sideBarItemList}</List>}
    </Box>
  );
};

export default SideBar;
