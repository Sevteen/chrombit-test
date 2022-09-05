import { List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import menu from "./menu";

export default function VerticalMenu(props) {
   const location = useLocation();
   const { pathname } = location;

   return (
      <List>
         {menu.map((item, index) => {
            if (!(item.link === "")) {
               return (
                  <Link key={index} to={item.link}>
                     <ListItemButton selected={true}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.title} />
                     </ListItemButton>
                  </Link>
               );
            } else {
               return (
                  <React.Fragment key={index}>
                     {props.open && <ListSubheader>{item.title}</ListSubheader>}
                     {item.children.map((item2, index) => {
                        return (
                           <Link key={index} to={item2.link}>
                              <ListItemButton selected={pathname === item2.link}>
                                 <ListItemIcon>{item2.icon}</ListItemIcon>
                                 <ListItemText primary={item2.subTitle} />
                              </ListItemButton>
                           </Link>
                        );
                     })}
                  </React.Fragment>
               );
            }
         })}
      </List>
   );
}
