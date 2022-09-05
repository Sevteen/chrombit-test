import LogoutIcon from "@mui/icons-material/Logout";
import { AppBar as MuiAppBar, Avatar, styled, Toolbar, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../../assets/logo-O-bg.png";
import menu from "./menu";
import { titleString } from "../../utils/helpers";
import { useUserData } from "../../utils/hooks/useUserData";
import { useAuthentication } from "../../utils/hooks/useAuthentication";

export default function AppBar({ drawerWidth, open, children }) {
   let location = useLocation();
   const [userData] = useUserData();
   const { logout } = useAuthentication();

   const [title, setTitle] = useState("");
   const menus = menu;

   const AppBarConst = styled(MuiAppBar, {
      shouldForwardProp: (prop) => prop !== "open",
   })(({ theme, open }) => ({
      backgroundColor: "#FFFFFF",
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
         easing: theme.transitions.easing.sharp,
         duration: theme.transitions.duration.leavingScreen,
      }),
      ...(open && {
         marginLeft: drawerWidth,
         width: `calc(100% - ${drawerWidth}px)`,
         transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
         }),
      }),
   }));

   const handleLogout = () => {
      logout();
   };

   useEffect(() => {
      menus.forEach((item) => {
         if (item.link === "") {
            item.children.forEach((item2) => {
               if (item2.link === location.pathname) {
                  setTitle(item2.title);
               }
            });
         } else {
            if (item.link === location.pathname) {
               setTitle(item.title);
            }
         }
      });
   }, [location?.pathname]);

   return (
      <AppBarConst position="absolute" open={open}>
         <Toolbar sx={{ pr: "24px" }}>
            {open ? null : (
               <Avatar src={logo} sx={{ width: 50, height: 50, marginLeft: "-20px" }} />
            )}
            <Typography variant="h4" color="#5993ae" sx={{ fontWeight: 500, flexGrow: 1, ml: 2 }}>
               {title}
            </Typography>

            <Typography variant="h6" color="#5993ae" style={{ marginRight: "20px" }}>
               Hai, {titleString(userData?.username)}
            </Typography>

            <Button
               variant="contained"
               color="error"
               endIcon={<LogoutIcon />}
               onClick={handleLogout}
            >
               Sign Out
            </Button>
         </Toolbar>
      </AppBarConst>
   );
}
