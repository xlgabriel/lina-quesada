import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  Container,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import NavListDrawerResponsive from "./NavListDrawer";
import { Box } from "@mui/system";
import Courses from "../Courses/Courses";
import Facebook from "@mui/icons-material/Facebook";
import Instragram from "@mui/icons-material/Instagram";
import WhatsApp from "@mui/icons-material/WhatsApp";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactWhatsapp from "react-whatsapp";
import { motion } from "framer-motion";
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'
const navLinks = [
  { title: "Inicio", path: "#" },
  { title: "Acerca", path: "#about" },
  { title: "Testimonios", path: "#testimonials" },
  { title: "Contacto", path: "#contact" },
];

export default function Navbar() {
  const goldColor = '#d3a737';
  const [open, setOpen] = useState(false);
  const [navbarState, setNavbarState] = useState(true);
  const navigate = useNavigate();
  const handleChangeNavbar = (value) => {
    setNavbarState(value);
  };
  const navigateF = (item) => {
    navigate("/"+item.path);
    setTimeout(() => {
      setOpen(false)
      window.location.href = item.path;
    }, 500);
  }
  return (
    <>
      <AppBar position="fixed" sx={{ bgcolor: "#04060b" }}>
        <Container>
          <Toolbar>
            <Typography sx={{ flexGrow: 1 }} component="a" href="/">
              <img
                src="images/logo-lina-quesada.png"
                alt="logo-lina-quesada"
                width="61"
                height="43"
                fluid
              />
              <img
                src="images/navbar-brand.png"
                alt="logo2-lina-quesada"
                width="147"
                height="26"
                fluid
              />
            </Typography>
            {navbarState && (
              <Box
                sx={{
                  display: {
                    xs: "none",
                    lg: "block",
                  },
                }}
              >
                {navLinks.map((link) => (
                  <Button
                    key={link.title}
                    sx={{
                      color: goldColor,
                      fontSize: "18px",
                      fontWeight: 600,
                      fontFamily: "Merriweather",
                      "&:hover": {
                        fontSize: "1.2rem",
                        color: "white",
                      },
                    }}
                    onClick={()=> navigateF(link)}
                    // href={link.path}
                  >
                    {link.title}
                  </Button>
                ))}
              </Box>
            )}
            <Box sx={{ display: { xs: "none", lg: "block" }, flexGrow: 1 }}>
              {!navbarState && (
                <Button
                  component={Link}
                  sx={{
                    color: goldColor,
                    fontSize: "18px",
                    fontWeight: 600,
                    fontFamily: "Merriweather",
                    "&:hover": {
                      fontSize: "1.2rem",
                      color: "white",
                    },
                  }}
                  // onClick={() => handleChangeNavbar(!navbarState)}
                  to={"/"}
                >
                  Inicio
                </Button>
              )}
              {navbarState && (
                <Button
                  component={Link}
                  sx={{
                    color: goldColor,
                    fontSize: "18px",
                    fontWeight: 600,
                    fontFamily: "Merriweather",
                    "&:hover": {
                      fontSize: "1.2rem",
                      color: "white",
                    },
                  }}
                  // onClick={() => handleChangeNavbar(!navbarState)}
                  to={"/courses"}
                >
                  Cursos
                </Button>
              )}
            </Box>
            <IconButton
              sx={{
                color: goldColor,
                "&:hover": { transform: "scale(1.2)", color: goldColor },
              }}
              href="https://www.facebook.com/lina.quesada.75"
              target={"_blank"}
            >
              <Facebook />
            </IconButton>
            <IconButton
              sx={{
                color: goldColor,
                "&:hover": { transform: "scale(1.2)", color: goldColor },
              }}
              href="https://www.instagram.com/linaquesada/"
              target={"_blank"}
            >
              <Instragram />
            </IconButton>
            <IconButton
              sx={{ color: goldColor, "&:hover": { transform: "scale(1.2)" } }}
              component={ReactWhatsapp}
              number="57-322-617-4846"
              message="Hello World!!!"
            >
              <WhatsApp />
            </IconButton>
            <IconButton
              color="inherit"
              size="large"
              edge="start"
              aria-label="menu"
              onClick={() => setOpen(true)}
              sx={{ display: { xs: "block", lg: "none" }, flexGrow:1, }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: { xs: "block", lg: "none" } }}
      >
        <NavListDrawerResponsive
          onClick={() => setOpen(false)}
          navLinks={navLinks}
        />
      </Drawer>
    </>
  );
}
