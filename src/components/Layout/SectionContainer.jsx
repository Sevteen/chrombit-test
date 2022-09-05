import React from "react";
import Container from "@mui/material/Container";

const SectionContainer = ({ children }) => {
   return (
      <>
         <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
            {children}
         </Container>
      </>
   );
};

export default SectionContainer;
