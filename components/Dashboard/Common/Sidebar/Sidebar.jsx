import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import SidebarMenu from "./SidebarMenu";

export default function Sidebar({ menuItems }) {
  console.log("menuItems = ", menuItems);

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
      }
    >
      {menuItems.map((item, index) => (
        <SidebarMenu item={item} key={index} />
        // <ListItem key={text} disablePadding>
        //   <ListItemButton>
        //     <ListItemIcon>
        //       {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
        //     </ListItemIcon>
        //     <ListItemText primary={text} />
        //   </ListItemButton>
        // </ListItem>
      ))}

      {/* <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse> */}
    </List>
  );
}
