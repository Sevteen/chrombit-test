export const storeToken = (userToken) => {
   localStorage.setItem("USER_TOKEN", userToken);
};
export const getToken = () => {
   return localStorage.getItem("USER_TOKEN");
};
export const removeToken = () => {
   return localStorage.removeItem("USER_TOKEN");
};

export const titleString = (str) => {
   var splitStr = str.toLowerCase().split(" ");
   for (var i = 0; i < splitStr.length; i++) {
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
   }
   return splitStr.join(" ");
};

export const getFirstName = (name) => {
   return String(name).trim().replace(/ .*/, " ");
};
