import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Collapse from "@mui/material/Collapse";
import Link from "next/link";
import { useState } from "react";

const MenuLink = ({ item }) => {
  return (
    <>
      <Link href={item.path} className={`linkstyle`}>
        <ListItemButton sx={item.type == "single" ? {} : { pl: 4 }}>
          <ListItemIcon>
            <item.icon />
          </ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItemButton>
      </Link>
    </>
  );
};

/* Single Menu Item Component */
const SingleItem = ({ item }) => {
  return (
    <>
      {/* <ListItemButton>
        <ListItemIcon>
          <item.icon />
        </ListItemIcon>
        <ListItemText primary={item.title} />
      </ListItemButton> */}
      <MenuLink item={item} />
    </>
  );
};

/* Drop Down Menu Item Component */
const DropDownItem = ({ item, child }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
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
          {child.map((ch, index) => (
            <div key={index}>
              <MenuLink item={ch} />
              {/* <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <ch.icon />
                </ListItemIcon>
                <ListItemText primary={ch.title} />
              </ListItemButton> */}
            </div>
          ))}
        </List>
      </Collapse>
    </>
  );
};

const SidebarMenu = ({ item }) => {
  console.log("item = ", item);
  if (item.type == "single") {
    return <SingleItem item={item} />;
  }
  if (item.type == "dropdown") {
    console.log("child - ", item.childItem);
    const child = item.childItem;
    return <DropDownItem item={item} child={child} />;
  }
};
export default SidebarMenu;
