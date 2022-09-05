import React from "react";
import { Box } from "@mui/system";

function MainBox({ children }) {
   return (
      <>
         <Box sx={{ display: "flex" }}>{children}</Box>
      </>
   );
}

export default MainBox;
