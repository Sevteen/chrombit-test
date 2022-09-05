import { Box, Toolbar } from "@mui/material";
import React from "react";
import Footer from "./Footer";
import SectionContainer from "./SectionContainer";

function SectionBox({ children }) {
   return (
      <>
         <Box
            // component="main"
            sx={{
               backgroundColor: "grey",
               flexGrow: 1,
               height: "100vh",
               overflow: "auto",
            }}
         >
            <Toolbar />

            <SectionContainer>{children}</SectionContainer>

            <Footer sx={{ pt: 4 }} />
         </Box>
      </>
   );
}

export default SectionBox;
