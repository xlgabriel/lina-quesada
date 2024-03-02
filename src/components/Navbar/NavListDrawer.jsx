import styled from "@emotion/styled";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export default function NavListDrawer({ onClick, navLinks }) {
  const goldColor1 = "#d4bc88";
  const navigate = useNavigate();
  const navigateD = (path) => {
    navigate("/" + path);
    setTimeout(() => {
      if(path !== "cursos" && path !== "procedimientos") window.location.href = path; 
    }, 500);
  };
  
  return (
    <Box sx={{ width: 250, bgcolor:"rgba(20,20,20)" }} onClick={onClick} height={"100vh"}>
      <nav aria-label="main mailbox folders" style={{backgroundColor: "", color:goldColor1}}>
        <List sx={{bgcolor:""}}>
          {navLinks.map((item) => (
            <ListItem disablePadding key={item.title} sx={{"&:hover":{bgcolor:goldColor1, color:"black"}}}>
              <ListItemButton onClick={() => navigateD(item.path)}>
                {/* <ListItemIcon>{item.icon}</ListItemIcon> */}
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
      <Divider />
    </Box>
  );
}

{/* <ListItem disablePadding sx={{"&:hover":{bgcolor:goldColor1, color:"black"}}}> */}
            // <ListItemButton component={Link} to={"/cursos"}>
              {/* <ListItemIcon>{item.icon}</ListItemIcon> */}
              // <ListItemText primary={"Cursos"} />
            // </ListItemButton>
          // </ListItem>
          // <ListItem disablePadding sx={{"&:hover":{bgcolor:goldColor1, color:"black"}}}>
          //   <ListItemButton component={Link} to={"/procedimientos"} style={{color:goldColor1, "&:hover":{bgcolor:"red", color:"black"}}}>
          //     {/* <ListItemIcon>{item.icon}</ListItemIcon> */}
          //     <ListItemText primary={"Procedimientos"} />
          //   </ListItemButton>
          // </ListItem>