import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import SidebarMenu from "./SidebarMenu";

export default function SidebarSection({ menuItems, subHeaderTitle }) {
  console.log("menuItems = ", menuItems);

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        subHeaderTitle ? (
          <ListSubheader component="div" id="nested-list-subheader">
            {subHeaderTitle}
          </ListSubheader>
        ) : null
      }
    >
      {menuItems.map((item, index) => (
        <div key={index}>
          <SidebarMenu item={item} />
        </div>
      ))}
    </List>
  );
}
