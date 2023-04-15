import { AspectRatio } from "@mui/joy";
import {
  Box,
  Button,
  CardActions,
  CardContent,
  Container,
  IconButton,
  Typography,
  Hidden,
  CardMedia,
  Drawer,
  Dialog,
  DialogContent,
  DialogActions,
  AppBar,
  Toolbar,
  Slide
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import ReactWhatsapp from "react-whatsapp";
import { motion } from "framer-motion";
import Card from "@mui/joy/Card";
import { Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import { courseContent } from "./constCourses";
import CourseDetails from "./CourseDetails";

const Courses = () => {
  const [course, setCourse] = useState();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const openDrawer = (item) => {
    setOpen(true);
    setCourse(item);
    setMessage(`Hola. Me gustaría inscribirme al curso ${item.title}`);
    console.log('drawer openned');
  };
  const handleClose = () =>{
    setOpen(false);
  }
  return (
    <Container sx={{ backgroundColor: "", height: "auto" }}>
      <Typography
        variant="h3"
        sx={{
          color: "#efb810",
          fontFamily: "Merriweather",
          textAlign: "center",
        }}
      >
        Cursos
      </Typography>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        exit={{ opacity: 0 }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            my: 2,
            justifyContent: { xs: "center", md: "center", lg: "normal" },
          }}
        >
          {courseContent.map((item, index) => (
            <Grid item xs={10} sm={8} md={6} lg={4}>
              <Paper
                elevation={3}
                sx={{
                  height: { sm: "auto", md: 330 },
                  overflowX: "hidden",
                  display: "flex",
                  flexWrap: "wrap",
                  alignContent: "space-between",
                }}
                component={motion.div}
                whileHover={{ scale: 1.05 }}
              >
                <CardMedia
                  component="img"
                  sx={{ height: "150px", backgroundSize: "contain" }}
                  src="images/logo-lina-quesada.png"
                  srcSet="images/logo-lina-quesada.png 2x"
                  loading="lazy"
                  alt="asf"
                ></CardMedia>
                <CardContent sx={{ width: "100%", textAlign: "center" }}>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "600", fontFamily: "Merriweather" }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ fontFamily: "Merriweather", my: 1 }}
                  >
                    {item.subtitle1}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontFamily: "Merriweather" }}
                  >
                    {item.subtitle2}
                  </Typography>
                </CardContent>
                <Box sx={{ display: "flex", justifyContent: "center" }}></Box>
                <Hidden only={["xs", "sm"]}>
                  <Button
                    key={`title+${index}`}
                    size="sm"
                    aria-label="Explore Bahamas Islands"
                    sx={{
                      ml: "auto",
                      fontWeight: 800,
                      width: "100%",
                      color: "black",
                      "&:hover": { color: "#efb810" },
                    }}
                    onClick={() => openDrawer(item)}
                  >
                    Ver más
                  </Button>
                </Hidden>
                <Hidden only={["md", "lg"]}>
                  <Button
                    key={`title+${index}`}
                    size="sm"
                    aria-label="Explore Bahamas Islands"
                    sx={{
                      ml: "auto",
                      fontWeight: 800,
                      width: "100%",
                      color: "black",
                      "&:hover": { color: "#efb810" },
                    }}
                    onClick={() => openDrawer(item)}
                  >
                    Ver más
                  </Button>
                </Hidden>
              </Paper>
            </Grid>
          ))}
          <Hidden>
          <Dialog
          open={open}
          scroll="paper"
          onClose={() => handleClose()}
          sx={{height:{xs:"auto",md:650}, my:{xs:0 ,md:4}, mx:{xs:0 ,md:10}, mt:{xs:5,md:4}}}
          fullScreen
        >
          <IconButton
                edge="start"
                onClick={handleClose}
                aria-label="close"
                sx={{position:"fixed", color:"#fff", ml:1,mt:1}}
              >
                <CloseIcon />
              </IconButton>
          <DialogContent
            sx={{
              backgroundColor: "#04060b",
              height: "450px",
            }}
          >
            <CourseDetails courseDetail={course}></CourseDetails>
          </DialogContent>
          <DialogActions
            sx={{
              position: "sticky",
              bottom: 0,
              backgroundColor: "black",
              display: "flex",
              justifyContent: "center",
              py: 1,
              width: "100%",
            }}
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Button
              variant="contained"
              sx={{
                width: { xs: "100%", md: "30%" },
                backgroundColor: "#efb603",
                fontSize: "18px",
                borderColor: "#000",
                color: "#000",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#ffffff",
                  color: "#000000",
                },
              }}
              component={ReactWhatsapp}
              number="57-322-617-4846"
              message={message}
            >
              Inscríbete Ahora
            </Button>
          </DialogActions>
        </Dialog>
          </Hidden>
        </Grid>
      </motion.div>
    </Container>
  );
};

export default Courses;
