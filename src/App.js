import Router from "./router";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useUserData } from "./utils/hooks/useUserData";
import { useEffect } from "react";
import { getToken } from "./utils/helpers";

const theme = createTheme({});

function App() {
   const [, setUserData] = useUserData();

   useEffect(() => {
      if (getToken()) {
         setUserData(JSON.parse(atob(getToken())));
      }
   }, []);

   return (
      <ThemeProvider theme={theme}>
         <Router />
      </ThemeProvider>
   );
}

export default App;
