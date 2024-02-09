import Facebook from "@mui/icons-material/Facebook";
import Instragram from "@mui/icons-material/Instagram";
import MenuIcon from "@mui/icons-material/Menu";
import WhatsApp from "@mui/icons-material/WhatsApp";
import {
  AppBar,
  Button, Container, Drawer,
  IconButton,
  Toolbar,
  Typography,
  Box
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavListDrawerResponsive from "./NavListDrawer";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactWhatsapp from "react-whatsapp";
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'

const navLinks = [
  { title: "Inicio", path: "#" },
  { title: "Trayectoria", path: "#trayectoria" },
  { title: "Testimonios", path: "#testimonios" },
  { title: "Contacto", path: "#contacto" },
];

export default function Navbar() {
  const golColor1 = '#d4bc88';
  const goldColor = '#d3a737';
  const colorNav = '#04060b'
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

  const [h, setH] = useState("auto");
  const [w, setW] = useState("173");
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      
      const handleScroll = () => {
        const position = window.scrollY;
        console.log(position)
        if(position > 50){
          setH("auto");
          setW("83")
        }else{
          setH("auto");
          setW("173")
        }
      }

      window.addEventListener("scroll", handleScroll);
   
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [])

  return (
    <>
      <AppBar position="fixed" sx={{ bgcolor: "#000", backdropFilter:"blur(8px)", py:1}}>
        <Container>
          <Toolbar>
            <Typography sx={{ flexGrow: 1 }} component="a" href="/">
              <img
                src="images/logo-lina-quesada-2-rec.png"
                alt="logo-lina-quesada"
                width={w}
                height={h}
                fluid
              />
              {/* <img
                src="images/navbar-brand.png"
                alt="logo2-lina-quesada"
                width="147"
                height="26"
                fluid
              /> */}
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
                      color: golColor1,
                      fontSize: "16px",
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
                    color: golColor1,
                    fontSize: "16px",
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
                    color: golColor1,
                    fontSize: "16px",
                    fontWeight: 600,
                    fontFamily: "Merriweather",
                    "&:hover": {
                      fontSize: "1.2rem",
                      color: "white",
                    },
                  }}
                  onClick={() => window.scrollTo(0, 0)}
                  to={"/cursos"}
                >
                  Cursos
                </Button>
              )}
              {navbarState && (
                <Button
                  component={Link}
                  sx={{
                    color: golColor1,
                    fontSize: "16px",
                    fontWeight: 600,
                    fontFamily: "Merriweather",
                    "&:hover": {
                      fontSize: "1.2rem",
                      color: "white",
                    },
                  }}
                  onClick={() => window.scrollTo(0, 0)}
                  to={"/procedimientos"}
                >
                  Procedimientos
                </Button>
              )}
            </Box>
            <IconButton
              sx={{
                color: golColor1,
                "&:hover": { transform: "scale(1.2)", color: golColor1 },
              }}
              href="https://www.facebook.com/lina.quesada.75"
              target={"_blank"}
            >
              <Facebook />
            </IconButton>
            <IconButton
              sx={{
                color: golColor1,
                "&:hover": { transform: "scale(1.2)", color: golColor1 },
              }}
              href="https://www.instagram.com/linaquesada/"
              target={"_blank"}
            >
              <Instragram />
            </IconButton>
            <IconButton
              sx={{ color: golColor1, "&:hover": { transform: "scale(1.2)" }, mr:5 }}
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
              sx={{ display: { xs: "block", lg: "none" }}}
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
