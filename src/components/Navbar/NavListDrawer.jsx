import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";

export default function NavListDrawer({ onClick, navLinks }) {
  const navigate = useNavigate();
  const navigateD = (path) => {
    navigate("/"+path);
    setTimeout(() => {
      window.location.href = path;
    }, 500);
  }

  return (
    <Box sx={{ width: 250 }} onClick={onClick}>
      <nav aria-label="main mailbox folders">
        <List>
          {navLinks.map((item) => (
            <ListItem disablePadding key={item.title}>
              <ListItemButton onClick={()=>navigateD(item.path)}>
                {/* <ListItemIcon>{item.icon}</ListItemIcon> */}
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem> 
          ))}
          <ListItem disablePadding>
            <ListItemButton component={Link} to={'/courses'}>
              {/* <ListItemIcon>{item.icon}</ListItemIcon> */}
              <ListItemText primary={'Cursos'} />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
    </Box>
  );
}
