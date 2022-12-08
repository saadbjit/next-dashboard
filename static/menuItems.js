
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import Send from "@mui/icons-material/Send";
export const menuItems = [
  {
    title: "Dashboard",
    type: "single",
    icon: Send,
    path: "/admin/dashboard",
    childItem: [],
  },
    {
      title: "Product",
      type: "dropdown",
      icon: MenuIcon,
      path: null,
      childItem: [{
        title: "Category List",
        icon: Send,
        path: "/category",
      },
      {
        title: "Product List",
        icon: Send,
        path: "/admin/dashboard/product/list",
      },
    ],
     
    },
    {
      title: "Inbox",
      type: "single",
      icon: InboxIcon,
      list: null,
      path: "/inbox",
      childItem:[]
    },
    {
      title: "Drafts",
      type: "single",
      icon: MailIcon,
      list: null,
      path: "/inbox",
      childItem:[]
    },
    {
      title: "User",
      type: "dropdown",
      icon: PermIdentityIcon,
      path: null,
      childItem: [{
        title: "User List",
        icon: Send,
        path: "/product",
      },
      {
        title: "User Create",
        icon: Send,
        path: "/product",
      },
    ],
   
    },
  ];

export const settingItems = [
    {
      title: "Profile",
      type: "dropdown",
      icon: MenuIcon,
      path: null,
      childItem: [{
        title: "Edit Profile",
        icon: Send,
        path: "/product",
      },
      {
        title: "Change Password",
        icon: Send,
        path: "/product",
      },
    ],
     
    },
    {
      title: "Inbox",
      type: "single",
      icon: InboxIcon,
      list: null,
      path: "/inbox",
      childItem:[]
    },
    {
      title: "Drafts",
      type: "single",
      icon: MailIcon,
      list: null,
      path: "/inbox",
      childItem:[]
    },
   
  ];


