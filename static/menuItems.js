import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";

 const menuItems = [
    {
      title: "Product",
      type: "dropdown",
      icon: MenuIcon,
      list: {
        title: "Product List",
        path: "/products",
      },
      path: null,
    },
    {
      title: "Inbox",
      type: "single",
      icon: InboxIcon,
      list: null,
      path: "/inbox",
    },
    {
      title: "Drafts",
      type: "single",
      icon: MailIcon,
      list: null,
      path: "/inbox",
    },
  ];

  export default menuItems;