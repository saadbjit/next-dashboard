
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import Send from "@mui/icons-material/Send";
import StarBorder from "@mui/icons-material/StarBorder";
 const menuItems = [
    {
      title: "Product",
      type: "dropdown",
      icon: MenuIcon,
      childItem: [{
        title: "User List",
        path: "/users",
        type: "single",
        icon: Send,
        list: null,
        path: "/product",
      },
      {
        title: "User Create",
        path: "/users",
        type: "single",
        icon: Send,
        list: null,
        path: "/product",
      },
    ],
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
    {
      title: "User",
      type: "dropdown",
      icon: PermIdentityIcon,
      childItem: [{
        title: "User List",
        path: "/users",
        type: "single",
        icon: Send,
        list: null,
        path: "/product",
      },
      {
        title: "User Create",
        path: "/users",
        type: "single",
        icon: Send,
        list: null,
        path: "/product",
      },
    ],
      path: null,
    },
  ];

  export default menuItems;