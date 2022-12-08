import { Divider } from "@mui/material";
import { menuItems, settingItems } from "../../../../static/menuItems";
import SidebarSection from "./SidebarSection";
const Sidebar = () => {
  return (
    <>
      <SidebarSection menuItems={menuItems} subHeaderTitle="General" />
      <Divider />
      <SidebarSection menuItems={settingItems} subHeaderTitle="General" />
    </>
  );
};

export default Sidebar;
