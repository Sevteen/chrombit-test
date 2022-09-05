import { useState } from "react";
import MainBox from "../Layout/MainBox";
import SectionBox from "../Layout/SectionBox";
import AppBar from "../Navigation/AppBar";
import Drawer from "../Navigation/Drawer";

import VerticalMenu from "../Navigation/VerticalMenu";

export default function Layout({ children }) {
   const [open, setOpen] = useState(false);
   const drawerWidth = 300;

   const toggleDrawer = () => {
      setOpen(true);
   };

   const closeToggleDrawer = () => {
      setOpen(false);
   };

   return (
      <MainBox>
         <AppBar drawerWidth={drawerWidth} open={open} />

         <Drawer
            drawerWidth={drawerWidth}
            open={open}
            toggleDrawer={toggleDrawer}
            closeToggleDrawer={closeToggleDrawer}
         >
            <VerticalMenu open={open} />
         </Drawer>

         <SectionBox>{children} </SectionBox>
      </MainBox>
   );
}
