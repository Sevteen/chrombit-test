import { useUserData } from "./useUserData";
import { useCallback } from "react";
import { removeToken, storeToken } from "../helpers";

export const useAuthentication = () => {
   const [, setUserData] = useUserData();
   const login = useCallback(
      (userData, token) => {
         setUserData(userData);
         storeToken(token);
      },
      [setUserData]
   );
   const logout = useCallback(() => {
      removeToken();
      setUserData(null);
   }, [setUserData]);
   return { login, logout };
};
