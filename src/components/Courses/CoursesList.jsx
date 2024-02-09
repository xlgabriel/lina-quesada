import { AspectRatio } from "@mui/joy";
import {
  CardOverflow,
  List,
  ListItem,
  ListItemButton,
  Paper,
  Drawer,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Box,
  Button,
  Container,
  IconButton,
  Typography,
  Hidden,
  Card,
} from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CourseDetails from "./CourseDetails";
import ReactWhatsapp from "react-whatsapp";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { courseContent } from "./constCourses";

const CoursesDetails = () => {
  const [course, setCourse] = useState();
  const [stateDetails, setStateDetails] = useState(true);
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  let location = useLocation();
  const sendCourse = (item) => {
    setStateDetails(false);
    setTimeout(() => {
      setStateDetails(true);
      setCourse(item);
      setMessage(`Hola. Me gustaría inscribirme al curso ${item.title}`);
    }, 100);
  };
  useEffect(() => {
    console.log("--inicio courses list--");
    console.log(location.state.course);
    console.log(course);
    console.log("--fin courses list--");
    const c =
      location.state.course !== null ? location.state.course : courseContent[0];
    // setCourse(location.state.course)
    setCourse(c);
    setMessage(`Hola. Me gustaría solicitar información sobre el curso ${c.title}`);
    console.log("hiiii" + c.title);
  }, []);

  return (
    <>
      <Hidden only={["xs", "sm"]}>
        <Box
          sx={{
            width: "90%",
            overflowX: "hidden",
            overflowY: "hidden",
            overflow: "hidden",
            scrollbarWidth: "none",
            mx: "auto",
            backgroundColor: "#04060b",
            mb: 2,
          }}
          component={motion.div}
          initial={{ x: -2000 }}
          animate={{ x: 0, transition: { duration: 1 } }}
          exit={{ opacity: 0 }}
        >
          <Grid container sx={{ width: "100%" }}>
            <Grid
              item
              sm={6}
              md={4}
              lg={4}
              sx={{
                backgroundColor: "#04060b",
                height: "570px",
                overflowX: "hidden",
              }}
            >
              <List>
                {courseContent.map((item, index) => (
                  <ListItem
                    key={index}
                    onClick={() => {
                      sendCourse(item);
                      //setOpen(true);
                    }}
                  >
                    <Paper
                      sx={{ width: "80%", mb: 1, cursor: "pointer" }}
                      component={motion.div}
                      initial={{ height: "50%", width: "100%" }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <AspectRatio
                        minHeight="70px"
                        maxHeight="150px"
                        sx={{ mb: 1 }}
                        component={CardMedia}
                      >
                        <img
                          src="images/logo-lina-quesada.png"
                          srcSet="images/logo-lina-quesada.png 2x"
                          loading="lazy"
                          alt="asf"
                        />
                      </AspectRatio>
                      <CardContent>
                        <Typography
                          variant="h4"
                          component="div"
                          sx={{ fontSize: { sm: "16px", md: "20px" } }}
                        >
                          {item.title}
                        </Typography>
                        <Typography variant="body1" component="div">
                          {item.subtitle1}
                        </Typography>
                        <Typography variant="subtitle2" component="div">
                          {item.subtitle2}
                        </Typography>
                      </CardContent>
                    </Paper>
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid
              item
              xs={6}
              sm={6}
              md={8}
              lg={8}
              sx={{
                backgroundColor: "#04060b",
                height: "570px",
                overflowX: "hidden",
              }}
            >
              <Paper elevation={3} square sx={{ backgroundColor: "#04060b" }}>
                <Box
                  sx={{
                    backgroundColor: "#04060b",
                    height: "",
                  }}
                >
                  {stateDetails && (
                    <CourseDetails courseDetail={course}></CourseDetails>
                  )}
                </Box>
                {stateDetails && (
                  <Box
                    sx={{
                      position: "sticky",
                      bottom: 0,
                      backgroundColor: "black",
                      display: "flex",
                      justifyContent: "center",
                      py: 1,
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
                  </Box>
                )}
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Hidden>
      <Hidden only={["md", "lg"]}>
        <Box
          sx={{
            width: {xs:"90%", sm:"80%"},
            overflowX: "hidden",
            overflowY: "hidden",
            overflow: "hidden",
            scrollbarWidth: "none",
            mx: "auto",
            backgroundColor: "#04060b",
            mb: 2,
          }}
          component={motion.div}
          initial={{ x: -2000 }}
          animate={{ x: 0, transition: { duration: 1 } }}
          exit={{ opacity: 0 }}
        >
          <Grid container sx={{ width: {xs:"100%", sm:"80%"} }}>
            <Grid
              item
              sm={12}
              md={12}
              lg={12}
              sx={{
                backgroundColor: "#04060b",
                overflowX: "hidden",
              }}
            >
              <List>
                {courseContent.map((item, index) => (
                  <ListItem
                    key={index}
                    onClick={() => {
                      //sendCourse(item);
                      setOpen(true);
                    }}
                  >
                    <Paper
                      sx={{ width: "80%", mb: 1, cursor: "pointer" }}
                      component={motion.div}
                      initial={{ height: "50%", width: "100%" }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <AspectRatio
                        minHeight="70px"
                        maxHeight="150px"
                        sx={{ mb: 1 }}
                        component={CardMedia}
                      >
                        <img
                          src="images/logo-lina-quesada.png"
                          srcSet="images/logo-lina-quesada.png 2x"
                          loading="lazy"
                          alt="asf"
                        />
                      </AspectRatio>
                      <CardContent>
                        <Typography
                          variant="h4"
                          component="div"
                          sx={{ fontSize: { sm: "16px", md: "20px" } }}
                        >
                          {item.title}
                        </Typography>
                        <Typography variant="body1" component="div">
                          {item.subtitle1}
                        </Typography>
                        <Typography variant="subtitle2" component="div">
                          {item.subtitle2}
                        </Typography>
                      </CardContent>
                    </Paper>
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </Box>
      </Hidden>
    </>
  );
};

export default CoursesDetails;

{
  /* {[1, 2, 3, 4].map((item) => (
                  <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Card variant="outlined" sx={{ width: 160, transition: "0.2s",
                      "&:hover": {
                        transform: "scale(1.05)",
                      }, }}>
                      <CardOverflow>
                      <AspectRatio minHeight="120px" maxHeight="200px" sx={{ mb:2}}>
                        <img
                          src="images/logo-lina-quesada.png"
                          srcSet="images/logo-lina-quesada.png 2x"
                          loading="lazy"
                          alt="asf"
                        />
                      </AspectRatio>
                      </CardOverflow>
                      <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
                        Micropigmentación
                      </Typography>
                      <Box sx={{ display: "flex", justifyContent:"center" }}>
                        <Button
                          variant="outlined"
                          size="sm"
                          color="primary"
                          aria-label="Explore Bahamas Islands"
                          sx={{ ml: "auto", fontWeight: 600 }}
                          to={'/coursesD'}
                          component={Link}
                        >
                          Explore
                        </Button>
                      </Box>
                    </Card>
                  </Grid>
                ))} */
}
