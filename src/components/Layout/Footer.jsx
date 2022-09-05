import React from "react";
import { Typography } from "@mui/material";

function Footer() {
   return (
      <Typography variant="body2" color="text.secondary" align="center">
         {"Copyright © "}
         Ilham Hanif {new Date().getFullYear()}
         {"."} All rights reserved | Version 1.0.0
      </Typography>
   );
}

export default Footer;
