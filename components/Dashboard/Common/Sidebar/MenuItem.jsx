import { ListItemButton, ListItemIcon } from "@mui/material";

const MenuItem = ({ item }) => {
  console.log("item = ", item);
  return (
    <div>
      <ListItemButton>
        hei
        <ListItemIcon>
          <item.icon />
        </ListItemIcon>
        <ListItemText primary={item.title} />
      </ListItemButton>
    </div>
  );
};

export default MenuItem;
