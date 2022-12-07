import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Collapse from "@mui/material/Collapse";
import * as React from "react";
const SidebarMenu = ({ item }) => {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  console.log("item = ", item);
  if (item.type == "single") {
    return (
      <>
        <ListItemButton>
          <ListItemIcon>
            <item.icon />
          </ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItemButton>
      </>
    );
  }
  if (item.type == "dropdown") {
    console.log("child - ", item.childItem);
    return (
      <>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <item.icon />
          </ListItemIcon>
          <ListItemText primary={item.title} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <item.childItem.icon />
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </List>
        </Collapse>
      </>
    );
  }
};
export default SidebarMenu;
