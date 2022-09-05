import { Avatar, styled, Toolbar, Typography } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import logo from "../../assets/logo-O-bg.png";

const DrawerConst = styled(MuiDrawer, {
   shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
   "& .MuiDrawer-paper": {
      position: "relative",
      whiteSpace: "nowrap",
      maxWidth: "100%",
      width: "300px",
      transition: theme.transitions.create("max-width", {
         easing: theme.transitions.easing.sharp,
         duration: theme.transitions.duration.enteringScreen,
      }),
      ...(!open && {
         overflowX: "hidden",
         transition: theme.transitions.create("max-width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
         }),
         maxWidth: theme.spacing(7),
      }),
   },
}));

export default function Drawer({ drawerWidth, open, toggleDrawer, closeToggleDrawer, children }) {
   return (
      <>
         <DrawerConst
            variant="permanent"
            open={open}
            onMouseEnter={toggleDrawer}
            onMouseLeave={closeToggleDrawer}
         >
            <Toolbar
               sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  px: [1],
                  marginBottom: "5px",
               }}
            >
               <Avatar src={logo} sx={{ width: 50, height: 50, marginRight: "15px" }} />

               <Typography variant="h6" sx={{ flexGrow: 1 }}>
                  Chromebit
               </Typography>
            </Toolbar>

            {children}
         </DrawerConst>
      </>
   );
}
