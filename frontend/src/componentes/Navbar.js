import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import { Link, useLocation } from "react-router-dom";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import BorderColorIcon from "@mui/icons-material/BorderColor";

export default function Navbar(props) {
  const { drawerWidth, content } = props;
  const location = useLocation();
  const path = location.pathname;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Tienda caninos
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                to="/menu"
                selected={"/menu" === path}
              >
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={"Menu"} />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                to="/ver"
                selected={"/ver" === path}
              >
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary={"Ver"} />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                to="/crear"
                selected={"/crear" === path}
              >
                <ListItemIcon>
                  <BorderColorIcon />
                </ListItemIcon>
                <ListItemText primary={"Crear"} />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
      {/* Ajuste del contenido principal */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3, // Reduce padding
          // marginLeft: `${drawerWidth}px`,
          // width: `calc(100% - ${drawerWidth}px)`,
        }}
      >
        <Toolbar />
        {content}
      </Box>
    </Box>
  );
}

// import * as React from "react";
// import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import AppBar from "@mui/material/AppBar";
// import CssBaseline from "@mui/material/CssBaseline";
// import Toolbar from "@mui/material/Toolbar";
// import List from "@mui/material/List";
// import { Link, useLocation } from "react-router-dom";
// import Typography from "@mui/material/Typography";
// import Divider from "@mui/material/Divider";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import HomeIcon from "@mui/icons-material/Home";
// import InfoIcon from "@mui/icons-material/Info";
// import BorderColorIcon from "@mui/icons-material/BorderColor";

// export default function Navbar(props) {
//   const { drawerWidth, content } = props;
//   const location = useLocation();
//   const path = location.pathname;

//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />
//       <AppBar
//         position="fixed"
//         sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
//       >
//         <Toolbar>
//           <Typography variant="h6" noWrap component="div">
//             Tienda caninos
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         variant="permanent"
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           [`& .MuiDrawer-paper`]: {
//             width: drawerWidth,
//             boxSizing: "border-box",
//           },
//         }}
//       >
//         <Toolbar />
//         <Box sx={{ overflow: "auto" }}>
//           <List>
//             <ListItem disablePadding>
//               <ListItemButton
//                 component={Link}
//                 to="/menu"
//                 selected={"/menu" === path}
//               >
//                 <ListItemIcon>
//                   <HomeIcon />
//                 </ListItemIcon>
//                 <ListItemText primary={"Menu"} />
//               </ListItemButton>
//             </ListItem>

//             <ListItem disablePadding>
//               <ListItemButton
//                 component={Link}
//                 to="/ver"
//                 selected={"/ver" === path}
//               >
//                 <ListItemIcon>
//                   <InfoIcon />
//                 </ListItemIcon>
//                 <ListItemText primary={"Ver"} />
//               </ListItemButton>
//             </ListItem>

//             <ListItem disablePadding>
//               <ListItemButton
//                 component={Link}
//                 to="/crear"
//                 selected={"crear" === path}
//               >
//                 <ListItemIcon>
//                   <BorderColorIcon />
//                 </ListItemIcon>
//                 <ListItemText primary={"Crear"} />
//               </ListItemButton>
//             </ListItem>
//           </List>
//         </Box>
//       </Drawer>
//       <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//         <Toolbar />

//         {content}
//       </Box>
//     </Box>
//   );
// }
