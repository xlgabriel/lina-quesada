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
} from "@mui/material";
import { motion } from "framer-motion";
import Card from "@mui/joy/Card";
import { Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import { courseContent } from "./constCourses";

const Courses = () => {
  
  return (
    <Container sx={{ backgroundColor: "", height: "auto" }}>
      <Typography
        variant="h3"
        sx={{ color: "#efb810", fontFamily: "Merriweather", textAlign:"center" }}
      >
        Cursos
      </Typography>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        exit={{ opacity: 0 }}
      >
        <Grid container spacing={2} sx={{ my: 2 }}>
          {courseContent.map((item,index) => (
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <Paper
                elevation={3}
                sx={{
                  height: 330,
                  overflowX: "hidden",
                  display: "flex",
                  flexWrap: "wrap",
                  alignContent: "space-between",
                }}
                component={motion.div}
                whileHover={{scale:1.05}}
              >
                <CardMedia
                  component="img"
                  sx={{ height: "150px", backgroundSize: "contain" }}
                  src="images/logo-lina-quesada.png"
                  srcSet="images/logo-lina-quesada.png 2x"
                  loading="lazy"
                  alt="asf"
                ></CardMedia>
                <CardContent sx={{width:"100%", textAlign:"center"}}>
                  <Typography variant="h6" sx={{ fontWeight: "600", fontFamily: "Merriweather" }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body1" sx={{fontFamily: "Merriweather", my:1}}>
                    {item.subtitle1}
                  </Typography>
                  <Typography variant="body2" sx={{fontFamily: "Merriweather"}}>
                    {item.subtitle2}
                  </Typography>
                </CardContent>
                <Box sx={{ display: "flex", justifyContent: "center" }}></Box>
                <Button
                  key={`title+${index}`}
                  size="sm"
                  aria-label="Explore Bahamas Islands"
                  sx={{ ml: "auto", fontWeight: 800, width: "100%", color:"black", "&:hover":{color:"#efb810"} }}
                  to={"/coursesDetails"}
                  state={{course:item}}
                  component={Link}
                >
                  Ver más
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default Courses;
